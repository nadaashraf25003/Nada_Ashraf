// Style
import "/src/index.css";

// React
import { useNavigate } from "react-router";

// db
import { services } from "../../db";

function Services() {
  const navigate = useNavigate();
  const details = () => {
    navigate("/Services/5"); // 5 => Services ID
  };
  return (
    <>
      <div
        className="cover  px-16 items-center  max-md:flex-wrap max-md:text-center gap-4
      py-[10%]"
      >
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-10 flex items-end gap-3
        animate__animated animate__fadeInDown "
        >
          Services
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>

        <div className="container grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-[#0A152F] p-5 rounded-lg text-center
            border-0 border-t-4 border-OrangeColor shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <div className="tools flex items-center gap-3 mb-5">
                <div className="circle ">
                  <span className="bg-[#ff605c] inline-block w-[15px] h-[15px] rounded-full" />
                </div>
                <div className="circle  ">
                  <span className="bg-[#ffbd44] inline-block w-[15px] h-[15px] rounded-full" />
                </div>
                <div className="circle  ">
                  <span className="bg-[#00ca4e] inline-block w-[15px] h-[15px] rounded-full" />
                </div>
              </div>
              <div className="text-4xl mb-4">{service.icon}</div>

              <h2 className="bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] bg-clip-text text-transparent font-extrabold text-l  mb-2">
                {service.title}
              </h2>
              <p className="text-white text-justify leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center ">
          <a
            href="https://wa.me/201143942227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              <div class="text">
                Let's work Together
                <i className="fa-brands fa-whatsapp ml-5"></i>
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;
