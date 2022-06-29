const { timeStamp } = require('console');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const port = 3000
const MONGO_DB_PW ="admin"

app.listen(port, () => {
  console.log(`Aplicacion escuchando por puerto ${port}`)
})

mongoose.connect(`mongodb+srv://adminfacundo:${MONGO_DB_PW}@cluster0.vnhrs.mongodb.net/?retryWrites=true&w=majority`
).then(result => console.log("Conexion Exitosa a la BBDD"))
 .catch(err => console.log(err))
//definir el tipo de datos q va a ver mongo DB 
const productSchema = mongoose.Schema({
  name: String, 
  price: Number,
},
{timeStamp: true}
)

const Product = mongoose.model('Product', productSchema)

app.use(express.static(path.join(__dirname, 'public')));

//otro midelware para darle un tipo de dato a lo q se envia
app.use(express.json())
app.post('/api/v1/products', (req,resp) =>{

  const newProduct= new Product({
    name:req.body.name,
    price:req.body.price,
  })

  newProduct.save()

  resp.status(201).json({ok: true})
})