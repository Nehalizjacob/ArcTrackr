import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logoArcite2 from "../../assets/logoArcite.png";

function AdminFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-white text-gray-900 pt-6 border-t border-gray-200"
      style={{
        backgroundImage: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:py-6 text-[15px]">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <Link to="" className="flex items-center">
              <img src={logoArcite2} className="h-10 mr-3" alt="ARCITE" />
            </Link>
            <p className="text-base mt-5 text-gray-800 leading-relaxed max-w-[700px] sm:max-w-[800px] mx-auto sm:mx-0 text-justify">
              ArcTrackr is a powerful platform designed to streamline and manage student training progress across multiple locations. 
              It enables institutions to monitor performance, standardize reporting, and ensure consistent delivery of industry-relevant skills. 
              Whether onsite or remote, ArcTrackr bridges the gap between training centers and administration with real-time insights.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 grid grid-cols-2 gap-4 text-base">
            {/* Social Links */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy">Follow Us</h2>
              <ul className="space-y-3">
                {[
                  { href: "https://www.facebook.com/arciteschooloftechnicaleducation/", icon: faFacebookF, label: "Facebook" },
                  { href: "https://www.instagram.com/arcite.in/", icon: faInstagram, label: "Instagram" },
                  { href: "https://x.com/arcite_in", icon: faXTwitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/company/arc-institute-of-technical-education/", icon: faLinkedin, label: "LinkedIn" },
                  { href: "https://www.youtube.com/@arciteschooloftechnicaledu6571", icon: faYoutube, label: "YouTube" },
                ].map(({ href, icon, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-teal-500 hover:translate-x-1 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-teal-500 hover:bg-teal-500 hover:text-white p-2 rounded-full transition-colors"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy">Contact Us</h2>
              <ul className="space-y-3">
                {[
                  { icon: faPhone, text: "9633221153" },
                  { icon: faMapMarkerAlt, text: "Kerala, India" },
                  { icon: faEnvelope, text: "info@arctrackr.in" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <FontAwesomeIcon icon={icon} className="text-teal-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
    {/* Footer Bottom */}
<div className="mt-8 pt-5 border-t border-gray-300 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
  {/* Centered on mobile, left on desktop */}
  <span className="w-full sm:w-auto text-base text-gray-700 text-center sm:text-left">
    © 2025{" "}
    <span>
      An{" "}
      <a
        href="https://www.arcite.in/"
        className="font-semibold text-teal-500 inline-flex items-center"
      >
        ARCITE
      </a>{" "}
      Initiative
    </span>
  </span>

  {/* Right-aligned arrow */}
  <div className="w-full sm:w-auto flex justify-center sm:justify-end">
    <button
      onClick={scrollToTop}
      className="bg-teal-500 text-white p-3 w-12 h-12 rounded-full shadow-md rotate-[-45deg] hover:bg-navy hover:rotate-0 transition-all"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>
  </div>
</div>

      </div>
    </footer>
  );
}

export default AdminFooter;