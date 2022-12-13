import styled, { createGlobalStyle, css } from 'styled-components';

// const LightTheme = css`
//   :root {
//     --bg: #fffdfc;
//     --button-index: #f4f1ee;
//     --cw: #000;
//     --invert: 0;
//     --mark: #f9f7f6;
//     --theme-amount: 0;
//     --gray: #d6d6d6;
//     --pattern: #f8f7f7;
//     --light-gray: #dedede;
//     --lighter-gray: #f5f5f5;
//     --article-color: #545454;
//     --header-bg: rgba(255, 255, 255, 0.8);
//     --token: #666;
//     --border-color: #eaeaea;
//     --sidebar-tag: #efe9e4;
//     --gray-alpha: #f6f4f06b;
//     --sidebar-cta: #0b0c15;
//     --nav-link: rgba(0, 0, 0, 0.5);
//     --timeline: #e0e0e0;
//     ${FontToken}
//   }
// `;

// const DarkTheme = css`
//   :root {
//     --bg: #020a13;
//     --invert: 1;
//     --theme-amount: 1;
//     --cw: #e1e1e1;
//     --gray: #9e9e9c;
//     --pattern: transparent;
//     --light-gray: #444;
//     --lighter-gray: #222;
//     --article-color: #c6c6c6;
//     --header-bg: rgba(19, 20, 21, 0.8);
//     --token: #999;
//     --border-color: #14202b;
//     --button-index: #091521;
//     --mark: #080f18;
//     --sidebar-tag: #13283e;
//     --sidebar-cta: #3f566e;
//     --gray-alpha: #07121dd4;
//     --timeline: #0f1923;
//     --nav-link: rgba(255, 255, 255, 0.8);
//     ${FontToken}
//   }
// `;

// export const BodyStyling = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

// ${(props) => (props.theme ? DarkTheme : LightTheme)}

// ::selection {
//   background: var(--token);
//   color: #fff;
//   /* WebKit/Blink Browsers */
// }

// ::-moz-selection {
//   background: var(--token);
//   color: #fff;
//   /* Gecko Browsers */
// }

// /*::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }*/
// ::-webkit-input-placeholder {
//   color: var(--light-gray);
//   opacity: 1;
// }

// :-moz-placeholder {
//   color: var(--light-gray);
//   opacity: 1;
// }
// :-ms-input-placeholder {
//   color: var(--light-gray);
//   opacity: 1;
// }

// /*--------*/  
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box; 

// }


// :global(body) {
//     font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
//       Helvetica, sans-serif;
// }


// body {
//   background: var(--bg) !important;
//   padding-right: 0px !important;
//   font-family: "Blorado", sans-serif;
//   margin:0;
//     -webkit-tap-highlight-color: rgba(0,0,0,0);
//     -moz-osx-font-smoothing:grayscale;
//     -webkit-font-smoothing: antialiased;

// }

// html{
//     scroll-behavior: smooth;
//     -ms-text-size-adjust:100%;
//     -webkit-text-size-adjust:100%
// }


// svg{
//   fill: var(--article-color);
//   &.logo__section{
//     path{
//       fill: var(--cw);
//     }
//   }
// }
// a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
//   font-family: "Blorado", sans-serif;
//   text-rendering: geometricPrecision;
//   color: var(--cw)
// }
// :focus {
//   outline-color:var(--cw) !important;
// }

// a{
//   cursor: pointer;
// }

// mark.mark {
//   color: inherit;
//   padding: 0;
//   background: none;
//   background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
//   background-repeat: no-repeat;
//   background-size: 0% .3em;
//   background-position: 0 80%;
//   position: relative;
//   background-size: 100% .3em;
// }

// .loading-img {
//   object-fit: contain !important;
//   transform: scale(0.5);
// }

// .page-transition-enter {
//     opacity: 0;
//   }
//   .page-transition-enter-active {
//     opacity: 1;
//     transition: opacity 300ms;
//   }
//   .page-transition-exit {
//     opacity: 1;
//   }
//   .page-transition-exit-active {
//     opacity: 0;
//     transition: opacity 300ms;
//   }
//   .scout__bar-wrapper{
//   --scout-white: var(--bg);
//   --scout-theme-black: var(--cw);
//   --scout-light-grey: var(--border-color);
//   --scout-theme-grey: var(--gray);
//   --scout-theme-card-hover: var(--gray-alpha);
//   --scout-theme-keyboard: 0px 2px 0px 2px #8d8d8d;
//   --scout-tutorial-grey: #494949
//   --scout-box-shadow: 1px 2px 16px 10px rgba(0, 0, 0, 0.05);
//   }
// `;

export const Main = styled.main`
    background-image: linear-gradient(180deg, 
        rgba(0,0,0,0) calc(13% - 1px), 
        rgba(240,240,240,1) calc(13%), 
        rgba(0,0,0,0) calc(13% + 1px)
    );
    background-attachment: fixed;
    // background-size: 1px 101px;
    min-height: 100vh;
`

export const BgText = styled.div`
    margin: 0;
    overflow: hidden;

    h1 {
        font-family: Abril FatFace;
        font-size: 27.42vmin;
        /* Change bgtext based on page */
        ${(props) => 
            props.title === 'About Me' ||
            props.title === 'Contact'  ||
            props.title === 'Home' 
            ? css `
                writing-mode: ltr
              `
            : css `
                writing-mode: 
              `}
        letter-spacing: -0.3rem;
        white-space: pre;
        color: var(--mask);
        position: fixed;
        bottom: 0px;
        opacity: 0.05;
        z-index: -1;
        animation-duration: 4s;
        animation-name: slidein; 
    }

    
    @keyframes slidein {
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
    }
`

export const BackLay = styled.div`
  margin: 0;

  h1 {
    font-family: Abril FatFace;
    font-size: 25.42vmin;
    ${(props) =>
      props.title === 'About Me' ||
      props.title === 'Contact' ||
      props.title === 'Home'
        ? css`
            writing-mode: unset;
          `
        : css`
            writing-mode: tb-rl;
          `}

    letter-spacing: -0.3rem;
    white-space: pre;
    color: var(--mark);
    position: fixed;
    left: -4rem;
    transition: all 0.8s ease;
    opacity: 0.05;
    z-index: -1;
    bottom: 0px;
  }
`;

export const Side = styled.div`
    width: 40px;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: ${props => (props.title === 'left' ? '40px' : 'auto')};
    right: ${props => (props.title === 'left' ? 'auto' : '40px')};

    @media(max-width: 1080px) {
        left: ${props => (props.title === 'left' ? '20px' : 'auto')};
        right: ${props => (props.title === 'left' ? 'auto' : '20px')};
    }

    @media(max-width: 768px) {
        display: None;
    }
`;

export const Main2 = styled.main`
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