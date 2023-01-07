import React, { useEffect } from "react";
import styled from "styled-components";
import yumemi_frontend_img from "../Images/yumemi_frontend_portfolio.png";
import my_portfolio_img from "../Images/my_portfolio.png";
import upcoming_img from "../Images/upcoming.png";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import FooterNav from "../components/FooterNav";

const projects = [
  {
    title: "Portfolio",
    date: "Dec 2022",
    description: "My first personal portfolio website",
    about:
      "This is my first portfolio website, what you're exploring now. Thank you for visiting my website.",
    imageSrc: my_portfolio_img,
    link: "",
    github: "https://github.com/yuki-1184/my_webpage",
    technologies: ["TypeScript", "React", "Chakra-UI", "HTML", "CSS"],
  },
  {
    title: "Multi-Threaded HTTP Server",
    date: "Nov 2022 - Dec 2022",
    description: "Deals with concurrency by synchronization",
    about:
      "Created a multi-threaded http server that handles multiple client requests simutaneously by using Synchronization. The implementation includes, strong modularity, high-level system design, HTTP protocols, client-server architecture, atomicity and coherency, own testing scripts, and understanding in POSIX.",
    imageSrc: upcoming_img,
    link: "",
    github: "",
    technologies: ["C", "Bash", "POSIX"],
  },
  {
    title: "Yumemi-Frontend",
    date: "May 2022 - June 2022",
    description: "Personal project to get started with web-development",
    about:
      "This is an open coding assesment provided by Yumemi Inc. Built a single page web application to display the population change in each prefecture in Japan. \n * The application requires RESAS API-Key.",
    imageSrc: yumemi_frontend_img,
    link: "https://yuki-1184.github.io/yumemi-frontend/",
    github: "https://github.com/yuki-1184/yumemi-frontend",
    technologies: ["JavaScript", "React", "RESAS API"],
  },
];

export default function Projects() {
  const LayoutProps = {
    title: "Projects",
  };
  return (
    <Layout {...LayoutProps}>
      <StyledProjects>
        <h1>Projects</h1>
        <ul>
          {projects.map((props, index) => (
            <ProjectCard key={index} {...props}></ProjectCard>
          ))}
        </ul>
        <div>
          <FooterNav goto="/contact">Enjoy your visit? Cotact me!</FooterNav>
        </div>
      </StyledProjects>
    </Layout>
  );
}

const StyledProjects = styled.section`
  margin: 20px auto;
  text-align: left;
  padding: 0px;
  max-width: 1000px;

  @media (max-width: 1280px) {
    margin: 20px 150px;
  }

  @media (max-width: 768px) {
    margin: 20px 20px;
  }

  h1 {
    margin: 0px 10px;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Playfair Display", serif;
    font-weight: 500;
    color: var(--notbg);
  }

  ul {
    margin: 20px 20px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
    gap: 15px;
    position: relative;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  div {
    padding: 30px 10px;
    font-family: "Playfair Display", serif;
    /* text-align: left; */
  }
`;
