module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_data/assets/style.css');
  eleventyConfig.addPassthroughCopy('node_modules/bootstrap/dist'); 
  eleventyConfig.addPassthroughCopy('src/_data/pictures'); 
  return {
      dir: {
        input: "src"
      }
    };
  };