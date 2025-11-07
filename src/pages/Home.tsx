/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import Layout, { PageWrapper } from "../components/Layout";
import FooterNav from "../components/FooterNav";
import styled from "styled-components";

function Home() {
  const LayoutProps = {
    title: "Home",
  };
  return (
    <Layout {...LayoutProps}>
      <StyledHome>
        {/* <SkipNavContent /> */}
        <h1>Hi, my name is</h1>
        <h2 className="big-heading">
          <span>S</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
          <span>k</span>
          <span>i</span>
          <span className="Lastname">O</span>
          <span>h</span>
          <span>a</span>
          <span>s</span>
          <span>h</span>
          <span>i</span>
        </h2>
        <h3>Welcome to my website!!</h3>
        <p>
          I'm a Master's student at Tohoku University researching AI and NLP,
          after graduating from UC Santa Cruz with a B.S. in Computer
          Engineering. I'm pursuing my career as a software engineer.
        </p>
        <p>
          A little bit about my background. I grew up in Tokyo Japan and moved
          to the United States in my third year of high school.
        </p>
        <div>
          <FooterNav goto="/about">Check out more About Me</FooterNav>
        </div>
      </StyledHome>
    </Layout>
  );
}

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-height: 70vh;
  text-align: left;
  padding: 0;
  max-width: 1000px;
  color: var(--notbg);
  /* font-family: 'Playfair Display', serif; */

  @media (max-width: 1250px) {
    margin: 20px 150px;
  }

  @media (max-width: 768px) {
    margin: 20px 20px;
  }

  h1 {
    margin: 20px 5px 20px 5px;
  }

  h2 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    line-height: 1.1;
    text-shadow: 2px 2px var(--red-warn);

    span {
      transition: 0.3s ease-in-out;
      display: inline-block;

      &:hover {
        transform: translateY(-10px);
      }
    }

    .Lastname {
      padding-left: 15px;
    }
  }
  h3 {
    margin-top: 10px;
    font-size: clamp(35px, 7vw, 75px);
    font-weight: 500;
    line-height: 1;
    color: var(--home-welcome);
    transition: 0.3s ease-in-out;
  }
  p {
    margin: 20px 20px 10px 3px;
    max-width: 640px;
    color: var(--article-color);
  }

  div {
    font-family: "Playfair Display", serif;
    text-align: left;
    padding: 30px 0px;
  }
`;

export default Home;
