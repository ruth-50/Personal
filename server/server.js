const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/',  (req, res)=> {
  let personal=[
    {
      nombre: 'Elias',
      apellido: 'saavedra',
      profecion: 'podologo',
      edad: 60,
      jobi: 'coleccionar muñecas barbi'
    }
  ]

res.send(personal)
res.end()
})
 
app.listen(port, ()=>{
    console.log(`Escuchando el puerto:${port}`);
})