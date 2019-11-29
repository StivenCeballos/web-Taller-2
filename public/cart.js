
var addCart= document.querySelector('.comprar');
console.log(addCart.getAttribute("data-id"));

var _id = addCart.getAttribute("data-id");


addCart.addEventListener('click', function(){
    
   

    var promise = fetch('/api/cartItems'+_id,{
        method :'POST',
        
    });

    promise.then((response) =>{
        return response.json();
    }).then(info =>{
        console.log(info);
    });
});