"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      //form ka data backend ko ja raha hai

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };
  //form ka default behaviour get hota hai and vo url mai show hota hai vo bad practice hai vo na ho is liye hum e.preventDefault() likhte hai pr agar vo work na kare to POST is fallback vo chalega hi
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="max-w-lg mx-auto mt-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm space-y-6"
    >
      {/* Heading */}
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Get in Touch</h2>
        <p className="text-sm text-neutral-500">
          Have a question, idea, or feedback? Fill out the form and we’ll get
          back to you soon.
        </p>
      </div>

      {/* Name */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-neutral-700">
          Full Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-neutral-700">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-neutral-700">Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what’s on your mind..."
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black resize-none"
        />
      </div>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      <p className="text-center text-xs text-neutral-400">
        We respect your privacy. Your information will not be shared.
      </p>
    </form>
  );
}
