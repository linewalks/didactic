const express = require("express")
const program = require("commander")
const fs = require("fs")

module.exports = {
  runServer: () => {
    const app = express()
    program
      .version("0.0.1")
      .option("-p, --port <n>", "Specify port")
      .parse(process.argv)
    app.get("/", function(req, res) {
      res.send("Hello World")
    })
    app.listen(program.port, () =>
      console.log(`didactic running on port ${program.port}!`)
    )
  }
}
