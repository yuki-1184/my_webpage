import { createGlobalStyle } from "styled-components";
import { css } from 'styled-components';

const LightTheme = css`
  :root {
    --white: #e6f1ff;
    --black: #171616;
    --red-warn: #FF0000;
    --light-skyblue: #34ace0;
    --light-yellow: #FFFFE0;
    --aquamarin: #7FFFD4;
    --light-seagreen: #20B2AA;
    /* --light-cyan: #E0FFFF; */
    /* --dark-cyan: #008B8B; */
    --dark-gray: #A9A9A9;
    --light-gray: #7b7b7b;
    --dark-slategray: #2F4F4F;

    --bg: #fff;
    --notbg: #000;
    --article-color: #545454;
    --border-left: #094a68;
    --footer-arrow: #2F4F4F;
    --lang-tagbg:rgba(186, 186, 186, 0.33);
    --drower-langtagbg: #bababaaa;
    --sidebar-mail: #008B8B;
    --button-border: #008B8B;
    --button-background: #E0FFFF;
    --gray-tagbg: rgba(186, 186, 186, 0.33);
    --home-welcome: #2F4F4F;
    --box-shadow: rgba(0, 0, 0, 0.4);
  }
`
const DarkTheme = css`
  :root {
    --white: #e6f1ff;
    --black: #171616;
    --red-warn: #00ff08;
    --light-skyblue: #34ace0;
    --light-yellow: #FFFFE0;
    --aquamarin: #7FFFD4;
    --light-seagreen: #20B2AA;
    /* --light-cyan: #024b4b; */
    /* --dark-cyan: #7FFFD4; */
    --dark-gray: #A9A9A9;
    --light-gray: #bdbdbd;
    --dark-slategray: #7bcbd4;

    --bg: #171616;
    --notbg: #fff;
    --article-color: #c6c6c6;
    --border-left: #AFEEEE;
    --footer-arrow: #7bcbd4;
    --lang-tagbg: rgba(186, 186, 186, 0.33);
    --drower-langtagbg: #bababaaa;
    --sidebar-mail: #7FFFD4; 
    --button-border: #7FFFD4;
    --button-background: #3d3c3c;
    --home-welcome: #A9A9A9;
    --box-shadow: rgba(255, 255, 2555, 0.4);
  }
`

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


type GlobalStyleProps = {
    theme: string,
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${(props) => props.theme == 'light' && LightTheme }
  ${(props) => props.theme == 'dark' && DarkTheme }
`

export default GlobalStyle;
