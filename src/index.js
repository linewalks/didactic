const express = require("express")
const { router, port } = require("./router")

module.exports = {
  runServer: () => {
    const app = express()
    app.use(router)
    app.listen(port, () => console.log(`didactic running on port ${port}!`))
  }
}
