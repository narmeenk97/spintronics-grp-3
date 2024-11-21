module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_data/assets/style.css');
  eleventyConfig.addPassthroughCopy('node_modules/bootstrap/dist'); 
  eleventyConfig.addPassthroughCopy('src/_data/pictures'); 
  eleventyConfig.addPassthroughCopy('src/_data/scripts/themeSwitcher.js'); 
  eleventyConfig.addPassthroughCopy('src/_data/assets/Poster.pdf');
  eleventyConfig.addPassthroughCopy('src/_data/assets/Bibliography.pdf');
  eleventyConfig.addPassthroughCopy('src/_data/assets/Library List of Resources.pdf');
  return {
      dir: {
        input: "src"
      }
    };
  };