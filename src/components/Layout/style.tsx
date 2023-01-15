import styled, { css } from "styled-components";

export const Main = styled("main")`
  /* background-image: linear-gradient(180deg, 
        rgba(0,0,0,0) calc(13% - 1px), 
        rgba(240,240,240,1) calc(13%), 
        rgba(0,0,0,0) calc(13% + 1px)
    ); */

  background-attachment: fixed;
  // background-size: 1px 101px;
  min-height: 100vh;
  z-index: -3;
  background: var(--bg);
`;

export const StyledBody = styled("body")`
  position: relative;
  height: 70vh;
  z-index: -2;
`;

export const StyledHeader = styled("header")`
  padding: 50px 40px;
  background: transparent;
  z-index: 3;
  width: 100%;
  color: var(--notbg);

  .navbar-my-name {
    white-space: nowrap;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const BgText = styled("div")`
  margin: 0;
  overflow: hidden;

  h1 {
    font-family: Abril FatFace;
    font-size: 27.42vmin;
    font-weight: 600;
    line-height: 250px;
    /* Change bgtext based on page */
    ${(props) =>
      props.title === "About Me" ||
      props.title === "Contact" ||
      props.title === "Home"
        ? css`
            writing-mode: ;
          `
        : css`
            writing-mode: vertical-lr;
            font-size: 24.42vmin;
          `}
    letter-spacing: -0.3rem;
    white-space: pre;
    position: fixed;
    bottom: 0px;
    color: var(--notbg);
    opacity: 0.04;
    z-index: 0;
    animation-duration: 4s;
    animation-name: slidein;
  }

  @keyframes slidein {
    ${(props) =>
      props.title === "About Me" ||
      props.title === "Contact" ||
      props.title === "Home"
        ? css`
            from {
              margin-left: 100%;
              width: 300%;
            }
            75% {
              margin-left: 25%;
              width: 150%;
            }
            to {
              margin-left: 0%;
              width: 100%;
            }
          `
        : css`
            writing-mode: vertical-lr;
            from {
              margin-bottom: 100%;
              height: 300%;
            }
            to {
              margin-bottom: 0%;
              height: 100%;
            }
          `}
  }
`;

export const BackLay = styled("div")`
  margin: 0;

  h1 {
    font-family: Abril FatFace;
    font-size: 25.42vmin;
    ${(props) =>
      props.title === "About Me" ||
      props.title === "Contact" ||
      props.title === "Home"
        ? css`
            writing-mode: unset;
          `
        : css`
            writing-mode: tb-rl;
          `}

    letter-spacing: -0.3rem;
    white-space: pre;
    position: fixed;
    left: -4rem;
    transition: all 0.8s ease;
    opacity: 0.05;
    z-index: -1;
    bottom: 0px;
  }
`;

export const Side = styled("div")`
  width: 40px;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: ${(props) => (props.title === "left" ? "60px" : "auto")};
  right: ${(props) => (props.title === "left" ? "auto" : "60px")};

  @media (max-width: 1280px) {
    left: ${(props) => (props.title === "left" ? "20px" : "auto")};
    right: ${(props) => (props.title === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: None;
  }
`;

export const Main2 = styled("main")`
  /* background-image: radial-gradient(var(--pattern) 0.5px, transparent 0.5px),
    radial-gradient(var(--pattern) 0.5px, transparent 0.5px);
  background-size: calc(20 * 0.5px) calc(20 * 0.5px);
  background-position: 0 0, calc(10 * 0.5px) calc(10 * 0.5px); */
  background-image: repeating-linear-gradient(
    0deg,
    var(--pattern),
    var(--pattern) 1px,
    transparent 1px,
    transparent
  );
  background-attachment: fixed;
  background-size: 1px 101px;
  min-height: 100vh;
`;
