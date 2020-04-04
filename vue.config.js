module.exports = {
  "transpileDependencies": [
    "vuex-module-decorators",
    "vuetify"
  ],
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": "@import \"~@/scss/variables.scss\";"
      }
    }
  }
}