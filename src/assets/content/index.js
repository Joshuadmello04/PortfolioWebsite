import ecovision from '../images/ecovision.png'
import solofounder from '../images/solofounder.png'
import app from '../images/app.webp'
import iot from '../images/iot.jpg'
import iit from '../images/iit.jpg'
import shahar from '../images/ShaharSaath.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Tridenzic",
    description: `Built a full stack website for a salonist based in Bangalore.Check my work : https://trystsalonandacademy.com....Many more projects to be revealed soon...`,
    technologies: ["ReactJS","NodeJS", "ExpressJS","MongoDB","TailwindCSS"],
  },
  {
    year: "2024",
    role: "IS Intern",
    company: "Hindustan Petroleum Pvt Ltd",
    description: `Dwelt upon full stack web development using Java Springboot.Worked closely with a team of fellow interns and my project mentor to define project requirements and timelines.`,
    technologies: ["Java Springboot","HeidiSql", "MariaDB"],
  },
  {
    year: "2023 - 2024",
    role: "Webmaster",
    company: "Students Council",
    description: `Built websites, handled scores and event masters  for all major events of the academic year.`,
    technologies: ["HTML","Tailwind","JavaScript", "Excel"],
  },
  {
    year: "2023",
    role: "IS Intern",
    company: "Hindustan Petroleum Pvt Ltd",
    description: `Dwelt upon App development using Flutter and Python Development to work with LLMS like autogpt-q and Meta-Llama 2.Built a meter reading app and terminal based chatbots.Worked closely with a project mentor to define project requirements and timelines.`,
    technologies: ["Flutter","Dart","Python","Sqlite"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Fresher",
    description: `Designed and developed user interfaces for web applications using HTML CSS Bootstrap and JS.`,
    technologies: ["HTML", "CSS", "JS", "BOOTSTRAP"],
  },
];

export const PROJECTS = [
  {
    title:"Logistics Route Optimizer",
    image:iit,
    description:"An AI Agent that optimizes the routes across various modes of transport using A Star Search Algorithm, whilst dynamically updating routes based on news across the world to show top routes based off cost,time and countries to avoid",
    technologies:["NextJs","Prisma","Postgresql","Python","Google Maps API","Agno"]
  },
  {
    title: "EcoVision - AI for Sustainable Urban Development",
    image: ecovision,
    description: "An AI-powered sustainability assessment tool that analyzes urban areas using satellite imagery and pre trained models to identify environmental concerns such as air pollution, deforestation, and waste management inefficiencies.",
    technologies: ["Google Earth Engine", "FastAPI", "Streamlit", "ReactJS"],
  },
  {
    title: "SoloFounder AI - Startup Ideation and Validation Platform",
    image: solofounder,
    description: "An AI-driven platform that helps solo entrepreneurs generate, validate, and refine startup ideas by leveraging large-scale market research, trend analysis, and financial forecasting.",
    technologies: ["Next.js", "Google-Trends API", "LinkedIn API", "Typescript"],
  },
  {
    title: "Slum Community-Centric App and Government Portal",
    image: shahar,
    description: "A transparent and automated solution for slum dwellers to voice their grievances to the government and the department concerned. It also offers educational and industry-standard courses for slum upgradation.",
    technologies: ["React-Native", "MongoDb", "Node.js", "React"],
  },
  {
    title: "IOT Baggage Tracker",
    image: iot,
    description: "A physical location tracking device, to be attached to bags, which provides real-time location to a web app on a map and access to shipping services that can bring the bag back to the customer.",
    technologies: ["React", "Node.js", "Arduino", "Python"],
  },
  {
    title: "Meter Reading App",
    image: app,
    description:"An app that automates the work for meter readers traveling house to house and manually reading and entering the meter readings. A Flutter app for HPCL meter readers. It simplifies the manual task of inputting readings for HPCL customers by allowing users to capture an image of the reading. The app then accurately extracts and updates the data in the database along with storing the image.",
    technologies: ["Flutter", "Dart", "SQLite", "GoogleOCR"],
  },
  
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
