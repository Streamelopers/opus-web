module.exports = {
  "*.{js,ts,tsx}": "eslint --cache --fix",
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit'
}
