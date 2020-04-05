/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  variants: {
    borderStyle: ["responsive", "hover", "focus"]
  },
  plugins: []
};
