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



    app.post('/api/cartItems:_id', (request, response)=>{
            
        var cart = db.collection('cart');
        cart.find({}).toArray((err, result) => {
            assert.equal(null,err);

            var listaObj = result[0]; 
            listaObj.products.push(request.params._id);
            console.log(request.params._id);
            
            cart.updateOne({ _id: new ObjectID(listaObj._id)},
            {
                $set: { products: listaObj.products}
            }
         );
        response.send({

            message: 'ok',
            listaObj

        });
           
        });
});

app.get('/cartItems', (request, response)=>{
 
    var products = db.collection('products');
    var cartproducts = db.collection('cart');
        cartproducts.find({})
        .toArray((err,result)=>{
            
            assert.equal(null,err);

            var idsCart=[];
            
            result[0].products.forEach(id => {
                idsCart.push(new ObjectID(id));
            });

            products.find({_id:{$in: idsCart}})
            .toArray((err,resultProducts) =>{
                assert.equal(null,err);
                var context = {
                    products:resultProducts,
                };
                response.render('cart',context);
            });
        });
           
        
}
);

        app.get('api/tienda', (request, response)=>{
                
            var products = db.collection('products');
                if(request.query.genre == 'action'){
                    products.find({ genre: {$in: 'Acción' }})
                    .toArray((err,result) => {
                        assert.equal(null,err);
                        response.send(result);
                    
                    });
                }
            
              
            }

        
        );



    }

module.exports=createRoutes;