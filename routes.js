const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

function createRoutes(app,db){
    app.get('/', (request, response)=>{
        response.sendFile(__dirname+'/public/splashpage/index.html');
    });
    
    app.get('/tienda', (request, response)=>{
        
        var products = db.collection('products').find({})
            .toArray((error, result) => {
                assert.equal(null,error);

                var context = {
                    products: result
                };

                response.render('products',context);
            });
    }
    );

    app.get('/detalle/:id', (request, response)=>{
        var id = new ObjectID(request.params.id);
        var products = db.collection('products').find({'_id':id})
            .toArray((error, result) => {
                assert.equal(null,error);

                var context = {
                    products: result
                };

                response.render('details',context);
            });
    }
    );

    app.post('/api/cartItems', (request, response)=>{

        var carrito = db.collection('cart').find({})
        .toArray((error, result) => {
            assert.equal(null,error);
            var listaObj = result[0]; 
            listaObj.products.push(request.body.idProduct);

        //     carrito.updateOne({ _id: new ObjectID(listaObj.id)},
        //     {
        //         $set: { products: listaObj.products}
        //     }
        // );

        response.send({

            message: 'ok',
            listaObj

        });
           
        });
});



    }


module.exports=createRoutes;