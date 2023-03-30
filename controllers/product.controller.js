const Product = require ('./../schemas/product.schema')


const getAllProducts = (req, res) => {

    Product.find().then(function(productos){

        res.status(200).send({msg:'Productos obtenidos correctamente', productos: productos});

    }).catch((error)=> {
        console.log(error)
    })

    

}

function deleteProduct(req, res) {
    res.status(200).send("Borrado correctamente")
}

module.exports = {
    getAllProducts,
    deleteProduct
}