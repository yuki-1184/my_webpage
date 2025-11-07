import React from "react";
import FooterNav from "../components/FooterNav";
import ExperienceCard from "../components/ExperienceCard";

import styled from "styled-components";
import Layout from "../components/Layout";
import { EDUCATION, EXPERIENCES } from "../constants/about";

export default function About() {
  return (
    <Layout title="About Me">
      <StyledAboutSection>
        <StyledAboutIntro>
          <h1>About Me</h1>
          <div>
            <p>
              Hello, my name is Satoki. I am currently a first year Master&#39;s
              student at <strong>Tohoku University</strong>, where I am focusing
              on research in LLM interpretability, Artificial Intelligence and
              Natural Language Processing (NLP).
            </p>
            <p>
              I hold a B.S. in Computer Engineering from the
              <strong>University of California, Santa Cruz</strong>. My academic
              journey has given me a strong foundation in computer science, and
              I&#39;m passionate about exploring how AI technology can be
              applied to solve real-world problems.
            </p>
            <p>
              I am always eager to learn new things, take on challenges that
              push me to think creatively, and find innovative solutions.
              I&#39;m excited to connect with others in the field and continue
              my growth as an engineer.
            </p>
          </div>
        </StyledAboutIntro>
        <StyledTimelineEducation>
          <h2>Education</h2>
          <div className="outer">
            {EDUCATION.map((education, index) => (
              <StyledContent key={index}>
                <h3>
                  <strong>{education.degree}</strong>
                </h3>
                <h4>
                  {education.school} - {education.date}
                </h4>
                <h4>
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "var(--light-skyblue)",
                      textDecorationThickness: "2px",
                    }}
                  >
                    {education.lab}
                  </a>
                </h4>
                <StyledCourses>
                  {education.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </StyledCourses>
              </StyledContent>
            ))}
          </div>
        </StyledTimelineEducation>
        <StyledTimeLineExperience>
          <h2>Experiences</h2>
          <ul>
            {EXPERIENCES.map((props, index) => (
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
