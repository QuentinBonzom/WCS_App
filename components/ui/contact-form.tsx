"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const inputCls =
  "rounded-xl border border-transparent bg-silver px-4 py-3 text-[17px] text-ink outline-none transition-colors placeholder:text-graphite focus:border-azure focus:bg-snow";

const copy = {
  fr: {
    honeypot: "Site web",
    title: "Parlez-nous de votre projet",
    name: "Nom complet",
    namePlaceholder: "Jean Dupont",
    email: "Email",
    emailPlaceholder: "jean@exemple.com",
    company: "Entreprise",
    companyPlaceholder: "Votre entreprise",
    budget: "Budget estimé",
    budgetPlaceholder: "Sélectionnez votre budget",
    budget1: "Moins de 1 000 €",
    budget2: "1 000 € - 5 000 €",
    budget3: "5 000 € - 10 000 €",
    budget4: "Plus de 10 000 €",
    message: "Décrivez votre projet",
    messagePlaceholder:
      "Parlez-nous de votre projet, vos objectifs et vos délais...",
    fallbackError: "Le message n'a pas pu être envoyé.",
    sending: "Envoi en cours...",
    sent: "Message envoyé",
    submit: "Envoyer le message",
    success:
      "Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
  },
  en: {
    honeypot: "Website",
    title: "Tell us about your project",
    name: "Full name",
    namePlaceholder: "John Smith",
    email: "Email",
    emailPlaceholder: "john@example.com",
    company: "Company",
    companyPlaceholder: "Your company",
    budget: "Estimated budget",
    budgetPlaceholder: "Select your budget",
    budget1: "Less than €1,000",
    budget2: "€1,000 - €5,000",
    budget3: "€5,000 - €10,000",
    budget4: "More than €10,000",
    message: "Describe your project",
    messagePlaceholder:
      "Tell us about your project, your goals and your timeline...",
    fallbackError: "The message could not be sent.",
    sending: "Sending...",
    sent: "Message sent",
    submit: "Send message",
    success: "Thank you! Your message was sent. We will reply within 24h.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function ContactForm({ locale = "fr" }: { locale?: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || t.fallbackError);
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : t.fallbackError,
      );
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[28px] bg-snow p-12"
    >
      <label className="absolute -left-[9999px]" aria-hidden="true">
        {t.honeypot}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <h3 className="mb-7 text-2xl font-semibold tracking-tight">
        {t.title}
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">{t.name}</span>
          <input className={inputCls} type="text" name="name" placeholder={t.namePlaceholder} required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">{t.email}</span>
          <input className={inputCls} type="email" name="email" placeholder={t.emailPlaceholder} required />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">{t.company}</span>
          <input className={inputCls} type="text" name="company" placeholder={t.companyPlaceholder} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">{t.budget}</span>
          <select className={`${inputCls} appearance-none`} name="budget" defaultValue="">
            <option value="">{t.budgetPlaceholder}</option>
            <option value="<1k">{t.budget1}</option>
            <option value="1-5k">{t.budget2}</option>
            <option value="5-10k">{t.budget3}</option>
            <option value="10k+">{t.budget4}</option>
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2">
        <span className="text-sm text-graphite">{t.message}</span>
        <textarea
          className={`${inputCls} resize-y`}
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          required
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending"
          ? t.sending
          : status === "sent"
            ? `${t.sent} ✓`
            : t.submit}
      </button>
      
      {status === "sent" && (
        <p className="mt-4 rounded-xl bg-silver p-4 text-center text-sm text-ink">
          {t.success}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 p-4 text-center text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
