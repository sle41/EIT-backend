const Product = require ('./../schemas/product.schema');


const getAllProducts = (req, res) => {

    Product.find().then(function(productos){

        res.status(200).send({msg:'Productos obtenidos correctamente', productos: productos});

    }).catch((error)=> {
        console.log(error)
    })

}





function addProduct (req, res){
    const product = new Product(req.body);
    
    product.save().then(function() {

        console.log(`Termino el guardado del producto`)
        return res.status(200).send({
            msg: `Producto guardado correctamente`, product
        })

    }).catch(error => {

        console.log(error)
        res.status(500).send(`El producto no se pudo guardar`)

    })



}









function deleteProduct(req, res) {
    
    const id = req.params.id

    Product.findByIdAndDelete(id).then((deleted) => {
        if (!deleted) {
            return res.status(404).send(`No se encontro el producto a borrar`)
        }

        return res.status(200).send({
            msg: `Producto borrado correctamente`,
            deleted
        })  

        }).catch(error => {
        
            console.log(error);
            return res.status(500).send({
                msg: `Error al borrar el producto`
        })
    })

    console.log(req.params)
    res.status(200).send("Borrado correctamente")


}

module.exports = {
    getAllProducts,
    deleteProduct,
    addProduct
}