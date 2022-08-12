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
  --height-header: 75px;

  --main-title-size: 32px;
  --title-margin-top: 15px;
  --title-margin-bottom: 24px;

  --subcontainer-width: 350px;
  
  --inputs-width: 326px;
  --inputs-height: 58px;
  --inputs-gap: 13px;
  --inputs-radius: 5px;
  --inputs-padding-left: 15px;

  --button-collor: #FF6C00;
  --button-height: 46px;
  --button-font-size: 20px;
  --button-font-weight: 700;
  --button-text-color:#FFFFFF;

  --icon-size: 25px;

  --payment-width: 150px;
  --payment-heigth: 75px;
  --payment-background: #ffa920;
  --payment-gap: 10px;
  --payment-radius: 5px;


}

body {
    background-color: var(--color-0);
}
`
export default GlobalStyle;