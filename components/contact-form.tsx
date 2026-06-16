"use client";

import { useState } from "react";

const inputCls =
  "rounded-xl border border-transparent bg-silver px-4 py-3 text-[17px] text-ink outline-none transition-colors placeholder:text-graphite focus:border-azure focus:bg-snow";

export function ContactForm() {
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
        throw new Error(result.error || "Le message n’a pas pu être envoyé.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Le message n’a pas pu être envoyé.",
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
        Site web
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <h3 className="mb-7 text-2xl font-semibold tracking-tight">
        Parlez-nous de votre projet
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">Nom complet</span>
          <input className={inputCls} type="text" name="name" placeholder="Jean Dupont" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">Email</span>
          <input className={inputCls} type="email" name="email" placeholder="jean@exemple.com" required />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">Entreprise</span>
          <input className={inputCls} type="text" name="company" placeholder="Votre entreprise" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-graphite">Budget estimé</span>
          <select className={`${inputCls} appearance-none`} name="budget" defaultValue="">
            <option value="">Sélectionnez votre budget</option>
            <option value="<1k">Moins de 1 000 €</option>
            <option value="1-5k">1 000 € – 5 000 €</option>
            <option value="5-10k">5 000 € – 10 000 €</option>
            <option value="10k+">Plus de 10 000 €</option>
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2">
        <span className="text-sm text-graphite">Décrivez votre projet</span>
        <textarea
          className={`${inputCls} resize-y`}
          name="message"
          rows={5}
          placeholder="Parlez-nous de votre projet, vos objectifs et vos délais…"
          required
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-azure px-6 py-3 text-xl text-white transition-colors hover:bg-[#0077ed] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending"
          ? "Envoi en cours…"
          : status === "sent"
            ? "Message envoyé ✓"
            : "Envoyer le message"}
      </button>
      <p className="mt-4 text-center text-sm text-graphite">
        ⚡ Réponse sous 24h garantie
      </p>
      {status === "sent" && (
        <p className="mt-4 rounded-xl bg-silver p-4 text-center text-sm text-ink">
          Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.
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
