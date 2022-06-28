const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use("public", express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Aplicacion escuchando por puerto ${port}`)
})