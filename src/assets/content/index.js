import mainimg from '../images/abtme.jpg';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "IS Intern",
    company: "Hindustan Petroleum Pvt Ltd",
    description: `Dwelt upon full stack web development using Java Springboot.Worked closely with a team of fellow interns and my project mentor to define project requirements and timelines.`,
    technologies: ["Java Springboot","HTML","CSS","JS","HeidiSql", "MariaDB"],
  },
  {
    year: "2023 - 2024",
    role: "Webmaster",
    company: "Students Council",
    description: `Built websites, handled scores and event masters  for all major events of the academic year.`,
    technologies: ["HTML","Tailwind CSS","JavaScript", "Excel"],
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
    image: mainimg,
    description:"A transparent and automated solution for slum dwellers to voice their grievances to the government and the department concerned.It also allows management of smart contracts for property rights",
    technologies: ["React", "React-Native", "MongoDb", "Express", "Nodejs"],
  },
  {
    title: "IOT Baggage Tracker",
    image: mainimg,
    description:"A PHYSICAL LOCATION TRACKING DEVICE, TO BE ATTACHED TO BAGS WHICH PROVIDES REAL TIME LOCATION TO A WEB APP ON A MAP AND ACCESS TO SHIPPING SERVICES THAT CAN BRING THE BAG BACK TO THE CUSTOMER",
    technologies: [ "React", "Node.js", "Arduino","Python"],
  },
  {
    title: "Meter Reading App",
    image: mainimg,
    description:"AN APP THAT AUTOMATES THE WORK FOR METER READERS TRAVELLING HOUSE TO HOUSE AND MANUALLY READING AND ENTERING THE METER READINGS. A FLUTTER APP FOR HPCL METER READERS. IT SIMPLIFIES THE MANUAL TASK OF INPUTTING READINGS FOR HPCL CUSTOMERS BY ALLOWING USERS TO CAPTURE AN IMAGE OF THE READING. THE APP THEN ACCURATELY EXTRACTS AND UPDATES THE DATA IN THE DATABASE ALONG WITH STORING THE IMAGE",
    technologies: ["Flutter", "Dart", "SQLite", "GoogleOCR"],
  },
  {
    title: "Java ATM Machine GUI ",
    image: mainimg,
    description:"A MODERN GUI THAT SIMULATES THE WORKING OF AN ATM MACHINE.IT STORES THE LOGIN CREDENTIALS,THE BALANCE AND DATA OF A USER AND ENABLES SMOOTH TRANSACTIONS AND AN OPTION TO WITHDRAW OR DEPOSIT MONEY FROM THE USERS ACCOUNT",
    technologies: ["Core Java", "PhpAdmin"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
