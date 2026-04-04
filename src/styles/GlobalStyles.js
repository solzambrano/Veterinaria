import { createGlobalStyle } from 'styled-components'


export const GlobalStyles=createGlobalStyle`
:root{
    --color-Green-secondary:#328741;
    --color-Black:#00000;
    --color-Ligth: #f6f8f6;
    --color-Green-s: #19e65e;
    --color-Terra: #f4f3f4;
    --color-Gray: #707a6d;
    --color-Green-fondo:#e6f4e6;
    --font:'Lexend'
}
     body {
        font-family: 'Lexend', sans-serif;
    }

 `

    export const buttonVariants = {
  verde:  { bg: "var(--color-Green-s)", color: "white" },
  rosa:   { bg: "#ec4899", color: "white" },
  marron: { bg: "#92400e", color: "white" },
  negro:  { bg: "#111111", color: "white" },
}
