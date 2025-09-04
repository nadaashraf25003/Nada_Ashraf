// Style
import "/src/index.css";

// db
import { education } from "../../db";

function Education() {
  return (
    <>
      <div className="cover px-16  items-center  max-md:text-center gap-4 py-[10%] ">
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-10 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-5"
        >
          Education
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>
        <div className="relative flex flex-col items-start w-[80%] mx-auto max-md:mx-0 max-md:w-full">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-btnColor max-md:hidden"></div>

          {education.map((item) => (
            <div key={item.id} className="relative flex items-start mb-10">
              {/* Circle icon */}
              <div
                className="absolute -left-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff]
               text-white shadow-md max-md:hidden"
              >
                <i className={`${item.icon} text-sm`}></i>
              </div>

              {/* Card */}
              <div
                className="ml-10 w-full bg-[#0A152F] p-5 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300 
              border-0 border-l-4 border-OrangeColor max-md:m-0"
              >
                <h2 className="bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] bg-clip-text text-transparent font-extrabold text-xl mb-2">
                  {item.title}
                </h2>
                <h3 className="bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] bg-clip-text text-transparent font-semibold text-lg mb-4">
                  {item.institution}
                </h3>
                <p className="text-white text-justify leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-4 inline-block bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] text-white text-sm px-4 py-1 rounded-md shadow-md">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
