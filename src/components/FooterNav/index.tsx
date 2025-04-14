import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

type FooterNavProps = {
  children: string;
  goto: string;
};

const FooterNav = ({ children, goto }: FooterNavProps) => {
  return (
    <StyledFooterNav>
      <ChakraLink
        as={RouterLink}
        to={goto}
        className="animated-arrow"
        sx={{ textDecoration: "none" }}
      >
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <p className="text">{children}</p>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </ChakraLink>
    </StyledFooterNav>
  );
};

const StyledFooterNav = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 50px 10px;
  font-family: "Playfair Display", serif;
  z-index: -3;

  .the-arrow {
    width: 64px;
    transition: all 0.2s;
  }
  .the-arrow.-left {
    position: absolute;
    top: 60%;
    left: 0;
  }
  .the-arrow.-left > .shaft {
    width: 0;
    background-color: #999;
  }
  .the-arrow.-left > .shaft:before,
  .the-arrow.-left > .shaft:after {
    width: 0;
    background-color: var(--footer-arrow);
  }
  .the-arrow.-left > .shaft:before {
    transform: rotate(0);
  }
  .the-arrow.-left > .shaft:after {
    transform: rotate(0);
  }
  .the-arrow.-right {
    top: 3px;
  }
  .the-arrow.-right > .shaft {
    width: 64px;
    transition-delay: 0.2s;
  }
  .the-arrow.-right > .shaft:before,
  .the-arrow.-right > .shaft:after {
    width: 8px;
    transition-delay: 0.3s;
    transition: all 0.5s;
  }
  .the-arrow.-right > .shaft:before {
    transform: rotate(40deg);
  }
  .the-arrow.-right > .shaft:after {
    transform: rotate(-40deg);
  }
  .the-arrow > .shaft {
    background-color: var(--footer-arrow);
    display: block;
    height: 1px;
    position: relative;
    transition: all 0.2s;
    transition-delay: 0;
    will-change: transform;
  }
  .the-arrow > .shaft:before,
  .the-arrow > .shaft:after {
    background-color: var(--footer-arrow);
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.2s;
    transition-delay: 0;
  }
  .the-arrow > .shaft:before {
    transform-origin: top right;
  }
  .the-arrow > .shaft:after {
    transform-origin: bottom right;
  }
  .animated-arrow {
    display: inline-block;
    color: var(--footer-arrow);
    font-size: 1.25em;
    font-style: italic;
    text-decoration: none;
    position: relative;
    transition: all 0.2s;
  }
  .animated-arrow:hover {
    color: var(--notbg);
  }
  .animated-arrow:hover > .the-arrow.-left > .shaft {
    width: 64px;
    transition-delay: 0.1s;
    background-color: var(--notbg);
  }
  .animated-arrow:hover > .the-arrow.-left > .shaft:before,
  .animated-arrow:hover > .the-arrow.-left > .shaft:after {
    width: 8px;
    transition-delay: 0.1s;
    background-color: var(--notbg);
  }
  .animated-arrow:hover > .the-arrow.-left > .shaft:before {
    transform: rotate(40deg);
  }
  .animated-arrow:hover > .the-arrow.-left > .shaft:after {
    transform: rotate(-40deg);
  }
  .animated-arrow:hover > .main {
    transform: translateX(80px);
  }
  .animated-arrow:hover > .main > .the-arrow.-right > .shaft {
    width: 0;
    transform: translateX(200%);
    transition-delay: 0;
  }
  .animated-arrow:hover > .main > .the-arrow.-right > .shaft:before,
  .animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
    width: 0;
    transition-delay: 0;
    transition: all 0.1s;
  }
  .animated-arrow:hover > .main > .the-arrow.-right > .shaft:before {
    transform: rotate(0);
  }
  .animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
    transform: rotate(0);
  }
  .animated-arrow > .main {
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }
  .animated-arrow > .main > .text {
    margin: 0 16px 0 0;
    line-height: 1;
  }
  .animated-arrow > .main > .the-arrow {
    position: relative;
  }
`;

export default FooterNav;
