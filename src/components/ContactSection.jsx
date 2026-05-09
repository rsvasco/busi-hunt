import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

export default function ContactSection() {
  // EmailJS credentials from .env
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Form state
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Contact info
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      value:
        "No. 513, Kamaraj Salai, Axis Bank Upstairs, 2nd Floor, Saram, Puducherry - 605013",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      value: "+91 9500900595",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: "info@busihunt.com",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      value: "Mon – Sat, 9:30 AM – 7:00 PM",
    },
  ];

  // Common input style
  const inputStyle =
    "w-full px-5 py-4 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#E63946] focus:ring-4 focus:ring-[#E63946]/10";

  // Handle input
  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
    setSendError("");
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only letters and spaces are allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (form.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    return newErrors;
  };

  // Send email
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setSendError("");

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendError(
        "Email service is not configured properly. Please check environment variables."
      );
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      );

      // Success
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendError(
        "Failed to send your message. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[320px] h-[320px] bg-[#1F2A5A]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#E63946]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#E63946] font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2A5A] leading-tight tracking-tight mb-5">
              Get in Touch
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-10">
              Whether you want to join BusiHunt, start a chapter,
              collaborate, or simply explore opportunities — our team
              is ready to help you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <item.icon className="text-[#E63946] text-lg" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#1F2A5A] text-base mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] p-[1px] bg-gradient-to-br from-white/40 to-white/10"
          >
            <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-[32px] p-7 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2A5A] mb-2 tracking-tight">
                Send Us a Message
              </h3>

              <p className="text-gray-500 text-sm mb-8">
                We usually respond within 24 hours.
              </p>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
                  ✓ Your message has been sent successfully.
                </div>
              )}

              {/* Error Message */}
              {sendError && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                  {sendError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={
                          field === "name"
                            ? "Full Name"
                            : "Email Address"
                        }
                        className={`${inputStyle} ${
                          errors[field]
                            ? "border-red-400 focus:ring-red-100"
                            : ""
                        }`}
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`${inputStyle} ${
                      errors.subject
                        ? "border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    className={`${inputStyle} resize-none ${
                      errors.message
                        ? "border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#E63946] hover:bg-[#d92f3c] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(230,57,70,0.35)]"
                >
                  {sending ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}