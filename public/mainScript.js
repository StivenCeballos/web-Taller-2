cart = document.querySelector('.icon');
kart= document.querySelector('.kart');
active=true;

if(active){
  cart.addEventListener('click', handleClick);
}

function handleClick (event) { 
    active=false;
    var midiv = document.createElement("div");
    midiv.setAttribute("class","cartActive");
    midiv.innerHTML = "<p>Hola</p>";
    kart.appendChild(midiv);
  }