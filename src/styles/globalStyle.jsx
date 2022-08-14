import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

//GLOBAL STYLES 

strong {
	font-weight: bold;
}

* {
  box-sizing: border-box;

  --color-0: white;
  --color-1: blue;
  --color-2: red;
  --color-3: green;

  --width-mobile: 375px;
  --height-header-mobile: 50px;
  --height-header-desktop: 75px;

  --container-margin-top: -25px;
  /* --container-background: linear-gradient(
        135deg,
        rgba(121, 9, 9, 0.4) 15%,
        rgba(9, 9, 121, 1) 45%,
        rgba(0, 212, 255, 1) 100%
    ); */
    --container-background: white;

  --main-title-size: 32px;
  --title-margin-top: 15px;
  --title-margin-bottom: 24px;
  --title-font-color: #000000;

  --subcontainer-width: 350px;
  --subcontainer-max-width: 700px;
  --subcontainer-border: 3px solid blue;
  --subcontainer-div-gap: 10px;
  --subcontainer-font-size: 20px;

  --inputs-width: 326px;
  --inputs-height: 58px;
  --inputs-font-size: 20px;
  --inputs-gap: 13px;
  --inputs-radius: 5px;
  --inputs-padding-left: 15px;

  --button-color: #90388C;
  --button-height: 46px;
  --button-font-size: 20px;
  --button-font-weight: 700;
  --button-text-color:#FFFFFF;

  --icon-size-mobile: 20px;
  --icon-size-desktop: 25px;

  --logo-header-mobile: 75px;
  --logo-header-top: 10px;

  --select-width: 150px;
  --select-heigth: 75px;
  --select-color: white;
  --select-background: #87287d;
  --select-gap: 20px;
  --select-radius: 5px;


}

body {
    background-color: var(--color-0);
}
`
export default GlobalStyle;