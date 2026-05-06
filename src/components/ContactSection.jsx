import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      value: "No. 513, Kamaraj salai,Axis Bank upstairs,2nd floor,Saram,Puducherry- 605013",
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

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Whether you want to join BusiHunt, start a chapter, or just explore,
            our team is here to help you.
          </p>

          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1F2A5A]/10 flex items-center justify-center">
                  <item.icon className="text-[#1F2A5A] text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm mb-6">
              ✓ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#E63946] outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#E63946] outline-none"
              />
            </div>

            {/* Subject */}
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#E63946] outline-none"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#E63946] outline-none resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#E63946] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              <FaPaperPlane size={14} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
