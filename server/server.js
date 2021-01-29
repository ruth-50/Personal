const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/',  (req, res)=> {
  let personal=[
    {
      nombre: 'Brat',
      apellido: 'Pit',
      profecion: 'podologo',
      edad: 60,
    }
  ]

res.send(personal)
})
 
app.listen(port, ()=>{
    console.log(`Escuchando el puerto:${port}`);
})