// Style
import "/src/index.css";

// Components
import Form from "./Form";

function Contact() {
  return (
    <>
      <div
        className="cover  px-16 items-center  max-md:flex-wrap max-md:text-center gap-4
      py-[10%]"
      >
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-16 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-5 "
        >
          Contact
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>
        <div className="flex gap-4 max-md:flex-col max-md:items-center max-md:px-5 ">
          <div className="right text-white space-y-4 max-md:mb-10 ">
            <h3 className="text-3xl font-semibold text-PrimSecColor">
              Get in Touch
            </h3>
            <p className="text-l text-textColor ">
              I’d love to hear from you! Whether you have a project idea, a
              question, or just want to connect — feel free to reach out.
            </p>

            <div className="space-y-2 py-5">
              <p className="bg-white p-2 rounded-md flex items-center gap-2 shadow text-black">
                📧 <span className="font-medium ml-5">Email:</span>
                nadanadaashraf25@gmail.com
              </p>
              <p className="bg-white p-2 rounded-md flex items-center gap-2 shadow text-black">
                📞 <span className="font-medium ml-5"> Phone:</span> +20
                1143942227
              </p>
              <p className="bg-white p-2 rounded-md flex items-center gap-2 shadow text-black">
                📍 <span className="font-medium ml-7">Location:</span> Cairo,
                Egypt
              </p>
            </div>

            <div className="links ">
              <a
                href="https://www.linkedin.com/in/nada-ashraf-386223287/"
                className="text-OrangeColor text-[2rem] hover:bg-white p-2 hover:rounded transition-all duration-200 mr-1"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/nadaashraf25003"
                className="text-OrangeColor text-[2rem] hover:bg-white p-2 hover:rounded transition-all duration-200 mr-1"
              >
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://www.facebook.com/nadaasraf.asraf.3"
                className="text-OrangeColor text-[2rem] hover:bg-white p-2 hover:rounded transition-all duration-200 mr-1"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/nada_ashraf252003/?__pwa=1"
                className="text-OrangeColor text-[2rem] hover:bg-white p-2 hover:rounded transition-all duration-200 mr-1"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a
                href="https://wa.me/201143942227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-OrangeColor text-[2rem] hover:bg-white p-2 hover:rounded transition-all duration-200 mr-1"
              >
                <i class="fa-brands fa-square-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="left">
            <Form />
            {/* <Form2 /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
