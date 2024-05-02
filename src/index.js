const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

const boggleRuta  = require("./boggleRuta")

// Usar las rutas para el juego de Boggle
app.use("/api/boggle", boggleRuta)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
