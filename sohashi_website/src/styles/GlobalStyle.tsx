import { createGlobalStyle } from "styled-components";
import { css } from 'styled-components';

const LightTheme = css`
  :root {
    --white: #e6f1ff;
    --bg: #fff;
    --notbg: #000;
    --red-warn: #FF0000;
    --light-skyblue: #34ace0;
    --dark-grayblue: #094a68;
    --light-yellow: #FFFFE0;
    --light-seagreen: #20B2AA;
    --light-cyan: #E0FFFF;
    --dark-cyan: #008B8B;
    --dark-gray: #A9A9A9;
    --light-gray: #7b7b7b;
    --gray-text: #545454;
    --dark-slategray: #2F4F4F;
    --gray-tagbg: rgba(186, 186, 186, 0.33);
    --dark-shadow: rgba(0, 0, 0, 0.4);
  }
`
const DarkTheme = css`
  :root {
    --white: #e6f1ff;
    --bg: #171616;
    --notbg: #fff;
    --red-warn: #00ff00;
    --light-skyblue: #34ace0;
    --dark-grayblue: #AFEEEE;
    --light-yellow: #FFFFE0;
    --light-seagreen: #20B2AA;
    --light-cyan: #024b4b;
    --dark-cyan: #7FFFD4;
    --dark-gray: #A9A9A9;
    --light-gray: #bdbdbd;
    --gray-text: #c6c6c6;
    --dark-slategray: #7bcbd4;
    --gray-tagbg: #bababaaa;
    --dark-shadow: rgba(255, 255, 2555, 0.4);
  }
`


type GlobalStyleProps = {
    theme: string,
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${(props) => props.theme == 'light' && LightTheme }
  ${(props) => props.theme == 'dark' && DarkTheme }
`

export default GlobalStyle;
