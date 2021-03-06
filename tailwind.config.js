// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        "fade-in-fwd": "fade-in-fwd 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s   both"
    },
    keyframes: {
        "fade-in-fwd": {
            "0%": {
                transform: "translateZ(-80px)",
                opacity: "0"
            },
            to: {
                transform: "translateZ(0)",
                opacity: "1"
            }
        }
      },
    }
  },
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
};
