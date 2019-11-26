
var addCart= document.querySelector('.comprar');
console.log(addCart);

addCart.addEventListener('click', function(){

    var data = new URLSearchParams();
    data.append("idProduct", addCart.getAttribute("data-id"));

    var promise = fetch('/api/cartItems',{
        method :'POST',
        body: data
    });

    promise.then((raw) =>{
        return raw.json();
    }).then(info =>{
    });
    });