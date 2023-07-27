import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  tripguide,
  azure,
  csharp,
  java,
  dynamic,
  rickandmortypng,
  consware,
  bancoserfinanza,
  serfinansa,
  accenture,
  nserio,
  simpsonapi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".NET Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Agent Help Desk - Helpdesk",
    company_name: "Serfinansa S.A",
    icon: serfinansa,
    iconBg: "#E6DEDD",
    date: "Jan. 2016 - Nov. 2019",
    points: [
      "In charge of providing first level support of some services and applications of the company, with knowledge in Networks, Hardware and Software. Attention to internal users (Employees) of the applications and services. Also with the ability to be autonomous and seek timely solutions for activities and massive incidents related to the systematic part of the company.",            
    ],
  },
  {
    title: "Application Support Analyst",
    company_name: "Banco Serfinanza",
    icon: bancoserfinanza,
    iconBg: "#E6DEDD",
    date: "Nov. 2019 - Feb. 2021",
    points: [
      "In charge and responsible for managing some company applications and Core banking, in addition to solving problems related to services, applications and servers. With the power to develop (Java, JSF, SQL Server, Bootstrap, PrimeFaces, Hibernate, DB2 IBM, Web Services) to settle incidents and to improve their functionality. Also with knowledge in database to generate information and also maintain the integration of systems (Database - Backend - Frontend).",
    ],
  },
  {
    title: "Information systems analyst",
    company_name: "Banco Serfinanza",
    icon: bancoserfinanza,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Mar 2021",
    points: [
      "Assigned to perform Java Development tasks - JavaServerFaces - Bootstrap - PrimeFaces - Hibernate - SQL Server - DB2 - With the ability to resolve incidents in applications in the aforementioned languages, in turn analyze, implement and fix errors.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "Consware",
    icon: consware,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Sept 2021",
    points: [
      "Software Engineer Responsible for Developing in VB (Visual Basic), .NET, C#, SQL Server.",
      "Implementing solutions and requirements for companies in Mexico, Peru and Colombia.",
    ],
  },
  {
    title: "Software Application Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Feb 2023",
    points: [
      "Skills: Visual Basic .NET (NET) SQL Server Management Studio JavaScript ASP.NET Java .NET Framework Oracle SQL Developer ASP.NET MVC SQL Server Integration Services (SSIS) SQL JavaServer Faces (JSF) Microsoft SQL Server",
    ],
  },
  {
    title: "Standard Software Engineer",
    company_name: "Nserio Corp",
    icon: nserio,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Software Engineer with expertise in VueJs, JavaScript, C#, and .NET development. Specialized in designing and implementing efficient and scalable solutions. Proficient in utilizing Azure platforms, including Azure DevOps, for creating agile development environments and implementing DevOps practices. Passionate about problem-solving and teamwork, constantly seeking to learn and apply new technologies to enhance the quality and performance of software products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dynamic Dev Site",
    description:
      "DynamicDev is a complete and versatile platform that offers efficient and personalized digital solutions. It also invites visitors to explore and create, while highlighting the success-oriented and dynamic approach.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: dynamic,
    source_code_link: "https://github.com/Guillermoheat26/DynamicForm",
    netlify_link: "https://dynamicdev.netlify.app",
  },
  {
    name: "Rick And Morty Site",
    description:
      "It is a page that consumes a rick and morty API and through that we can see the characters of the famous television series.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: rickandmortypng,
    source_code_link: "https://github.com/Guillermoheat26/RickAndMortyApiExample",
    netlify_link: "https://rickandmortyexampleapi.netlify.app/",
  },
  {
    name: "Simpson Api Example",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: simpsonapi,
    source_code_link: "https://github.com/Guillermoheat26/SimpsonApiExample",
    netlify_link: "https://simpsonapiexample.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
