genre = document.querySelector('.selectGenre');
sorder = document.querySelector('.selectOrder');
price = document.querySelector('.selectFilter');

function solicitud(order){

  fetch('/api/products'+order)
  .then(function(response){
    return response.json();
  })
  .then(info);
}

solicitud("");

genre.addEventListener('change',function(){

  solicitud("?genre="+genre.value);
});





 