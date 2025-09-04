// Style
import "/src/index.css";

// Assets
import Nada from "../assets/Nada.png";

// React
import { useLocation } from "react-router-dom";
import { useState } from "react";

// React
// Components

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // track mobile menu state
  const Location = useLocation();
  console.log(Location.pathname);
  return (
    <>
      {/* Nanbar on Desktop  */}
      <nav
        className="h-[95vh] ml-0 w-[20vw] bg-mainColor pt-10 max-lg:hidden rounded-l-xl overflow-y-auto
       scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-mainColor"
      >
        <div className="img text-center">
          <img src={Nada} alt="" className="w-[40%] mx-auto rounded-full" />
        </div>
        <h2 className="text-center text-secondColor text-[2rem] font-bold mb-5">
          Nada Ashraf
        </h2>
        {/* <hr className="w-50" /> */}
        <ul className="mx-10 max-xl:mx-5">
          <li className=" text-gray-200 text-[1rem] hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-house mr-3 transition-all duration-200"></i>
            <a href="#Home" className="text-gray-200">
              Home
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-user mr-3 transition-all duration-200"></i>
            <a href="#About" className="text-gray-200">
              About
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-file-pen mr-3 transition-all duration-200"></i>
            <a href="#Education" className="text-gray-200">
              Education
            </a>
          </li>
          {/* <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded"><i class="fa-solid fa-house mr-3 transition-all duration-200"></i><a href="#Home" className="text-gray-200">Skills</a></li> */}
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-brain mr-3 transition-all duration-200"></i>
            <a href="#Experience" className="text-gray-200">
              Experience
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-gears mr-3 transition-all duration-200"></i>
            <a href="#Services" className="text-gray-200">
              Services
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-diagram-project mr-3 transition-all duration-200"></i>
            <a href="#Projects" className="text-gray-200">
              Projects
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-trophy mr-3 transition-all duration-200"></i>
            <a href="#Achievements" className="text-gray-200">
              Achievements
            </a>
          </li>
          <li className=" text-gray-200 text-[1rem]  hover:bg-[#029bb7] p-2 hover:rounded">
            <i class="fa-solid fa-envelope mr-3 transition-all duration-200"></i>
            <a href="#Contact" className="text-gray-200">
              Contact
            </a>
          </li>
        </ul>
        {/* <hr /> */}
        <div className="links mx-5 mt-10">
          <a
            href="https://www.linkedin.com/in/nada-ashraf-386223287/"
            className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nadaashraf25003"
            className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.facebook.com/nadaasraf.asraf.3"
            className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
            className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="https://wa.me/201143942227"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
          >
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>
        </div>
      </nav>

      {/* ============================================================================================================= */}
      {/* Navbar on size less than Desktop  */}
      <nav
        className="fixed hidden ml-0 bg-mainColor p-2 max-lg:flex items-center justify-between
            top-0 left-0 z-50 w-full px-10"
      >
        <div className="flex items-center">
          <div className="img text-center">
            <img src={Nada} alt="" className="w-[50px] mx-auto rounded-full" />
          </div>

          <ul className="mx-10 max-xl:mx-5 flex max-sm:hidden relative">
            <li className="text-gray-200 text-[1rem] hover:bg-[#029bb7] p-2 hover:rounded">
              <a href="#Home" className="text-gray-200">
                Home
              </a>
            </li>
            <li className="text-gray-200 text-[1rem] hover:bg-[#029bb7] p-2 hover:rounded">
              <a href="#About" className="text-gray-200">
                About
              </a>
            </li>
            <li className="text-gray-200 text-[1rem] hover:bg-[#029bb7] p-2 hover:rounded">
              <a href="#Education" className="text-gray-200">
                Education
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative group text-gray-200 text-[1rem] p-2 cursor-pointer">
              <span className="hover:bg-[#029bb7] hover:rounded px-2   block">
                Dropdown ▾
              </span>
              <ul className="absolute left-0 hidden group-hover:block bg-mainColor mt-2 rounded shadow-lg min-w-[150px] z-50">
                <li className="hover:bg-[#029bb7] p-2 rounded">
                  <a href="#Experience" className="text-gray-200">
                    Experience
                  </a>
                </li>
                <li className="hover:bg-[#029bb7] p-2 rounded">
                  <a href="#Services" className="text-gray-200">
                    Services
                  </a>
                </li>
                <li className="hover:bg-[#029bb7] p-2 rounded">
                  <a href="#Projects" className="text-gray-200">
                    Projects
                  </a>
                </li>
                <li className="hover:bg-[#029bb7] p-2 rounded">
                  <a href="#Achievements" className="text-gray-200">
                    Achievements
                  </a>
                </li>
              </ul>
            </li>

            <li className="text-gray-200 text-[1rem] hover:bg-[#029bb7] p-2 hover:rounded">
              <a href="#Contact" className="text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ============================================================================================================= */}
      {/* Mobile Navbar */}
      <nav
        className="fixed hidden max-sm:flex items-center justify-between
        top-0 left-0 z-50 w-full bg-mainColor px-6 py-3"
      >
        <div className="flex items-center gap-3">
          <img src={Nada} alt="" className="w-[50px] rounded-full" />
          <h2 className="text-secondColor font-bold">Nada Ashraf</h2>
        </div>

        {/* Bars Icon */}
        <div
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <i className="fa-solid fa-close text-white text-[1.5rem]"></i>
          ) : (
            <i className="fa-solid fa-bars text-white text-[1.5rem]"></i>
          )}
        </div>
      </nav>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed  top-[65px] left-0 w-full bg-mainColor z-40 p-4 hidden flex-col gap-2 max-sm:flex">
          <a
            href="#Home"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#Education"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Education
          </a>
          <a
            href="#Experience"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#Services"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#Projects"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#Achievements"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Achievements
          </a>
          <a
            href="#Contact"
            className="text-gray-200 hover:bg-[#029bb7] p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div className="links  ">
            <a
              href="https://www.linkedin.com/in/nada-ashraf-386223287/"
              className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/nadaashraf25003"
              className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.facebook.com/nadaasraf.asraf.3"
              className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
              className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://wa.me/201143942227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 text-[2rem] hover:bg-[#029bb7] p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
// 1- Cover
// 2- About
// 3- Education
// 4- Skills
// 5- Work Experience
// 6- Offered Services => Page for details
// 7- Projects => Page for details
// 8- Achievements => overlay for all certifications for details each certificate
// 9- Testimonials  feedback ===== Not now
// 10- Contact => Form to send the data (Google Form)
