// Style
import "/src/index.css";

function Footer() {
  return (
    <>
      {/* <div className="cover flex h-[95vh] px-5 items-center  max-md:flex-wrap max-md:text-center gap-4"></div> */}

      <footer className="bg-gradient-to-tr from-[#011A3A] to-[#056a7c] text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="max-w-xs">
            <h2 className="text-3xl font-extrabold text-white tracking-wide">
              MyPortfolio
            </h2>
            <p className="mt-3 text-l text-gray-400 leading-relaxed">
              Engineering student & web developer, passionate about coding,
              data, and problem-solving ✨
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[17px]">
              <li>
                <a href="#Home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#Achievements" className="hover:text-white">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="links ">
              <div className="flex items-center cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/nada-ashraf-386223287/"
                  className="text-gray-200 text-[1.5rem] hover:scale-125  transition-all duration-200 mr-4"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nada-ashraf-386223287/"
                  className="hover:scale-110  transition-all duration-200 "
                >
                  <span>Linkedin</span>
                </a>
              </div>

              <div className="flex items-center cursor-pointer">
                <a
                  href="https://github.com/nadaashraf25003"
                  className="text-gray-200 text-[1.5rem] hover:scale-125    transition-all duration-200 mr-4"
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://github.com/nadaashraf25003"
                  className="hover:scale-110  transition-all duration-200 "
                >
                  <span>Github</span>
                </a>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="https://www.facebook.com/nadaasraf.asraf.3"
                  className="text-gray-200 text-[1.5rem] hover:scale-125    transition-all duration-200 mr-4"
                >
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a
                  href="https://www.facebook.com/nadaasraf.asraf.3"
                  className="hover:scale-110  transition-all duration-200 "
                >
                  <span>Facebook</span>
                </a>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
                  className="text-gray-200 text-[1.5rem] hover:scale-125    transition-all duration-200 mr-4"
                >
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
                  className="hover:scale-110  transition-all duration-200 "
                >
                  <span>Instagram</span>
                </a>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="https://wa.me/201143942227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 text-[1.5rem] hover:scale-125    transition-all duration-200 mr-4"
                >
                  <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <a
                  href="https://wa.me/201143942227"
                  className="hover:scale-110  transition-all duration-200 "
                >
                  <span>Whatsapp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Nada Ashraf. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
