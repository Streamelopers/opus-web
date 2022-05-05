const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withOptimizedImages({
    images: {
      disableStaticImages: true,
    },
  })
);
