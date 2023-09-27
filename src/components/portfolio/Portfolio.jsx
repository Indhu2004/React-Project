import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Webpage creation using html",
      img: IMG1,
      description:
        "HTML is the standard markup language for creating websites and CSS is the language that describes the style of an HTML document.",
      technologies: "Html",
      link: "https://github.com/Indhu2004/Capstone-Project-1.git",
      github: "https://github.com/Indhu2004",
    },
    {
      id: 2,
      title: "My portifolio",
      img: IMG4,
      description:
        "It is a place where you can show your work experience and showcase the projects that you are most proud of.",
      technologies: "Html | CSS ",
      link: "https://github.com/Indhu2004/capstone-project-2.git",
      github: "https://github.com/Indhu2004",
    },
    {
      id: 3,
      title: "React project",
      img: IMG2,
      description: "It’s a list of tasks you need to complete or things that you want to do.",
      technologies: "React | Javascript",
      link: "https://github.com/Indhu2004/React-task.git",
      github: "https://github.com/Indhu2004",
    },
    {
      id: 4,
      title: "capstone-project-1",
      img: IMG3,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html",
      link: "https://github.com/Indhu2004/capstone-project-1.git",
      github: "https://github.com/Indhu2004",
    },
    {
      id: 5,
      title: "capstone-project-2",
      img: IMG5,
      description:
        "It is about showing and giving others an understanding of who you are as a professional.",
      technologies: "Html | Css",
      link: "https://github.com/Indhu2004/capstone-project-2.git",
      github: "https://github.com/Indhu2004",
    },
    {
      id: 6,
      title: "React-task",
      img: IMG6,
      description:
        "it helps you stay focused. While freeing up space in your mind for other more creative tasks.",
      technologies: "React | Javascript",
      link: "https://github.com/Indhu2004/React-task.git",
      github: "https://github.com/Indhu2004",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
