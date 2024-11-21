module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_data/assets/style.css');
  eleventyConfig.addPassthroughCopy('node_modules/bootstrap/dist'); 
  eleventyConfig.addPassthroughCopy('src/_data/pictures'); 
  eleventyConfig.addPassthroughCopy('src/_data/scripts/themeSwitcher.js'); 
  eleventyConfig.addPassthroughCopy('src/_data/assets/Poster.pdf');
  return {
      dir: {
        input: "src"
      }
    };
  };