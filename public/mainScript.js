cart = document.querySelector('.icon');
kart= document.querySelector('.kart');
cart.addEventListener('click', handleClick);

function handleClick (event) { 
    console.log("siwenas");
    var midiv = document.createElement("div");
    midiv.setAttribute("class","cartActive");
    midiv.innerHTML = "<p>Hola</p>";
    kart.appendChild(midiv);
  }