/* =========== Education ===========  */
export const education = [
  {
    id: 1,
    title: "B.Sc. in Communication & Electronics Engineering",
    institution: "Shubra Faculty of Engineering – Benha University",
    description:
      "Currently in 3rd year, studying courses such as Computer Organization, Communication Systems, Electronics, and Programming. Active in ICPC Competitive Programming team and student activities.",
    period: "2022 – 2027 (Expected)",
    icon: "fa-solid fa-graduation-cap",
    status: "Ongoing",
  },
  {
    id: 2,
    title: ".NET Full Stack Development Training",
    institution: "DEPI Program",
    description:
      "Learned C#, ASP.NET MVC, APIs, EF Core, LINQ, and full-stack project development. Built practical applications integrating frontend & backend.",
    period: "Ongoing: 2025",
    icon: "fa-solid fa-graduation-cap",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Front-End Development Training",
    institution: "ITI (Information Technology Institute)",
    description:
      "Covered advanced front-end concepts including React, Routing, State Management, Authentication, and API integration. Developed a final project: Freelancing Platform with authentication, protected routes, and state management.",
    period: "Completed: 2025",
    icon: "fa-solid fa-graduation-cap",
    status: "Completed",
  },
];

/* =========== Experiences ===========  */
export const experiences = [
  {
    role: "Front-End Instructor",
    organization: "Shubra Faculty of Engineering",
    duration: "Feb 2024 – Present",
    details: [
      "Taught HTML, CSS, and JavaScript to students in workshops.",
      "Helped students build responsive websites and projects.",
      "Provided mentorship and solved coding challenges.",
    ],
  },
  {
    role: "Trainer",
    organization: "Hawi Talent (5G & Cloud Computing, AI, Web Development)",
    duration: "2023 – 2024",
    details: [
      "Conducted training sessions on 5G, cloud computing, and AI fundamentals.",
      "Guided trainees through hands-on projects and practical exercises.",
    ],
  },
  {
    role: "Team Member",
    organization: "Shoubra Creator Team (RC Car Project)",
    duration: "2022 – 2023",
    details: [
      "Collaborated on building an RC car for a student activity.",
      "Worked on electronics and programming integration.",
    ],
  },
];

/* =========== Services ===========  */
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "🌐", // You can replace with an icon component
    description:
      "Build responsive, scalable, and secure full-stack web applications using .NET, React, and SQL with API integration.",
  },
  {
    id: 2,
    title: "Front-End Development",
    icon: "🎨",
    description:
      "Design and develop modern, interactive, and mobile-friendly user interfaces using React, Tailwind CSS, and JavaScript.",
  },
  {
    id: 3,
    title: "Training & Mentorship",
    icon: "📚",
    description:
      "Provide training in HTML, CSS, JavaScript, React, and .NET, guiding beginners and students through hands-on projects.",
  },
];

/* =========== Skills ===========  */
export const skills = [
  // Programming Languages
  { name: "Python", percentage: 75, icon: "fa-brands fa-python" },
  { name: "C++", percentage: 85, icon: "devicon-cplusplus-plain" },
  { name: "C#", percentage: 75, icon: "devicon-csharp-plain" },
  { name: "JavaScript", percentage: 90, icon: "fa-brands fa-js" },
  { name: "SQL", percentage: 70, icon: "fas fa-database" },

  // Frameworks & Libraries
  { name: "React", percentage: 85, icon: "fa-brands fa-react" },
  // { name: "ASP.NET MVC", percentage: 80, icon: "devicon-dotnetcore-plain" },
  // { name: "Entity Framework Core", percentage: 75, icon: "fas fa-database" },
  // { name: "LINQ", percentage: 70, icon: "fa-solid fa-code" },

  // Web Technologies
  { name: "HTML", percentage: 95, icon: "fa-brands fa-html5" },
  { name: "CSS", percentage: 90, icon: "fa-brands fa-css3-alt" },
  { name: "APIs", percentage: 80, icon: "fa-solid fa-plug" },
  { name: "PHP", percentage: 65, icon: "fa-brands fa-php" },
  // { name: "Angular (Basics)", percentage: 60, icon: "fa-brands fa-angular" },

  // Databases
  // { name: "MongoDB", percentage: 75, icon: "devicon-mongodb-plain" },
  // { name: "MySQL", percentage: 70, icon: "devicon-mysql-plain" },
  {
    name: "SQL Server",
    percentage: 70,
    icon: "devicon-microsoftsqlserver-plain",
  },

  // Tools
  { name: "Git & GitHub", percentage: 85, icon: "fa-brands fa-github" },
  // { name: "Linux", percentage: 65, icon: "fa-brands fa-linux" },
  { name: "Visual Studio", percentage: 80, icon: "devicon-visualstudio-plain" },
  { name: "VS Code", percentage: 90, icon: "devicon-vscode-plain" },
  // { name: "PyCharm", percentage: 75, icon: "devicon-pycharm-plain" },
  { name: "Figma", percentage: 80, icon: "fa-brands fa-figma" },
  // { name: "Adobe XD", percentage: 80, icon: "devicon-xd-plain" },

  // Concepts
  // { name: "Authentication & Authorization", percentage: 80, icon: "fa-solid fa-lock" },
  // { name: "State Management", percentage: 75, icon: "fa-solid fa-diagram-project" },
  {
    name: "Routing & Protected Routes",
    percentage: 75,
    icon: "fa-solid fa-route",
  },
  // { name: "Data Structures & Algorithms", percentage: 70, icon: "fa-solid fa-sitemap" },
  {
    name: "Object-Oriented Programming (OOP)",
    percentage: 85,
    icon: "fa-solid fa-cubes",
  },
  // { name: "Cloud Computing (5G & Cloud Basics)", percentage: 65, icon: "fa-solid fa-cloud" },
];

