import React from "react";
import styled, { css } from "styled-components";
import { Side } from "../Layout/style";
import getLogo from "../../data/Icons";

const SocialMedia = [
  { name: "GitHub", url: "https://github.com/yuki-1184" },
  { name: "Instagram", url: "https://www.instagram.com/Satoki716" },
  { name: "Facebook", url: "https://www.facebook.com/satoki.ohashi.1" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/satoki-ohashi-4ba513253/",
  },
];

type StyledSideLeftProps = {
  theme: string;
};

const StyledSideLeft = styled("ul")<StyledSideLeftProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: None;

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: var(--notbg);
  }

  li {
    margin: 12px;
    color: var(--notbg);

    &:hover {
      transform: translateY(-3px);
      /* ${(props) =>
        props.theme === "light"
          ? css`
              filter: invert(8%) sepia(94%) saturate(7392%) hue-rotate(237deg)
                brightness(56%) contrast(136%);
            `
          : css`
              filter: invert(86%) sepia(17%) saturate(1000%) hue-rotate(95deg)
                brightness(105%) contrast(105%);
            `} */
    }
    ${(props) =>
      props.theme === "light"
        ? css`
            filter: invert(1);
          `
        : null}
  }
`;

const StyledSideRight = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: None;

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 100px;
    margin: 0 auto;
    background-color: var(--notbg);
  }

  a {
    margin-bottom: 20px;
    writing-mode: tb-rl;
    transition-property: margin-bottom, color;
    transition: 0.1s;
    color: var(--notbg);

    &:hover {
      transform: translateY(-3px);
      color: var(--sidebar-mail);
    }
  }
`;

type SideBarProps = {
  theme: string;
};

const SideBar = ({ theme }: SideBarProps) => {
  return (
    <>
      <Side title="left">
        <StyledSideLeft theme={theme}>
          {SocialMedia.map(({ name, url }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                {getLogo(name, "22px", "22px")}
              </a>
            </li>
          ))}
        </StyledSideLeft>
      </Side>
      <Side title="right">
        <StyledSideRight>
          <a href="mailto:yuki.1184apple@gmail.com">yuki.1184apple@gmail.com</a>
        </StyledSideRight>
      </Side>
    </>
  );
};

export default SideBar;
