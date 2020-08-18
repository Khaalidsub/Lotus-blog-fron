module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
    //@ts-ignore
    require("tailwindcss")("./tailwind.config.js"),
  ],
};
