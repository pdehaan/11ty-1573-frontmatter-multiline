const md = require("markdown-it")({
  html: true
});

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("markdown", content => md.render(content));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
