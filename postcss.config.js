const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    purgecss, // Sử dụng purgecss như một phần tử trong mảng plugins
  ],
};
