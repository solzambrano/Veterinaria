import { createGlobalStyle } from 'styled-components'


export const GlobalStyles=createGlobalStyle`
:root{
    --color-Green-s: #19e65e;
    --color-Green-secondary:#328741;
    --color-Green-muted:#065106;
    --color-Green-light:#6dec6d;
    --color-Black:#000000;
    --color-Ligth: #f6f8f6;
    --color-Terra: #f4f3f4;
    --color-Gray: #707a6d;
    --color-Green-fondo:#e6f4e6;
    --color-White:#FFFFFF;
    --font:'Lexend'
}
     p {
        font-family: 'Lexend', sans-serif;
    }

 `

    export const buttonVariants = {
  verde:  { bg: "var(--color-Green-s)", color: "white" },
  rosa:   { bg: "#ec4899", color: "white" },
  marron: { bg: "#92400e", color: "white" },
  negro:  { bg: "#111111", color: "white" },
}
