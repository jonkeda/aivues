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

  // URL filter that respects pathPrefix
  const pathPrefix = "/aivues";
  eleventyConfig.addFilter("url", function (url) {
    if (url && url.startsWith("/")) {
      return pathPrefix + url;
    }
    return url;
  });

  // Transform: rewrite absolute internal links in output HTML
  eleventyConfig.addTransform("pathPrefix", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      // Rewrite href="/en/...", href="/nl/...", href="/css/...", href="/js/..."
      return content.replace(/(href|src)="\/(?!\/)/g, '$1="' + pathPrefix + '/');
    }
    return content;
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Translation URL filter: look up the other language's URL from navigation.json
  eleventyConfig.addFilter("translationUrl", function (pageUrl, navigation, lang) {
    const otherLang = lang === "en" ? "nl" : "en";
    const key = "url_" + lang;
    const targetKey = "url_" + otherLang;
    for (const item of navigation.items) {
      if (item[key] === pageUrl) return item[targetKey];
    }
    return pageUrl.replace("/" + lang + "/", "/" + otherLang + "/");
  });

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
    pathPrefix: "/aivues/",
  };
};
