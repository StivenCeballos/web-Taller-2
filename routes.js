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




}

module.exports=createRoutes;