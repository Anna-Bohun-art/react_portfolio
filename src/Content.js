// import images
import Hero_person from "./assets/images/Hero/person.jpg";

import vue from "./assets/images/Skills/vue.png";
import spring_boot from "./assets/images/Skills/spring_boot.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import java from "./assets/images/Skills/java.png";

import services_front_end from "./assets/images/Services/front_end.png";
import services_back_end from "./assets/images/Services/back_end.png";
import data from "./assets/images/Services/data.png";

import project1 from "./assets/images/Projects/img-1.png";
import project2 from "./assets/images/Projects/img-2.jpg";
import project3 from "./assets/images/Projects/img-3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import cv from "./assets/images/Hero/cv.png";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "ANNA",
    LastName: "Kladova Bohun",
    btnText: "Find out my CV",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my beggining career ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Javascript",
        para: "JavaScript is a versatile script programming language essential for creating dynamic and interactive content on websites.",
        logo: javascript,
      }, 
      {
        name: "Node js",
        para: "Node.js is a powerful runtime environment for executing JavaScript code outside of a web browser. It brings the JavaScript language to the server-side, enabling developers to build scalable, high-performance, and event-driven applications.",
        logo: nodejs,
      },
      {
        name: "Java",
        para: "Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on.",
        logo: java,
      },
      {
        name: "Vue.js",
        para: "Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
        logo: vue,
      },
      
      {
        name: "React js",
        para: "React is an open source, JavaScript library for developing user interface (UI) in web application.",
        logo: reactjs,
      },
      {
        name: "Spring boot",
        para: "Spring Boot is an open source Java-based framework used to create a micro Service.",
        logo: spring_boot,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Front End Development",
        para: "Attractive, responsive website with great front-end solutions",
        logo: services_front_end,
      },
      {
        title: "Back End Development",
        para: "I have done a variety of server-side applications build on Node.js as well as on Java(Spring Boot framework) ",
        logo: services_back_end,
      },
      {
        title: "Data",
        para: "I have experience with CMS, sequel and non-sequel DB",
        logo: data,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Pokefight game",
        image: project1,
        description: "Pokefight offers a unique and engaging experience for Pokémon fans and gamers alike. Dive into the world of Pokémon, train your creatures, and become the ultimate Pokémon master. Will you rise to the top of the leaderboard and prove you have what it takes to be a true Pokémon champion? Try it out!",
        stack_frontend: "HTML, CSS, JavaScript and a modern front-end framework React.",
        stack_backend: "Node.js with a framework Express.js for handling server-side logic and APIs with the  MongoDB database."
      },
      {
        title: "CookBook",
        image: project2,
        description: "CookBook is a user-friendly web application designed to cater to culinary enthusiasts, home cooks, and professional chefs alike. Its primary goal is to provide a comprehensive repository of recipes, neatly organized into various food categories, making it easier for users to find and explore new dishes. Among the prominent categories are Bread, Salad, Pasta, and Pizza, each offering a diverse range of recipes to suit different tastes and occasions.",
        stack_frontend:"HTML, CSS, JavaScript, and it's modern framework - React.",
        stack_backend: "Node.js with a framework like Express.js for handling server-side logic and APIs and with the sequel PostgreSQL database.",
      },
      {
        title: "HackerNews",
        image: project3,
        description: "The HackerNews Random News Generator is a Front End application that harnesses the power of the HackerNews API to provide users with a curated selection of random news articles from the popular tech and startup-focused platform, Hacker News. This application caters to individuals seeking a quick and serendipitous dose of the latest and most interesting tech-related news.",
        stack_frontend:"HTML, CSS, JavaScriptwith  it's framework React.",
      },
    ],
  },
  
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "annabohun83@gmail.com",
        icon: GrMail,
        
      },
      {
        text: "+4917643408413",
        icon: MdCall,
        
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
