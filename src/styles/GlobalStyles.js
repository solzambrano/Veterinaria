import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --color-Green-s: #19e65e;
    --color-Green-secondary:#328741;
    --color-Green-muted:#065106;
    --color-Green-light:#6dec6d;
    --color-Green-fondo:#e6f4e6;
    --color-Green-bright:#19E65E;
    --color-Green-dark:#116D2B;
    --color-Green-paginator: #4c835d;
    --color-pastel-Green: #ECF7E7;
    --color-Green-Primary:rgba(25, 230, 94, 0.2);
    --color-Black:#000000;
    --color-Ligth: #f6f8f6;
    --color-Terra: #f4f3f4;
    --color-Gray: #707a6d;
    --color-Gray-l:#e5e7eb;
    --color-White:#FFFFFF;
    --color-Red-d:#991B1B;
    --color-Red-l:#FEE2E2;
    --color-Red-primary:#DC2626;
}
  body {
    font-family: 'Lexend', sans-serif;
}

 `;

export const buttonVariants = {
  green: { bg: "var(--color-Green-s)", color: "var(--color-White)" },
  pink: { bg: "#ec4899", color: "var(--color-White)" },
  pink_l: { bg: "#fee2e2", color: "#991b1b" },
  brown: { bg: "#92400e", color: "var(--color-White)" },
  black: { bg: "#111111", color: "var(--color-White)" },
  red: { bg: "#f21919", color: "var(--color-White)" },
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
