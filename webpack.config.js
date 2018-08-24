const path = require("path")
const fs = require("fs")

const nodeModules = {}
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod
  })

module.exports = {
  // mode: "production",
  mode: "development",
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  externals: nodeModules,
  node: {
    __dirname: false
  }
}
