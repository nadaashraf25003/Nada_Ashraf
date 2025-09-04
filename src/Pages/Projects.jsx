// Style
import "/src/index.css";

// Assets
import { projects } from "../../db";
// import Nada from "/public/assets/Nada.png";

// React
import { useState } from "react";

function Projects() {
  //  Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  //  Calculate current projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  // ✅ Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      <div className="cover px-16 items-center max-md:flex-wrap max-md:text-center gap-4 py-[10%] max-sm:p-3">
        <p
          className="text-5xl font-bold max-md:text-4xl text-OrangeColor mb-5 flex items-end gap-3
        animate__animated animate__fadeInDown max-md:px-5"
        >
          Projects
          <span className="block h-[5px] max-md:hidden w-[70%] bg-PrimSecColor "></span>
        </p>

        {/*  Render only sliced projects */}
        <div className="projects-container grid grid-cols-2 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 p-4">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="project_card bg-mainColor rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-sm:w-[100%] "
            >
              {/* Card Image */}
              <div className="card-image relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-2xl bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              {/* Card Details */}
              <div className="card-detail p-5">
                <h2 className="bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] bg-clip-text text-transparent font-extrabold text-xl mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm text-justify">
                  {project.description}
                </p>
              </div>

              {/* Card Meta */}
              <div className="card-meta flex justify-between gap-4 px-5 text-gray-400 text-sm mb-3">
                <span className="flex items-center gap-1">
                  <i className="far fa-calendar"></i> {project.date}
                </span>
                <span className="flex items-center gap-1">
                  <i className="far fa-clock"></i> {project.duration}
                </span>
              </div>

              {/* Card Tags */}
              <div className="card-tags flex flex-wrap gap-2 px-5 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#ff6547] via-[#ffb144] to-[#ff7053] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Actions */}
              <div className="card-actions flex flex-col gap-3 px-5 pb-5 items-center">
                {/* <a href={project.links.demo} target="_blank" rel="noreferrer" className="w-full">
                  <button className="card-btn flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2 px-4 
                  rounded-lg transition duration-300 shadow hover:scale-105">
                    <i className="fas fa-external-link-alt"></i> View Project
                  </button>
                </a> */}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <button
                    className="card-btn flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2 px-4 
                  rounded-lg transition duration-300 shadow hover:scale-105 w-full"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/*  Pagination */}
        <div className="flex items-center justify-center border-t border-white/10 px-4 py-4 sm:px-6 ">
          {/* <div className="flex items-center justify-center"> */}
          {/* Info text */}
          {/* <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {indexOfFirst + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-white">
                {Math.min(indexOfLast, projects.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white">
                {projects.length}
              </span>{" "}
              results
            </p> */}

          {/* Pagination */}
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-lg shadow-sm"
          >
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-3 py-2 rounded-l-lg border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-40"
            >
              ‹
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium transition-all ${
                  currentPage === i + 1
                    ? "z-10 bg-indigo-600 text-white font-semibold"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-3 py-2 rounded-r-lg border border-gray-700 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-40"
            >
              ›
            </button>
          </nav>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
