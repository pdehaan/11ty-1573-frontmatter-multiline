module.exports = eleventyConfig => {
  const md = require("markdown-it")({
    html: true,
    typographer: true,
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("markdown", content => md.render(content));
  eleventyConfig.addPairedShortcode("markdown", content => md.render(content));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
