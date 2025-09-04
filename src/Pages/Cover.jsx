// Style
import "/src/index.css";

// Assets
import Nada from "../assets/Nada.png";
import cvFile from "../assets/Nada_Ashraf_CV.pdf";

function Cover() {
  return (
    <>
      {/* h-full max-sm:h-[100vh] max-w-sm:h-[200vh] */}
      <div className="relative cover flex  px-16 items-center py-[20%] max-lg:flex-wrap max-lg:justify-center gap-4">
        <div className="right w-3/4 max-md:w-full ">
          <h1
            className="text-5xl font-bold max-md:text-3xl text-OrangeColor mb-5
          typing "
          >
            Hi, I'm Nada Ashraf
          </h1>
          <p
            className="text-secondColor text-2xl max-md:text-lg font-extrabold mb-5
          animate__animated animate__fadeInUp "
          >
            Front End React Developer
          </p>
          <p className="text-textColor font-bold text-justify indent-16">
            A Communication & Electronics Engineering student passionate about
            web development, data analytics, and emerging technologies. I build
            responsive websites, create data-driven insights, and enjoy teaching
            as a Web Development Instructor. My projects reflect my drive to
            solve real-world problems and grow as a skilled software engineer
            and data analyst.
          </p>
          <div className="flex gap-4 mt-10 max-md:text-center max-sm:flex-wrap max-lg:justify-center">
            {/* <button
              className="px-6 py-3 rounded-md font-semibold 
                     bg-btnColor text-btnTxTColor 
                     hover:bg-[#029bb7] hover:text-black 
                     shadow-md hover:shadow-lg 
                     transition-all duration-300 ease-in-out"
            >
              My Projects
            </button>

            <button
              className="px-6 py-3 rounded-md font-semibold 
                     bg-btnColor text-btnTxTColor 
                     hover:bg-[#029bb7] hover:text-black
                     shadow-md hover:shadow-lg 
                     transition-all duration-300 ease-in-out"
            >
              Download CV
            </button> */}
            <a href="#Projects">
              <button class="button">
                <div class="text">My Projects</div>
              </button>
            </a>
            <a
              href={cvFile} // path in public folder
              download="Nada_Ashraf_CV.pdf" // file name when downloaded
            >
              {" "}
              <button class="button">
                <div class="text">
                  <i class="fa-solid fa-download"></i> Download CV
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="left relative max-md:mx-auto">
          <div
            className="relative group w-[100%] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[200px] max-sm:rounded-none   
            mx-auto rounded-full overflow-hidden shadow-xl shadow-gray-500/30  bg-PrimSecColor p-[4px]  "
          >
            <img
              src={Nada}
              alt="cover"
              className="rounded-full max-md:w-[300px] max-sm:w-[200px] max-sm:rounded-none w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex gap-4 absolute bottom-16 left-5 max-md:hidden">
          <span className="w-[150px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
        </div>

        <div className="flex flex-col gap-4 absolute bottom-16 left-5">
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[100px] bg-PrimSecColor w-[10px] block"></span>
        </div>

        <div className="flex gap-4 absolute bottom-16 right-32 max-md:hidden">
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[10px] bg-PrimSecColor h-[10px] block"></span>
          <span className="w-[150px] bg-PrimSecColor h-[10px] block"></span>
        </div>

        <div className="flex flex-col gap-4 absolute top-10 left-5">
          <span className="h-[100px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
          <span className="h-[10px] bg-PrimSecColor w-[10px] block"></span>
        </div>
      </div>
    </>
  );
}

export default Cover;
