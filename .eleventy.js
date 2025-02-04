module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats(["njk", "md"]);
    eleventyConfig.addPassthroughCopy("src/assets");
    const eleventyPluginSafeExternalLinks = require("eleventy-plugin-safe-external-links");

    module.exports = function(eleventyConfig) {
        eleventyConfig.addPlugin(eleventyPluginSafeExternalLinks, {
            pattern: "https://*", // Si vous souhaitez filtrer les liens externes pour les rendre sûrs
            noopener: true,
            noreferrer: true
        });
        eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data: "_data"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
}
