module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_normalizing.scss";
          `
      }
    }
  }
}
