"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

export default function ContactForm() {
  const { form } = contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "We could not send your message right now. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("We could not send your message right now. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-intallo-input-border p-8 md:p-10 rounded-2xl flex items-center justify-center text-center">
        <p className="text-intallo-navy text-xl font-bold">
          Thanks. Your message has been received.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-intallo-input-border p-8 md:p-10 rounded-2xl space-y-6 shadow-sm"
    >
      <h3 className="text-xl font-bold text-intallo-navy text-center mb-6">
        {form.heading}
      </h3>

      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {form.fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label htmlFor={field.name} className="block text-black font-bold text-sm">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full bg-intallo-page border border-intallo-input-border rounded-lg px-4 py-3 text-sm text-intallo-body focus:outline-none focus:ring-2 focus:ring-intallo-blue"
          />
        </div>
      ))}

      <div className="space-y-1">
        <label htmlFor="message" className="sr-only">
          {form.message.hiddenLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={form.message.placeholder}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-intallo-page border border-intallo-input-border rounded-lg px-4 py-3 text-sm text-intallo-body focus:outline-none focus:ring-2 focus:ring-intallo-blue"
        />
      </div>

      {status === "error" && (
        <div aria-live="polite" className="text-red-600 text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-intallo-blue hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? form.submitting : form.submit}
      </button>
    </form>
  );
}
