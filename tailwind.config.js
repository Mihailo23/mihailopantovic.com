/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "0"
      }
    },
    screens: {
      sm: "640px",
      md: "768px"
    },
    extend: {
      colors: {
        brand: "#2b6cb0"
      }
    }
  },
  variants: {
    borderStyle: ["responsive", "hover", "focus"]
  },
  plugins: []
};
