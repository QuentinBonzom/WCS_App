import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_CONTACT_TO_EMAIL = "contact@webcodestudio.fr";
const allowedBudgets = new Set(["", "<1k", "1-5k", "5-10k", "10k+"]);

const budgetLabels: Record<string, string> = {
  "": "Non précisé",
  "<1k": "Moins de 1 000 €",
  "1-5k": "1 000 € – 5 000 €",
  "5-10k": "5 000 € – 10 000 €",
  "10k+": "Plus de 10 000 €",
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot: return a neutral success so automated submissions do not retry.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254).toLowerCase();
  const company = clean(payload.company, 120);
  const budget = clean(payload.budget, 20);
  const message = clean(payload.message, 5000);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    message.length < 10 ||
    !allowedBudgets.has(budget)
  ) {
    return NextResponse.json(
      { error: "Vérifiez les informations saisies." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactToEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO_EMAIL;
  if (!apiKey || !contactToEmail) {
    console.error("Contact email service is not configured.");
    return NextResponse.json(
      { error: "Le service d’envoi est temporairement indisponible." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Non précisée");
  const safeBudget = escapeHtml(budgetLabels[budget]);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from:
      process.env.CONTACT_FROM_EMAIL ??
      "WebCode Studio <contact@webcodestudio.fr>",
    to: [contactToEmail],
    replyTo: email,
    subject: `Nouveau projet — ${name}${company ? ` · ${company}` : ""}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Entreprise : ${company || "Non précisée"}`,
      `Budget : ${budgetLabels[budget]}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;color:#1d1d1f;line-height:1.6;max-width:640px;margin:auto">
        <h1 style="font-size:24px;margin-bottom:24px">Nouvelle demande de projet</h1>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr><td style="padding:8px 0;color:#707070">Nom</td><td style="padding:8px 0"><strong>${safeName}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#707070">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px 0;color:#707070">Entreprise</td><td style="padding:8px 0">${safeCompany}</td></tr>
          <tr><td style="padding:8px 0;color:#707070">Budget</td><td style="padding:8px 0">${safeBudget}</td></tr>
        </table>
        <div style="padding:20px;background:#f5f5f7;border-radius:16px">
          <strong>Message</strong>
          <p style="margin:8px 0 0">${safeMessage}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend contact email failed:", error);
    return NextResponse.json(
      { error: "Le message n’a pas pu être envoyé. Réessayez plus tard." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
