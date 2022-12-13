const express = require('express')
const { default: router } = require('./routes/routes')
const app = express()
const port = 3000

app.use("/api",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})