import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("mvp.css");
  eleventyConfig.addPassthroughCopy({"public": "/"});
  eleventyConfig.addPassthroughCopy("css");
  
  eleventyConfig.addPlugin(pluginRss);
  
  eleventyConfig.ignores.add("index.html");
  
  eleventyConfig.addFilter("dateToRfc822", (dateObj) => {
    return new Date(dateObj).toUTCString();
  });

  eleventyConfig.addFilter("jsonify", (value) => {
    return JSON.stringify(value);
  });

  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });
  
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("blog/*.md").sort((a, b) => b.date - a.date)
  );
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
