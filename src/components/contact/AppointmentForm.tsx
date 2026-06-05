"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { whatsappUrl } from "@/lib/utils";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const phone = form.get("phone") as string;
    const service = form.get("service") as string;
    const message = `Hello, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}\nTreatment: ${service}`;
    window.open(whatsappUrl(message), "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <p className="font-semibold text-accent-800">
          Thank you! We&apos;ve opened WhatsApp — send your message to confirm your
          appointment.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Or call us directly at{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-700">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      id="appointment"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-slate-900">Book an Appointment</h2>
      <p className="text-sm text-slate-600">
        Fill the form — we&apos;ll connect you via WhatsApp for quick confirmation.
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
          Mobile Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[0-9]{10}"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="10-digit mobile"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
          Treatment Required *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        >
          <option value="">Select treatment</option>
          <option value="Piles">Piles / Hemorrhoids</option>
          <option value="Fissure">Anal Fissure</option>
          <option value="Fistula">Fistula</option>
          <option value="Laser Surgery">Laser Piles Surgery</option>
          <option value="Non-Surgical">Non-Surgical Consultation</option>
          <option value="Follow-up">Follow-up Visit</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-accent-600 py-3.5 font-semibold text-white transition hover:bg-accent-500"
      >
        Request Appointment via WhatsApp
      </button>
    </form>
  );
}
