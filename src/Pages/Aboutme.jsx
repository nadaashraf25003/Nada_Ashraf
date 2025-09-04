// Style
import "/src/index.css";

function Aboutme() {
  return (
    <>
      <div
        className="cover  px-16 items-center  max-md:flex-wrap max-md:text-center gap-4
      py-[10%]"
      >
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-10 flex items-end gap-1  
        animate__animated animate__fadeInDown max-md:px-5"
        >
          Who am I?
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>

        {/* <p>Front End React Developer</p> */}
        <fieldset className="border-2 border-PrimSecColor rounded-xl p-6 shadow-sm">
          <legend className="px-4 text-lg text-PrimSecColor font-extrabold">
            Front End React Developer
          </legend>
          <p className="text-justify text-textColor font-bold leading-relaxed indent-16">
            I’m Nada Ashraf, a third-year Communication & Electronics
            Engineering student at Shubra Faculty of Engineering with a strong
            passion for web development, data analytics, and emerging
            technologies. I specialize in building responsive, user-friendly
            websites using HTML, CSS, JavaScript, React, and .NET, and I also
            have experience in data analysis and visualization with Python,
            Pandas, and Power BI. <br />
            <br />
            Alongside development, I work as a Web Development Instructor, where
            I enjoy teaching and simplifying complex concepts for students.
            Through projects like a Freelancing Platform, Smart University
            System, GPA Calculator, and Image Editor, I’ve gained hands-on
            experience in solving real-world problems. My goal is to grow as a
            skilled software engineer and data analyst, creating impactful
            digital solutions that bridge technology and innovation.
          </p>
          <div className="links mt-2 float-end">
            <a
              href="https://www.linkedin.com/in/nada-ashraf-386223287/"
              className="text-OrangeColor text-[2rem] hover:bg-PrimSecColor p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/nadaashraf25003"
              className="text-OrangeColor text-[2rem] hover:bg-PrimSecColor p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.facebook.com/nadaasraf.asraf.3"
              className="text-OrangeColor text-[2rem] hover:bg-PrimSecColor p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
              className="text-OrangeColor text-[2rem] hover:bg-PrimSecColor p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://wa.me/201143942227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-OrangeColor text-[2rem] hover:bg-PrimSecColor p-2 hover:rounded transition-all duration-200 mr-1"
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </fieldset>
        <div className="numbers flex mt-10 gap-5 justify-center max-md:flex-wrap">
          <div className="experience bg-PrimSecColor text-btnTxTColor px-10 py-5 rounded-lg text-center font-extrabold ">
            <span className="text-3xl">3</span> Years <br />
            Experience
          </div>
          <div className="projects bg-PrimSecColor text-btnTxTColor px-10 py-5 rounded-lg text-center font-extrabold ">
            <span className="text-3xl">11+</span> <br />
            Project Completed
          </div>
          <div className="achievements bg-PrimSecColor text-btnTxTColor px-10 py-5 rounded-lg text-center font-extrabold ">
            <span className="text-3xl">8</span> <br /> Achievements
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
