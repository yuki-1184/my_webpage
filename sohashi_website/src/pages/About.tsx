import React from "react";
import {
  Box,
  Text
} from "@chakra-ui/react"
import FooterNav from "../components/FooterNav";
import ExperienceCard from "../components/ExperienceCard";

import styled from 'styled-components';
import Layout from "../components/Layout";

const education = {
  degree: 'BS in Computer Engineering, University of California Santa Cruz',
  date: 'Expected in Dec 2023',
  clubs: 'Member of Japanese Student Association',
  courses: ['Principles of Computer System Design', 'Algorithms and Abstract Data Types', 'Computer Architecture', 'Applied Machine Learning']
}

const experiences = [
  {
    title: 'e-Seikatsu',
    type: 'Software Engineer Intern',
    date: 'Aug 2022 - Sep 2022',
    location: 'Tokyo, Japan',
    description:
      'Used modern web technologies to build a website that looks up for rentals. Implemented heat map searching feature using map API with a team mate.',
    url: 'https://www.e-seikatsu.info/en/',
    technologies: ['TypeScrips', 'Vue', 'GitHub']
  },
  {
    title: 'NIFTY',
    type: 'Software Engineer Intern',
    date: 'Aug 2022',
    location: 'Tokyo, Japan',
    description:
      'Worked as a scrum master to define project scope and solve technical problem. Corrected errors and added new features in a sample web application to improve usability.',
    url: 'https://www.nifty.com/',
    technologies: ['Python', 'Flask', 'Docker', 'AWS Code Commit']
  }
]

export default function About() {
    return (
      <Layout title='About Me'>
        <StyledAboutSection>
          <StyledAbout>
            <h1>About Me</h1>
            <p>Hello! My name is Satoki and I&#39;m currently a </p>
          </StyledAbout>
          <StyledTimelineEducation>
            <h2>Education</h2>
            <div className="outer">
              <StyledContent>
                <h3><strong>{education.degree}</strong></h3>
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
          <FooterNav goto='/projects'>Check out my projects</FooterNav>
        </StyledAboutSection>
      </Layout>
    )
}

const StyledAboutSection = styled('section')`
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
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }

  p {
    color: #545454;
  }
`

const StyledAbout = styled('div')`
  
`

const StyledTimeLineExperience = styled('div')`
  padding:25px 20px;
  max-width: 800px;

  h2 {
    margin: 10px 0px;
    font-size: 24px;
    font-family: 'Playfair Display', serif;
  }

  ul {
    margin: 10px 10px;
    list-style-type: none;
    border-left: 2px solid #094a68;
    padding: 0px 5px;
  }
`

const StyledTimelineEducation = styled('div')`
  padding:25px 20px;
  max-width: 800px;

  h2 {
    margin: 10px 0px;
    font-size: 24px;
    font-family: 'Playfair Display', serif;
  }

  .outer {
    margin: 10px 10px;
    list-style-type: none;
    border-left: 2px solid #094a68;
    padding: 0px 5px;
  }

  li {
    list-style-position: inside;
  }
`

const StyledContent = styled('div')`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  transition: .5s;

  &:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 999px;
    border: 3px solid #34ace0;
    background: #fff;
    left: -13px;
    top: 16px;
    transition: .5s;
  }

  &:hover:before {
    background-color:#7b7b7b;
  }

  h4 {
    padding-bottom: 5px;
  }
`

const StyledCourses = styled('ul')`
  list-style-type: none;

  li {
    position: relative;
    margin: 7px 0px;
    padding-left: 20px;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      top: 6px;
      color: var(--green);
      font-size: 12px;
      line-height: 12px;
    }
  }
`
