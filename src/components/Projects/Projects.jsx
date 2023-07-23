import React from "react";
import "./Projects.css";
import imge from "./imge.png";

import ProjectCard from "./ProjectCard";
export default function Projects() {
  const projectdetails = [
    {
      link: "https://i.postimg.cc/6q4zL23G/Screenshot-278.png",
      heading: "CSE Official Website",
      description:
        "Our project creates a modern CSE Department website using React and Node.js. It offers dynamic content management, user authentication, and personalized profiles. Explore courses, faculty directory, and research details. Stay updated with events and announcements through the interactive calendar. Access student resources and contact support easily. The technology stack includes React.js, Node.js. Strengthening the department's online presence, this platform fosters communication and engagement within the CSE community.",
      githublink: "https://github.com/anumayagrawal12/CSE-Version-3.0",
      demolink:
        "https://649beb927b74554b0b3faa0d--melodic-torrone-8385f5.netlify.app/",
    },
    {
      link: "https://i.postimg.cc/vDRhPYg2/Screenshot-269.png",
      heading: "My Portfolio",
      description:
        " Our React-based Portfolio Project creates a visually appealing platform for displaying your skills, projects, and experiences. Featuring interactive design, smooth animations, and a responsive layout, it offers an engaging user experience. Seamlessly integrate your resume and provide a contact form for easy communication. With React's flexibility, updating and customizing your portfolio becomes effortless. This project empowers you to leave a lasting impression on potential employers and collaborators, advancing your career prospects. Harness the power of React, HTML5, and CSS3 to build a captivating online showcase of your talents and aspirations. Stand out in the digital landscape with this dynamic portfolio platform.",
      githublink: "https://github.com/anumayagrawal12/Porfolio",
      demolink: "https://Anumay-Agrawal.netlify.app/",
    },
    {
      link: "https://i.postimg.cc/MZfhYXgD/Screenshot-271.png",
      heading: "Typing Speed Game",
      description:
        "Experience the thrill of our Typing Speed Game built with JavaScript! Race against time to type random words/sentences accurately. Track your speed, accuracy, and beat your own records. Adjust difficulty levels for all players. An interactive interface ensures a fun user experience. Improve typing proficiency while having a great time. Perfect for students and professionals alike.",
      githublink: "https://github.com/anumayagrawal12/Typing_speed",
      demolink: "https://anumayagrawal12.github.io/Typing_speed/",
    },
    {
      link: "https://i.postimg.cc/hvrmWKft/Screenshot-280.png",
      heading: "To Do List",
      description:
        "Our JavaScript-based To-Do List Project offers a user-friendly web application to manage tasks effectively. Add, edit, and remove tasks with ease, supported by local storage for continuous access. Mark completed tasks for progress tracking and a sense of achievement. The responsive design ensures smooth usage on all devices. Simplify your daily routine and enhance productivity with this efficient to-do list.",
      githublink: "https://github.com/anumayagrawal12/TO_DO_List",
      demolink: "https://anumayagrawal12.github.io/TO_DO_List/",
    },
    {
      link: "https://i.postimg.cc/JnkPjHtH/Screenshot-273.png",
      heading: "Music Player",
      description:
        "Our Music Player Project is a dynamic web application crafted with JavaScript, offering an enjoyable music listening experience. Easily play, pause, skip tracks, adjust volume, and create playlists with its intuitive controls. The player supports various audio formats and displays album artwork and track details for a visually appealing interface. Responsive design ensures seamless usage on all devices. Embrace the joy of music with this feature-rich player, showcasing the power of JavaScript in delivering an immersive and user-friendly music journey.",
      githublink: "",
      demolink: "",
    },
  ];
  return (
    <div className="project">
      <div className="projectpage">
        <div className="prhead">
          <h2>
            My <span className="g"> Projects </span> Works.
          </h2>
        </div>
        <div className="projectca">
          {projectdetails.map((p) => (
            <ProjectCard
              link={p.link}
              heading={p.heading}
              description={p.description}
              githublink={p.githublink}
              demolink={p.demolink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
