import java from '../images/java.jpg'
import app from '../images/app.webp'
import iot from '../images/iot.jpg'
import shahar from '../images/ShaharSaath.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
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
    title: "Slum Community-Centric App and Government Portal",
    image: shahar,
    description:"A transparent and automated solution for slum dwellers to voice their grievances to the government and the department concerned and offers educational and industry standard courses for slum upgradation.",
    technologies: ["React-Native", "MongoDb", "Nodejs","React"],
  },
  {
    title: "IOT Baggage Tracker",
    image: iot,
    description:"A physical location tracking device, to be attached to bags, which provides real-time location to a web app on a map and access to shipping services that can bring the bag back to the customer.",
    technologies: [ "React", "Node.js", "Arduino","Python"],
  },
  {
    title: "Meter Reading App",
    image: app,
    description:"An app that automates the work for meter readers traveling house to house and manually reading and entering the meter readings. A Flutter app for HPCL meter readers. It simplifies the manual task of inputting readings for HPCL customers by allowing users to capture an image of the reading. The app then accurately extracts and updates the data in the database along with storing the image.",
    technologies: ["Flutter", "Dart", "SQLite", "GoogleOCR"],
  },
  {
    title: "Java ATM Machine GUI ",
    image: java,
    description:"A modern GUI that simulates the working of an ATM machine. It stores the login credentials, the balance and data of a user, and enables smooth transactions and an option to withdraw or deposit money from the user's account.",
    technologies: ["Core Java", "PhpAdmin"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
