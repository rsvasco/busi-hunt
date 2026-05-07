import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Footer() {

  const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Busi-Hunt/61584858450905/?rdid=vbaFqZhJx9hlqBQv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gs1bRpGp4%2F",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/busihunt/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/busihunt_official?igsh=MWoxZTJ0cWcwdzU5bA%3D%3D",
    label: "Instagram",
  },
];
  return (
    <footer className="bg-[#1F2A5A] text-white pt-14 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 xl:gap-14 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                <img
                  src={logo}
                  alt="BusiHunt Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-2xl">
                  Busi<span className="text-[#E63946]">Hunt</span>
                </span>

                <span className="text-[10px] tracking-[3px] text-gray-400 uppercase mt-1">
                  Business Excellence
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting ambitious professionals with business opportunities across the globe.
            </p>
            <div className="mt-4 flex gap-3">
  {socialLinks.map((social, i) => {
    const Icon = social.icon;

    return (
      <a
        key={i}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 transition-all duration-300 hover:scale-110 hover:bg-[#E63946]"
      >
        <Icon size={14} />
      </a>
    );
  })}
</div>
          </div>

          {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base mb-5 text-white">
                Quick Links
              </h4>

              <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Find a Chapter", to: "/chapter" },
                { label: "How to Join", to: "/how-to-join" },
                { label: "Gallery", to: "/gallery" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#E63946] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#E63946] transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white">
              Resources
            </h4>

            <ul className="space-y-3">
              {[
                "Team",
                "Director",
                "Contact Us",
                "Privacy Policy",
                "Terms of Use",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#E63946] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#E63946] transition-all duration-300 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MdLocationOn size={18} className="text-[#E63946]" />
                </div>

                <span>
                  No. 513, Kamaraj salai, Axis Bank upstairs,
                  2nd floor, Saram, Puducherry - 605013
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MdPhone size={18} className="text-[#E63946]" />
                </div>

                <span>+91 9500900595</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MdEmail size={18} className="text-[#E63946]" />
                </div>

                <span>info@busihunt.com</span>
              </li>
            </ul>
          </div>
        </div>

       <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BusiHunt. All rights reserved.</p>
          <p>Designed with ❤️ by BusiHunt Team</p>
        </div>
      </div>
    </footer>
  );
}