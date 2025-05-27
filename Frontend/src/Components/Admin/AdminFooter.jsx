import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import footerbg from "../../../assets/certificates/footerbg1.avif";
// import arciteLogo from '../../../assets/certificates/ARCITEBLACK1.png'
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
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-white text-gray-900 pt-3  border border-gray-100"
      style={{
        backgroundImage: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
 <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:py-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1 p">  
            <Link to="" className="flex items-center">
              <img src={logoArcite2} className="h-16 mr-3" alt="ARCITE" />
            </Link>
            <p className="text-sm md:text-base mt-6 text-gray-800 leading-relaxed max-w-[700px] sm:max-w-[800px] mx-auto sm:mx-0 text-justify">
  Urban CAD is designed to bring specialized software training to students across the globe. 
  It aims to establish a network of training centres, bridging geographical gaps and 
  empowering students to acquire industry-relevant skills, no matter where they are.
</p>


          </div>

          {/* Right Section - Social Links & Contact */}
          <div className="flex-1 grid grid-cols-2 gap-1">
            {/* Social Links */}
            <div>
              <h2 className="font-syn mb-4 text-xl font-semibold text-navy">
                Follow Us
              </h2>
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
                      className="flex items-center gap-3 transition-all hover:text-aqua hover:translate-x-2"
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        size="lg"
                        className="text-aqua hover:bg-aqua hover:text-navy p-2 rounded-full transition-colors"
                      />
                      <span className="text-lg">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-syn mb-4 text-xl font-semibold text-navy">
                Contact Us
              </h2>
              <ul className="space-y-3">
                {[
                  { icon: faPhone, text: "9633221153" },
                  { icon: faMapMarkerAlt, text: "Kerala, India" },
                  { icon: faEnvelope, text: "info@urbancad.in" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-lg">
                    <FontAwesomeIcon icon={icon} className="text-aqua" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" flex flex-col md:flex-row sm:justify-between items-center mt-6 pt-4 border-t-2 border-gray-300 text-lg">
        <span className="text-gray-900 text-center sm:text-left">
  © 2025{" "}
  <a href="#">
    An{" "}
    <a href="https://www.arcite.in/" className="font-syn text-aqua" style={{ display: 'inline-flex', alignItems: 'center' }}>
ARCITE
    </a>{" "}
    Initiative
  </a>
</span>


          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className=" bg-aqua text-white p-3 w-12 h-12 rounded-full shadow-lg transform rotate-[-45deg] transition-all duration-300 hover:bg-navy hover:rotate-0"
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