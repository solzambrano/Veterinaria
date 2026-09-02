export const sectionVariants = {
  green: {
    background: "var(--color-Green-secondary)",
    color: "var(--color-Green-s)",
  },

  pastel: {
    background: "var(--color-pastel-Green)",
    color: "var(--color-Black)",
  },

  brown: {
    background: "var(--color-Red-l)",
    color: "var(--color-Red-d)",
    animation: true,
    border: "1px solid pink",
  },
  urgent: {
    background: "var(--color-Red-primary)",
    color: "var(--color-White)",
    border_r: "45px",
    transform: "rotate(-15deg)",
    transition: "transform 0.3s ease",
    transform_hover: "rotate(15deg)",
  },
  info: {
    background: "var(--color-Green-s)",
    color: "var(--color-White)",
  },
  outline: {
    color: "var(--color-Black)",
    border: "var(--color-Gray-l)",
    shadow: `
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1)
    `,
  },
  secondary: {
    color: "var(--color-Green-muted)",
    border: "var(--color-Green-bright)",
  },
  default: {
    color: "var(--color-Black)",
    background: "var(--color-White)",
    border: "#E5E7EB",
    shadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1);",
  },
};
