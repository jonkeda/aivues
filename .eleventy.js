module.exports = function (eleventyConfig) {
  // Change Nunjucks comment delimiters so {#id} in markdown isn't treated as a comment
  eleventyConfig.setNunjucksEnvironmentOptions({
    tags: {
      commentStart: "<#",
      commentEnd: "#>",
    },
  });

  // Configure markdown-it with attrs plugin for heading IDs like {#my-id}
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const md = markdownIt({ html: true, linkify: true });
  md.use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch targets
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  // Collection: English pages (for nav)
  eleventyConfig.addCollection("pages_en", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/en/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // Collection: Dutch pages (for nav)
  eleventyConfig.addCollection("pages_nl", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/nl/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
