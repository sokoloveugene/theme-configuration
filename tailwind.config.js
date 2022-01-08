const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "contrast-lowest": withOpacityValue("--color-contrast-lowest"),
      "contrast-lower": withOpacityValue("--color-contrast-lower"),
      "contrast-low": withOpacityValue("--color-contrast-low"),
      "contrast-medium": withOpacityValue("--color-contrast-medium"),
      "contrast-high": withOpacityValue("--color-contrast-high"),
      "contrast-higher": withOpacityValue("--color-contrast-higher"),
    },
  },
  plugins: [],
};
