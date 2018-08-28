const express = require("express")
const cors = require("cors")

const { router, port } = require("./router")

module.exports = {
  runServer: () => {
    const app = express()
    // Enable cors
    app.use(cors())
    app.use(router)
    app.listen(port, () => console.log(`didactic running on port ${port}!`))
  }
}
