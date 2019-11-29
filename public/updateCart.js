window.addEventListener('load', function(){
    
    var shopping_counter = document.querySelector('.shopping_counter');

    function updateCart(){
        fetch('/api/cartItems:_id')
            .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(data) {
                    console.log(data); 
                    shopping_counter.innerText = data.products.length;
                });
    }

    updateCart();
    this.window.updateCart = updateCart;


});