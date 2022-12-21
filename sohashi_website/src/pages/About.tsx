import React from "react";
import {
  Box,
  Text
} from "@chakra-ui/react"
import FooterNav from "../components/FooterNav";
import ExperienceCard from "../components/ExperienceCard";

import styled from 'styled-components';
import Layout from "../components/Layout";

const education = [
  {
    degree: 'Bachelor of Science, Computer Engineering',
    school: 'University of California, Santa Cruz - Santa Cruz, CA',
    date: 'Dec 2023 (Expected)',
    clubs: 'Member of Japanese Student Association',
    courses: ['Principles of Computer System Design', 'Algorithms and Abstract Data Types, Computer Architecture', 'Applied Machine Learning']
  }
]

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
          <StyledEducation>
            <h2>Education</h2>
            <ul>
              
            </ul>
          </StyledEducation>
          <StyledTimeLine>
            <h2>Experiences</h2>
            <ul>
              {experiences.map((props, index) => (
                <ExperienceCard key={index} {...props}></ExperienceCard>
              ))}
            </ul>
          </StyledTimeLine>
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

const StyledTimeLine = styled('div')`
  max-width: 1000px;
  color:#000;
  padding:30px 20px;

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

const StyledAbout = styled('div')`
  
`

const StyledEducation = styled('div')`
  max-width: 1000px;
  color:#000;
  padding:30px 20px;

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

const StyledExperience = styled('div')`
  
`

{/* <Box className="About" bg={useColorModeValue("gray.100", "gray.900")}>
        <Grid
            templateAreas={`"img header1"
                            "img header2"`}
            gridTemplateRows={'150px 150px'}
            gridTemplateColumns={'400px 1fr'}
            h='300px'
        >
          <GridItem pl='2' area={'img'}>
            <Image
                className="about-heading about-img"
                borderRadius='full'
                boxSize='300px'
                src="https://bit.ly/dan-abramov"
                alt='Satoki Ohashi'
            />
          </GridItem>
          <GridItem pl='2' area={'header1'}>
            <Heading className="about-heading about-msg1" as="h1">Software Engineer Based in Tokyo, Japan and California</Heading>
          </GridItem>
          <GridItem pl='2' area={'header2'}>
            <p className="about-heading about-msg2">
                Hi, I am Satoki Ohashi. I am currently an undergraduate student at 
                University of California Santa Cruz and pursuing a career in Software Engineering.
            </p>
            <Flex pt='30px' justifyContent='flex-end' alignItems='center' direction='column'>
                <Box className="about-links">
                <a href="https://www.linkedin.com/in/satoki-ohashi-4ba513253/"><img className="about-img" src={navLinkedIn} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/Satoki716"><img className="about-img" src={navInsta} alt="Instagram" /></a>
                <a href="https://github.com/yuki-1184"><img className="about-img" src={navGithub} alt="GitHub" /></a>
                </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box> */}