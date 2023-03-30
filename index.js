const app = require('./app')
const { connect } = require('http2');
const port = 8453;
const dbURL = 'mongodb+srv://rickypaez:46295865a@ricky41.qerb1lt.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require('mongoose');

mongoose.connect(dbURL).then( function() {
                    console.log(' \x1b[35m Conexión a la MONGODB satisfactoria \x1b[37m')

                        //PONER EN MARCHA MI SERVIDOR EXPRESS
                        app.listen(port, () => {
                                console.log(` \x1b[36m Servidor funcionando en puerto ${port}  \x1b[37m`);
                        } )

                        }).catch(function(error){
                            console.log(error)

    })//tarda en aparecer porque se conecta con mongo




