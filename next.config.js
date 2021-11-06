const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = {
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "vuejobs.com"]
  }
}