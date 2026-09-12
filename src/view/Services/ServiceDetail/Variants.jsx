export const headerVariants = {
  urgent: {
    background: "var( --color-danger-soft)",
    color: "var( --color-danger-strong)",
    animation: true,
    size: "4.5rem",
    border: "1px solid pink",
  },
  health: {
    background: "var(--color-primary-muted-10)",
    color: "var( --color-primary)",
    size: "3.75rem",
  },
  holistic: {
    background: "var(--color-primary-muted-10)",
    color: "var( --green-700)",
    size: "3.75rem",
  },
  prevention: {
    size: "4.5rem",
    background: "var(--color-primary-muted-10)",
    color: "var( --color-primary)",
  },
  special: {
    background: "var( --color-bg-soft)",
    color: "var( --color-text-muted)",
    size: "3.75rem",
  },
  sanity: {
    background: "var( --color-bg-soft)",
    size: "3.75rem",
  },
};

export const buttonVariants = {
  urgent: {
    background: "var( --color-danger)",
    color: "var( --color-inverse)",
    borderRadius: "45px",
    transform: "rotate(-15deg)",
    transition: "transform 0.3s ease",
    transform_hover: "rotate(15deg)",
    weight: 500,
  },
  info: {
    background: "var(--color-primary)",
    color: "var(--color-text)",
    borderRadius: "0.75rem",
  },
  default: {
    color: "var(--color-text)",
    background: "var(--color-inverse)",
    border: "1px solid var(--gray-200)",
    weight: 500,
    borderRadius: "0.75rem",
    size: "0.875rem",
    line: "1.25rem",
    shadow: "var(--shadow-lg)",
  },
  secondary: {
    color: "var(--color-primary)",
    border: "1px solid var(--color-primary-muted)",
    weight: 700,
    line: "1.75rem",
    size: "1.125rem",
  },
  outline: {
    color: "var(--color-text)",
    border: " 1px solid var(--gray-200)",
    weight: 700,
    hover: "var(--gray-200)",
    shadow: "var(--shadow-lg)",
  },
  secondaryGray: {
    background: "var( --color-inverse)",
    color: "var( --color-text)",
    border: "1px solid var( --gray-200)",
    weight: 700,
    shadow: "var(--shadow-lg)",
    borderRadius: "0.75rem",
  },
  analisis: {
    weight: 700,
    background: "var(--green-dark-alt)",
    color: "var( --color-inverse)",
    position: "relative",
    hover: "var( --color-primary)",
    gap: "0.5rem",
    borderRadius: "45px",
  },
};
export const imageVariants = {
  urgent: {
    border: "4px solid var( --color-inverse)",
    shadow: "var(--shadow-xl)",
  },
  consultation: {
    transform: "rotate(5deg)",
    transition: "transform 1s ease",
    transform_hover: "rotate(-5deg)",
  },
  grooming: {
    background_border: "0.1px solid var( --color-primary)",
    background: "var(--color-primary-muted-10)",
    background_form: "rotate(5deg)",
    background_transit: "transform 1.2s ease",
    background_hover: "rotate(-5deg)",
  },
  vaccination: {
    transform: "rotate(2deg)",
    transition: "transform 1s ease",
    transform_hover: "rotate(-5deg)",
  },
  lab: {
    background: "var(--color-primary-muted-10)",
    background_form: "rotate(5deg)",
  },
  cirugy: {
    border: "6px solid var( --color-inverse)",
  },
};
export const additionalVariants = {
  default: {
    color: "var( --color-text)",
    background: "var( --color-inverse)",
    border: "var(--gray-200)",
    shadow: "var(--shadow-lg)",
  },
  info: {
    color: "var( --color-primary)",
    background: "var( --color-inverse)",
    shadow: "var(--shadow-lg)",
  },
};
