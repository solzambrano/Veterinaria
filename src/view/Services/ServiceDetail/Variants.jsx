export const headerVariants = {
  urgent: {
    background: "var(--color-Red-l)",
    color: "var(--color-Red-d)",
    animation: true,
    size: "4.5rem",
    border: "1px solid pink",
  },
  health: {
    background: "rgba(25, 230, 94, 0.1)",
    color: "var(--color-Green-s)",
    size: "3.75rem",
  },
  holistic: {
    background: "rgb(25 230 94 / 10%)",
    color: "var(--color-Green-dark)",
    size: "3.75rem",
  },
};

export const buttonVariants = {
  urgent: {
    background: "var(--color-Red-primary)",
    color: "var(--color-White)",
    border: "45px",
    transform: "rotate(-15deg)",
    transition: "transform 0.3s ease",
    transform_hover: "rotate(15deg)",
  },
  info: {
    background: "var(--color-Green-s)",
    color: "var(--color-Black)",
    border: "0.75rem",
  },
  default: {
    color: "var(--color-Black)",
    background: "var(--color-White)",
    border: "#E5E7EB",
    weight: 500,
    size: "0.875rem",
    line: "1.25rem",
    shadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1);",
  },
  secondary: {
    color: "var(--color-Green-s)",
    border: "1px solid var(--color-Green-Primary)",
    weight: 700,
    line: "1.75rem",
    size: "1.125rem",
  },
  outline: {
    color: "var(--color-Black)",
    border: "var(--color-Gray-l)",
    shadow: `
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1)
    `,
  },
};
export const imageVariants = {
  urgent: {
    border: "4px solid var(--color-White)",
    shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  consultation: {
    transform: "rotate(5deg)",
    transition: "transform 0.3s ease",
    transform_hover: "rotate(-5deg)",
  },
  grooming: {
    background_border: "0.1px solid var(--color-Green-s)",
    background: "rgb(25 230 94 / 10%)",
    background_form: "rotate(5deg)",
    background_transit: "transform 0.3s ease",
    background_hover: "rotate(-5deg)",
  },
  vaccination: {},
  pastel: {
    background: "var(--color-pastel-Green)",
    color: "var(--color-Black)",
  },
};
export const additionalVariants = {
  default: {
    color: "var(--color-Black)",
    background: "var(--color-White)",
    border: "#E5E7EB",
    shadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  info: {
    color: "var(--color-Green-s)",
    background: "var(--color-White)",
    shadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
};