/* =========== Certifications ===========  */
export const certifications = [
  {
    id: 1,
    title: "JavaScript Certificate",
    issuer: "Mahara_Tech",
    year: "2024",
    link: "https://drive.google.com/file/d/1dW_0IB0zs43s18eem2gAo7Hnxecrs2Kh/view?usp=drivesdk",
    description:
      "Covered core JavaScript concepts including variables, functions, DOM manipulation, events, and ES6 features.",
    skills: ["JavaScript", "DOM Manipulation", "ES6+", "Problem Solving"],
    image: "/assets/JSMahartecCR.png", 
  },
  {
    id: 2,
    title: "Front-End Development Training",
    issuer: "ITI (Information Technology Institute)",
    year: 2025,
    link: "",
    description:
      "Intensive front-end training focused on modern frameworks and advanced web development practices.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Routing",
      "State Management",
      "Authentication",
      "API Integration",
    ],
    image: "/assets/NOT.png", 
  },
  {
    id: 3,
    title: "Systel",
    issuer: "Systel Telecom",
    year: 2024,
    link: "https://drive.google.com/file/d/1Kg8IBURz_8kwNmjWF-lj0Vf8Ix5mnjWO/view?usp=sharing", // optional: add certificate URL if you have one
    description:
      "Completed a 4-week summer training covering telecommunications, public safety communication, microwave & broadband, fiber optics, CCTV, and professional skills (communication, leadership, freelancing).",
    skills: [
      "Telecommunications",
      "Public Safety Communication",
      "Microwave Communication",
      "Fiber Optics",
      "CCTV",
      "Antennas",
      "Two-Way Radio",
    ],
    image: "/assets/SystelCR.png", 
  },
{
  id: 4,
  title: "5G Training",
  issuer: "Hawi Talent",
  year: 2024,
  link: "https://drive.google.com/file/d/1PJaqnkM4w401N4EXTIv5fKOwVhXyqSzC/view?usp=sharing",
  description:
    "Completed training focused on next-generation mobile networks, covering the fundamentals and applications of 5G technology.",
  skills: [
    "5G Networks",
    "Next-Generation Networks",
    "Wireless Communication",
    "Networking Basics",
  ],
  image: "/assets/5GCR.png", 
},
{
  id: 5,
  title: "Cloud Computing Training",
  issuer: "Hawi Talent",
  year: 2024,
  link: "https://drive.google.com/file/d/1Hg0JX4lGyMq32xtjVMKIycyQYz7Ypq-I/view?usp=sharing",
  description:
    "Completed training on cloud solutions, virtualization, and fundamental concepts in cloud computing.",
  skills: [
    "Cloud Computing",
    "Virtualization",
    "Networking Basics",
    "Cloud Solutions",
  ],
  image: "/assets/CloudCR.png", 
},

  {
    id: 6,
    title: "Data Analytics ",
    issuer: "Data Pill",
    year: "2025",
    link: "https://drive.google.com/file/d/1GLJIN3t6E9cUzChAEsPGMXbFyFehMoZo/view?usp=sharing",
    description:
      "Covered core JavaScript concepts including variables, functions, DOM manipulation, events, and ES6 features.",
    skills: ["SQL", "SSIS", "SSMS", "PowerBI"],
    image: "/assets/DataCR.png", 
  },
  {
    id: 7,
    title: "ITIDA Gigs Program",
    issuer: "EYouth",
    year: 2025,
    link: "https://drive.google.com/file/d/1ET85jSiAkw5DO_ZtNG1ogBySWeiu3VL3/view?usp=drive_link",
    description:
      "Intensive front-end training focused on modern frameworks and advanced web development practices.",
    skills: ["Freelancing"],
    image: "/assets/ITIDACR.png", 
  },
  {
    id: 8,
    title: "JavaScript ",
    issuer: "Udemy",
    year: 2025,
    link: "https://drive.google.com/file/d/1Ky5vF_D0yhOXoaOl2UHJO8lJpAi3PTtv/view?usp=drivesdk",
    description:
      "Hands-on training in backend and full-stack development using Microsoft technologies.",
    skills: ["JavaScript#"],
    image: "/assets/JSUdemyCR.png", 
  },
];

