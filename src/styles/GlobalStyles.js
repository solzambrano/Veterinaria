import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  --green-50:  #ECF7E7; 
  --green-200: #6dec6d;  
  --green-400: #19e65e; 
  --green-500: #328741;  
  --green-600: #4c835d;  
  --green-700: #116D2B;  
  --green-800: #065106;  
  --green-text: #3C4B3B;
  --green-dark-alt: #006E27; 

  /* Verdes con alpha */
  --green-soft:        #abf096a8;
  --green-mid:         #6ce946c9;
  --green-mid-soft:    #34e78b70;
  --green-bright-solid: #43f67a;
  --green-bright-alpha: #08f67cd4;
  --green-50-solid:    #cef0be;
  --green-dark-alpha-80: rgb(0 110 39 / 0.8);        /* green-dark-alt con opacidad */
  --green-deep-alpha-46: rgba(27, 79, 32, 0.46); 
  --color-primary-muted-10: rgba(25, 230, 94, 0.1);
  /* ============================================================
     PALETA — GRISES / NEUTROS
     ============================================================ */
  --gray-50:  #f6f8f6;
  --gray-200: #F1F1F1;
  --gray-500: #707a6d;
  --gray-400: rgb(161, 161, 158); 

  --beige-100: #eadbdb;
  --beige-200: #e8e0e0;

  --black: #000000;
  --black-alpha-10: rgba(0, 0, 0, 0.1);
  --black-alpha-80: rgba(0, 0, 0, 0.8);
  --black-alpha-25: rgba(0, 0, 0, 0.25);
  --white: #FFFFFF;
  /* ============================================================
     PALETA — ROJOS
     ============================================================ */
  --red-100: #FEE2E2;
  --red-500: #DC2626;
  --red-800: #991B1B;

  --brown: #92400e
  --orange-soft:   #f0a47494;
  --orange-strong: #f0630bba;

  --purple-soft:   #b498f0a3;
  --purple-strong: #723ee1a3;

  --pink: "#ec4899"
  --pink-soft:     #cf7e9963;
  --pink-strong:   #ec3f7882;

  --blue-soft:     #3366cc42;
  --blue-strong:   #2c72ff6e;

  /* ============================================================
     GRADIENTES
     ============================================================ */
  --gradient-green-vivid: linear-gradient(to top, #46d841ff 0%, #18df82ff 100%);
  --gradient-green-soft:  linear-gradient(to top, #bfe4b8 0%, #b7e4d9 100%);
    /* ============================================================
     SHADOW
     ============================================================ */
  --shadow-sm: 0 1px 2px 0 var(--black-alpha-10);
  --shadow-md: 0 4px 6px -1px var(--black-alpha-10);
  --shadow-hard: 2px 2px 8px var(--black-alpha-80);
  --shadow-gray: 2px 2px 5px var(--gray-400);    /
  --shadow-xl: 0 25px 50px -12px var(--black-alpha-25);
  --shadow-green-glow: 0 8px 24px var(--green-deep-alpha-46); 
  --shadow-glow-soft: 0 0 10px var(--black-alpha-10);
  --shadow-lg: 
    0 20px 25px -5px var(--black-alpha-10),
    0 8px 10px -6px var(--black-alpha-10);

  /* ============================================================
     TOKENS SEMÁNTICOS — usar estos en tus componentes
     ============================================================ */

  --color-primary: var(--green-400);
  --color-primary-strong:  var(--green-500);
  --color-primary-muted:  rgba(25, 230, 94, 0.2);
  --teal-soft:rgba(82, 230, 173, 0.2)
  --color-text: var(--black);
  --color-text-muted:var(--green-text);
  --color-inverse:var(--white);

  --color-bg: var(--white);
  --color-bg-soft:var(--green-50);

  --color-danger: var(--red-500);
  --color-danger-strong: var(--red-800);
  --color-danger-soft: var(--red-100);

  --color-bg-paginator: var(--green-600);
}

  body {
    font-family: 'Lexend', sans-serif;
}

 `;

export const buttonVariants = {
  green: { bg: "var( --color-primary)", color: "var( --color-inverse)" },
  pink: { bg: "var(--pink)", color: "var( --color-inverse)" },
  pink_l: {
    bg: "var(--color-danger-soft)",
    color: "var(--color-danger-strong)",
  },
  brown: { bg: "var(--brown)", color: "var( --color-inverse)" },
  red: { bg: "var(--color-danger)", color: "var( --color-inverse)" },
};
export const buttonSizes = {
  small: {
    padding: "6px 12px",
    fontSize: "14px",
  },
  medium: {
    padding: "10px 18px",
    fontSize: "16px",
  },
  large: {
    padding: "14px 24px",
    fontSize: "18px",
  },
};
