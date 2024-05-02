const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")

// Cargar el diccionario desde un archivo JSON
const dictionaryPath = path.join(__dirname, "../src/es.json")
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf8")).words

// Importar la función getWordsFromBoard aquí o definirla en un módulo aparte
const getWordsFromBoard = require("../src/boggleSolver") // Asumiendo que la función está en utils/boggleSolver.js

// Ruta que recibe un tablero y devuelve las palabras encontradas
router.post("/find-words", (req, res) => {
  const { board } = req.body

  if (!board) {

    return res.status(400).json({ error: "No board provided" })
  }
  const results = getWordsFromBoard(board, dictionary)
  console.log(results)
  res.json({ wordsFound: results })
})   

module.exports = router
