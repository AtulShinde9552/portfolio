import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
const Info = {
    name: "Atul Shinde",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Dropofe question-and-answer platform",
        desc: "Dropofe is a modern question-and-answer platform, designed to facilitate knowledge sharing and community interaction, similar to Stack Overflow. Built with cutting-edge technologies like Next.js 14, Clerk for seamless user authentication, and MongoDB for robust data storage, Dropofe ensures high performance and scalability.",
        image: "Dropofe.png",
        live: true,
        technologies: ["Next JS-14", "Zod", "clerk", "MongoDB", "Tailwind", "Radix UI"],
        link: "https://dropofe-next-app.vercel.app/",
        github: "https://github.com/AtulShinde9552/dropofe-next-app"
    },
    {
        title: "Blog Website with Admin Dashboard",
        desc: "Developed a Full Stack MERN Blog Project, a robustand responsive web application featuringcuttingedge technologies. Frontend: Set up with React.js and Tailwind CSS, with dynamic page navigation via React Router Dom.Authentication: Secured with JSON Web Tokens and Google OAuth. Security: Ensured for both client and backend, with an emphasis on protecting sensitive pages like the admin dashboard. Admin Control: Intuitive CRUD operations for posts, comments, and users, managed through a MongoDB database.",
        image: "Blog Website with Admin Dashboard.png",
        live: true,
        technologies: ["React", "Node JS", "MongoDB", "Tailwind", "Redux", "Firebase"],
        link: "https://mern-blog-teur.onrender.com/",
        github: "https://github.com/AtulShinde9552/mern-blog"
    },
    
    {
        title: "Food Ordering Application",
        desc: "Developed a dynamic and responsive food delivery app using React.js, with efficient global state management via Redux Toolkit. Built a robust backend with Node.js, Express, and MongoDB, ensuring seamless data handling and reliability. Integrated Stripe for secure payment processing, delivering a smooth and user-friendly experience across devices.",
        image: "Food Ordering Application.png",
        live: true,
        technologies: ["React", "Express", "Stripe", "MongoDB"],
        link: "https://react-redux-toolkit-e-commerce-food-card-frontend.vercel.app/",
        github: "https://github.com/AtulShinde9552/React-Redux-Toolkit-E-commerce-Food-Card-frontend"
    },
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Next JS",  "React Native", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Figma"]
    }
]
const socialLinks = [
    { link: "https://github.com/AtulShinde9552", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/atul-shinde-5a9549204/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/atulshinde_07/", icon: IconBrandInstagram }, 
    { link: "https://wa.link/bp1mtz", icon: IconBrandWhatsapp },
    { link: "", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Full Stack Developer",
        company: "Kamliyasoft",
        date: "may 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Next Js", "React JS", "Node JS", "MongoDB", "MySQL", "Laravel"]
    },
    {
        role: "Full Stack Developer",
        company: "Alltake Solutions",
        date: "April 2023 - April 2024",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["React JS", "Next JS", "PHP", "MySQL", "Node", "JIRA", "Automation Testing"]
    },
    {
        role: "Software Developer",
        company: "Mobicloud Technologies Private Limited",
        date: "Oct 2022 - April 2023",
        desc: " I led software development with Node, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["React", "Angular", "Node JS", "Bootstrap", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "react native",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };