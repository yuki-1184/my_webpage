import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import FooterNav from "../components/FooterNav";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
  const LayoutProps = {
    title: "Projects",
  };
  return (
    <Layout {...LayoutProps}>
      <StyledProjects>
        <h1>Projects</h1>
        <ul>
          {PROJECTS.map((props, index) => (
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
    transition: 0.3s ease-in-out;
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
