// Style
import "/src/index.css";

// db
import { skills } from "../../db";

function Skills() {
  return (
    <>
      <div
        className="cover px-16  items-center  max-md:text-center gap-4
      py-[10%] max-md:px-5  max-sm:px-0 "
      >
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-10 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-[40%]"
        >
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
          Skills
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mx-10">
          {skills.map((item) => (
            <div
              key={item.name}
              className="bg-secondColor p-5 rounded-xl shadow-md flex flex-col items-center gap-3 
                border-t-4 border-btnColor hover:scale-105 hover:shadow-xl 
                transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="icon w-14 h-14 flex items-center justify-center 
                  rounded-full bg-gradient text-white text-2xl shadow"
              >
                <i className={item.icon}></i>
              </div>

              {/* Percentage */}
              <div className="percentage font-extrabold text-2xl text-white">
                {item.percentage}
                <span className="text-lg">%</span>
              </div>

              {/* Skill Name */}
              <div className="name text-sm font-bold text-gray-900 tracking-wide">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
