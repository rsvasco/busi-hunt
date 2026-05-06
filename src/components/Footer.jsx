import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

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
    <footer className="bg-[#1F2A5A] text-white pt-16 pb-6 font-poppins">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#E63946] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BH</span>
              </div>
              <span className="text-white font-bold text-xl">
                Busi<span className="text-[#E63946]">Hunt</span>
              </span>
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
            <h4 className="font-semibold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-gray-400 hover:text-[#E63946] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {["Team", "Director", "Contact Us", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#E63946] text-sm transition-colors">
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
                <MdLocationOn size={15} className="mt-0.5 text-[#E63946] shrink-0" />
                No. 513, Kamaraj salai,Axis Bank upstairs, 2nd floor,Saram,Puducherry- 605013
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdPhone size={15} className="text-[#E63946] shrink-0" />
                +91 9500900595
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdEmail size={15} className="text-[#E63946] shrink-0" />
                info@busihunt.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BusiHunt. All rights reserved.</p>
          <p>Designed with ❤️ by BusiHunt Team</p>
        </div>
      </div>
    </footer>
  );
}