const express = require('express');
const app = express();
const port = 8453;

app.get('/', (request, response) =>{
    response.send({
        msg:"Bienvenidos a mi servidos express",
        ok:true
    })
})

app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}`);
} )