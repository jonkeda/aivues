module.exports = function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

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

  // URL filter (no pathPrefix needed with custom domain)
  eleventyConfig.addFilter("url", function (url) {
    return url;
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/og-image.svg");
  eleventyConfig.addPassthroughCopy({ "src/sw.js": "sw.js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Minify CSS and JS in production
  if (isProduction) {
    const CleanCSS = require("clean-css");
    const { minify: terserMinify } = require("terser");
    const fs = require("fs");
    const path = require("path");

    eleventyConfig.on("eleventy.after", async function () {
      const outDir = "_site";

      // Minify CSS files
      const cssDir = path.join(outDir, "css");
      if (fs.existsSync(cssDir)) {
        for (const file of fs.readdirSync(cssDir)) {
          if (file.endsWith(".css")) {
            const filePath = path.join(cssDir, file);
            const input = fs.readFileSync(filePath, "utf8");
            const output = new CleanCSS({}).minify(input);
            if (output.styles) fs.writeFileSync(filePath, output.styles);
          }
        }
      }

      // Minify JS files
      const jsDir = path.join(outDir, "js");
      if (fs.existsSync(jsDir)) {
        for (const file of fs.readdirSync(jsDir)) {
          if (file.endsWith(".js")) {
            const filePath = path.join(jsDir, file);
            const input = fs.readFileSync(filePath, "utf8");
            const output = await terserMinify(input);
            if (output.code) fs.writeFileSync(filePath, output.code);
          }
        }
      }

      // Minify service worker
      const swPath = path.join(outDir, "sw.js");
      if (fs.existsSync(swPath)) {
        const input = fs.readFileSync(swPath, "utf8");
        const output = await terserMinify(input);
        if (output.code) fs.writeFileSync(swPath, output.code);
      }
    });
  }

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
    pathPrefix: "/",
  };
};
