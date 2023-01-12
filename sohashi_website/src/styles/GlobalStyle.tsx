import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const LightTheme = css`
  :root {
    --white: #e6f1ff;
    --black: #171616;
    --red-warn: #ff0000;
    --light-skyblue: #34ace0;
    --light-yellow: #ffffe0;
    --aquamarin: #7fffd4;
    --light-seagreen: #20b2aa;
    /* --light-cyan: #E0FFFF; */
    /* --dark-cyan: #008B8B; */
    --dark-gray: #a9a9a9;
    --light-gray: #7b7b7b;
    --dark-slategray: #2f4f4f;

    --bg: #fff;
    --notbg: #000;
    --article-color: #545454;
    --border-left: #094a68;
    --footer-arrow: #2f4f4f;
    --lang-tagbg: rgba(186, 186, 186, 0.33);
    --drower-langtagbg: #bababaaa;
    --navbar-page: #7fffd4;
    --sidebar-mail: #008b8b;
    --button-border: #008b8b;
    --button-background: #e0ffff;
    --placeholder-color: #232323;
    --gray-tagbg: rgba(186, 186, 186, 0.33);
    --home-welcome: #2a3838;
    --box-shadow: rgba(0, 0, 0, 0.4);
    --drawer-bgcolor: #ffffe9;
  }
`;
const DarkTheme = css`
  :root {
    --white: #e6f1ff;
    --black: #171616;
    --red-warn: #ff0000;
    --light-skyblue: #34ace0;
    --light-yellow: #ffffe0;
    --aquamarin: #7fffd4;
    --light-seagreen: #20b2aa;
    /* --light-cyan: #024b4b; */
    /* --dark-cyan: rgb(127, 255, 212); */
    --dark-gray: #a9a9a9;
    --light-gray: #bdbdbd;
    --dark-slategray: #7bcbd4;

    --bg: #171616;
    --notbg: #fff;
    --article-color: #c6c6c6;
    --border-left: #afeeee;
    --footer-arrow: #7bcbd4;
    --lang-tagbg: rgba(186, 186, 186, 0.33);
    --drower-langtagbg: #bababaaa;
    --navbar-page: #7fffd4;
    --sidebar-mail: #7fffd4;
    --button-border: #7fffd4;
    --button-background: #3d3c3c;
    --placeholder-color: #A9A9A9;
    --gray-tagbg: rgba(186, 186, 186, 0.33);
    --home-welcome: #e9e9e9;
    --box-shadow: rgba(255, 255, 2555, 0.4);
    --drawer-bgcolor: #1A202C;
  }
`;

type GlobalStyleProps = {
  theme: string;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${(props) => props.theme === "light" && LightTheme}
  ${(props) => props.theme === "dark" && DarkTheme}
`;

export default GlobalStyle;
