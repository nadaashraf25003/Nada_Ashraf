// Style
import "/src/index.css";

// db 
import { experiences } from "../../db";

function Experience() {
  return (
    <>
      {" "}
      <div
        className="cover relative px-16 items-center  max-md:flex-wrap max-md:text-center gap-4
      py-[10%]"
      >
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-5 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-5"
        >
          Experience
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 mt-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col justify-between rounded-lg bg-[#0A152F] p-6 shadow-lg border-l-4 border-OrangeColor hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Title */}
              <h1 className="text-xl font-bold text-white mb-2">{exp.role}</h1>
              <h2 className="text-sm text-OrangeColor mb-4 font-bold">
                {exp.organization}
              </h2>

              {/* Details */}
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-5">
                {exp.details.map((item, i) => (
                  <li key={i} className="mb-5">
                    <i className="fa-solid fa-star text-OrangeColor mr-2"></i>{" "}
                    {item}
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div className="mt-auto">
                <span className="inline-block bg-[#1b294a] text-slate-300 text-sm px-4 py-2 rounded-md border border-slate-600">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
