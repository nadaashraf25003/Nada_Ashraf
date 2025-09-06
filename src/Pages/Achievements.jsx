// Style
import "/src/index.css";

// React
import { useState } from "react";

// db
import { certifications } from "../../db";

function Achievements() {
  //  Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const certificationsPerPage = 3;

  //  Calculate current projects
  const indexOfLast = currentPage * certificationsPerPage;
  const indexOfFirst = indexOfLast - certificationsPerPage;
  const currentcertifications = certifications.slice(indexOfFirst, indexOfLast);

  //  Calculate total pages
  const totalPages = Math.ceil(certifications.length / certificationsPerPage);

  return (
    <>
      <div className="cover px-16 items-center max-md:flex-wrap max-md:text-center gap-4 py-[10%] max-sm:p-10">
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-5 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-5"
        >
          Achievements
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>

        {/* Render only sliced projects */}
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 my-10 justify-items-center ">
          {currentcertifications.map((certification) => (
            <div
              key={certification.id}
              className="certification_card relative 
            bg-PrimSecColor rounded-lg shadow-lg overflow-hidden cursor-pointer 
            hover:scale-[1.02] transition duration-300 ease-in-out text-white p-0  max-sm:w-[100%] max-md:w-[75%] bg-[#0A152F]"
            >
              <span className="span1"></span>
              <div className="card-image h-[250px] max-md:h-[300px]">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div className="card-detail ">
                  <h2 className="bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] bg-clip-text text-transparent font-extrabold text-l mb-2">
                    {certification.title}
                  </h2>
                  <h2 className="text-gray-200 font-extrabold text-sm mb-2">
                    {certification.issuer}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {certification.description}
                  </p>
                </div>
                <div className="card-meta">
                  <span className="bg-OrangeColor px-3 py-1 rounded-md text-white text-sm font-semibold">
                    <i className="far fa-calendar"></i> {certification.year}
                  </span>
                </div>
                <div className="card-tags flex flex-wrap gap-2 ">
                  {certification.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="card-tag bg-secondColor px-3 py-1 rounded-md text-white text-[12px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="card-actions flex justify-center items-center mt-3 max-md:flex-col max-md:items-center ">
                  <a href={certification.link} target="_blank" rel="noreferrer"  className="w-full">
                    <button
                      className="card-btn bg-OrangeColor p-3 rounded-md text-white text-sm font-semibold max-md:mb-5 
                    hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out w-full"
                    >
                      <i className="fas fa-external-link-alt"></i> View Certification
                    </button>
                  </a>
                  {/* <a href={certification.link} target="_blank" rel="noreferrer" className="max-md:w-full">
                    <button
                      className="card-btn bg-OrangeColor p-3  rounded-md text-white text-sm font-semibold
                    hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out max-md:w-full"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Pagination */}
        <div className="flex items-center justify-center border-t border-white/10 px-4 py-3 sm:px-6 ">
          {/* <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"> */}
          {/* <p className="text-sm text-gray-300">
              Showing <span className="font-medium">{indexOfFirst + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(indexOfLast, certifications.length)}
              </span>{" "}
              of <span className="font-medium">{certifications.length}</span> results
            </p> */}

          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md"
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-3 py-2 rounded-l-lg border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-40"
            >
              <span className="sr-only">Previous</span> ‹
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === i + 1
                    ? "z-10 bg-indigo-600 text-white font-semibold"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-3 py-2 rounded-r-lg border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-40"
            >
              <span className="sr-only">Next</span> ›
            </button>
          </nav>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Achievements;
