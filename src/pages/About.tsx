import React from "react";
import { Box, Text } from "@chakra-ui/react";
import FooterNav from "../components/FooterNav";
import ExperienceCard from "../components/ExperienceCard";

import styled from "styled-components";
import Layout from "../components/Layout";

const education = {
  degree: "BS in Computer Engineering, University of California Santa Cruz",
  date: "Expected in Dec 2023",
  clubs: "Member of Japanese Student Association",
  courses: [
    "Computer System Design",
    "Algorithms and Abstract Data Types",
    "Computer Architecture",
    "Applied Machine Learning",
  ],
};

const experiences = [
  {
    title: "e-Seikatsu",
    type: "Software Engineer Intern",
    date: "Aug 2022 - Sep 2022",
    location: "Tokyo, Japan",
    description:
      "Used modern web technologies to build a website that looks up for rentals. Implemented heat map searching feature using map API with a team mate.",
    url: "https://www.e-seikatsu.info/en/",
    technologies: ["TypeScrips", "Vue", "GitHub"],
  },
  {
    title: "NIFTY",
    type: "Software Engineer Intern",
    date: "Aug 2022",
    location: "Tokyo, Japan",
    description:
      "Worked as a scrum master to define project scope and solve technical problem. Corrected errors and added new features in a sample web application to improve usability.",
    url: "https://www.nifty.com/",
    technologies: ["Python", "Flask", "Docker", "AWS Code Commit"],
  },
];

export default function About() {
  return (
    <Layout title="About Me">
      <StyledAboutSection>
        <StyledAboutIntro>
          <h1>About Me</h1>
          <div>
            <p>
              Hello, my name is Satoki and I&#39;m a fourth year computer
              engineering student at University of California, Santa Cruz.
              I&#39;ve always been fascinated by the power of technology to
              solve problems and make a positive impact in the world, and that
              is what drew me to a career in computer engineering.
            </p>
            <p>
              Throughout my time at UC Santa Cruz, I&#39;ve gained a strong
              foundation in computer science principles and have developed
              skills in a variety of programming languages and frameworks.
              I&#39;m constantly seeking new opportunities to learn and grow as
              a professional, and am always open to challenges that push me to
              think creatively and find innovative solutions.
            </p>
            <p>
              In my free time, I enjoy exploring the outdoors, playing sports,
              and staying up-to-date on the latest developments in the tech
              industry. I&#39;m excited to connect with others in the field and
              to begin my career as a software engineer.
            </p>
          </div>
        </StyledAboutIntro>
        <StyledTimelineEducation>
          <h2>Education</h2>
          <div className="outer">
            <StyledContent>
              <h3>
                <strong>{education.degree}</strong>
              </h3>
              <h4>({education.date})</h4>
              <StyledCourses>
                {education.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </StyledCourses>
            </StyledContent>
          </div>
        </StyledTimelineEducation>
        <StyledTimeLineExperience>
          <h2>Experiences</h2>
          <ul>
            {experiences.map((props, index) => (
              <ExperienceCard key={index} {...props}></ExperienceCard>
            ))}
          </ul>
        </StyledTimeLineExperience>
        <FooterNav goto="/projects">Check out my projects</FooterNav>
      </StyledAboutSection>
    </Layout>
  );
}

const StyledAboutSection = styled("section")`
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
`;

const StyledAboutIntro = styled("div")`
  max-width: 800px;
  h1 {
    color: var(--notbg);
  }

  div {
    padding: 20px;

    p {
      padding: 0px 0px 15px;
      color: var(--article-color);
    }
  }
`;

const StyledTimeLineExperience = styled("div")`
  padding: 20px 20px;
  max-width: 800px;

  h2 {
    margin: 10px 0px;
    font-size: 24px;
    font-family: "Playfair Display", serif;
    color: var(--notbg);
  }

  ul {
    margin: 10px 10px;
    list-style-type: none;
    border-left: 2px solid var(--border-left);
    padding: 0px 5px;
  }
`;

const StyledTimelineEducation = styled("div")`
  padding: 20px 20px;
  max-width: 800px;

  h2 {
    margin: 10px 0px;
    font-size: 24px;
    font-family: "Playfair Display", serif;
    color: var(--notbg);
  }

  .outer {
    margin: 10px 10px;
    list-style-type: none;
    border-left: 2px solid var(--border-left);
    padding: 0px 5px;
  }

  li {
    list-style-position: inside;
  }
`;

const StyledContent = styled("div")`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  position: relative;
  transition: 0.5s;

  &:before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 999px;
    border: 3px solid var(--light-skyblue);
    background: var(--bg);
    left: -13px;
    top: 16px;
    transition: 0.5s;
  }

  &:hover:before {
    background-color: var(--border-left);
  }

  h3 {
    color: var(--notbg);
  }

  h4 {
    padding-bottom: 5px;
    color: var(--notbg);
  }
`;

const StyledCourses = styled("ul")`
  list-style-type: none;

  li {
    position: relative;
    margin: 7px 0px;
    padding-left: 20px;
    font-size: 15px;
    color: var(--article-color);

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      top: 6px;
      font-size: 12px;
      line-height: 12px;
    }
  }
`;