/* =========== Projects ===========  */
export const projects = [
  {
    id: 1,
    title: "SkilledBridge Platform",
    description:
      "A full-featured freelancing platform built with React. Includes authentication, protected routes, job posting & applications, and state management using Context API.",
    date: "August 2025",
    duration: "1 months",
    tags: ["React", "Context API", "Authentication", "REST API"],
    image: "/assets/SkilledPR.png", // replace with your project screenshot
    links: {
      demo: "https://skilled-bridge-platform.vercel.app/",
      github: "https://github.com/nadaashraf25003/SkilledBridge_Platform",
    },
  },
  {
    id: 2,
    title: "Smart University System",
    description:
      "A smart attendance & registration system that uses webcam photo capture and face recognition (face-api.js) with Google Sheets integration.",
    date: "June 2025",
    duration: "1.5 months",
    tags: ["JavaScript", "Face-API.js", "Google Sheets API"],
    image: "/assets/SchoolPR.png",
    links: {
      demo: "https://smart-school-system-alpha.vercel.app/",
      github: "https://github.com/nadaashraf25003/Smart-School-System",
    },
  },
  {
    id: 3,
    title: "GPA Calculator",
    description:
      "A responsive web app that allows students to calculate their GPA with course inputs and instant grade results.",
    date: "April 2025",
    duration: "2 weeks",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/assets/GPAPR.png",
    links: {
      demo: "https://gpa-calculator-five-sage.vercel.app/",
      github: "https://github.com/nadaashraf25003/GPA_Calculator",
    },
  },
  {
    id: 4,
    title: "Image Editor",
    description:
      "A browser-based image editing tool with filters (brightness, contrast, saturation), rotation, flip, upload, and download functionality.",
    date: "March 2025",
    duration: "3 weeks",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/assets/ImagPR.png",
    links: {
      demo: "https://image-editor-xi-swart.vercel.app/",
      github: "https://github.com/nadaashraf25003/Image_Editor",
    },
  },
  {
    id: 5,
    title: "Course Website",
    description:
      "A multi-page responsive course website including start, enroll, learning, review, and contact pages.",
    date: "February 2024",
    duration: "1 month",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/assets/CoursePR.png",
    links: {
      demo: "https://nadaashraf25003.github.io/Courses_website/",
      github: "https://github.com/nadaashraf25003/Courses_website",
    },
  },
 {
  id: 6,
  title: "Coffee Shop Website",
  description:
    "A responsive coffee shop website featuring product listings, order forms, and a modern UI/UX design for a smooth customer experience.",
  date: "December 2024",
  duration: "2 weeks",
  tags: ["HTML", "CSS", "JavaScript", "PHP", "PHPMailer"],
  image: "/assets/CoffPR.png",
  links: {
    demo: "https://drive.google.com/file/d/1fMdt5QPkKAZLwoTo_BhcGNek3zGS8Ktr/view?usp=sharing",
    github: "https://github.com/nadaashraf25003/Coffee-_Shop",
  },
},

{
  id: 7,
  title: "Recipes API",
  description:
    "A RESTful API providing recipe data, supporting CRUD operations, search, and filtering for food applications or websites.",
  date: "July 2025",
  duration: "2 weeks",
  tags: ["JavaScript", "React", "API"],
  image: "/assets/RecipPR.png",
  links: {
    demo: "https://recipe-api-react-fawn.vercel.app/",
    github: "https://github.com/nadaashraf25003/Recipe_API_React",
  },
},

{
  id: 8,
  title: "Library Management System",
  description:
    "A web-based library system allowing book management, borrowing/return tracking, and member registration with admin and user roles.",
  date: "July 2025",
  duration: "3 weeks",
  tags: ["HTML", "CSS", "JavaScript"],
  image: "/assets/LibraryPR.png",
  links: {
    demo: "https://nadaashraf25003.github.io/Library/",
    github: "https://github.com/nadaashraf25003/Library",
  },
},

{
  id: 9,
  title: "MSP Club Website",
  description:
    "A website for a student club including events, activities, and membership features with a responsive and interactive design.",
  date: "September 2024",
  duration: "2 weeks",
  tags: ["HTML", "CSS", "JavaScript"],
  image: "/assets/MSPPR.png",
  links: {
    demo: "https://msp2024-2025.vercel.app/",
    github: "https://github.com/nadaashraf25003/MSP_2024-2025",
  },
},

{
  id: 10,
  title: "Data Analysis Final Project",
  description:
    "A comprehensive data analytics project including data cleaning, exploration, visualization, and actionable insights for business decision-making.",
  date: "August 2025",
  duration: "1 month",
  tags: ["SQL", "SSIS", "SSMS", "Power BI"],
  image: "/assets/DataPR.png",
  links: {
    demo: "https://mavenshowcase.com/project/42889",
    github: "https://github.com/nadaashraf25003/Data-Analytics_Final_Project",
  },
},

{
  id: 11,
  title: "Nove Website with Tailwind",
  description:
    "A modern, responsive website built using Tailwind CSS, featuring a clean design, reusable components, and optimized layout for multiple devices.",
  date: "August 2025",
  duration: "2 weeks",
  tags: ["HTML", "Tailwind CSS", "JavaScript"],
  image: "/assets/NovaPR.png",
  links: {
    demo: "https://depi-3.vercel.app/",
    github: "https://github.com/nadaashraf25003/DEPI_3",
  },
},
];
