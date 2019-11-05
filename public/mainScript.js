cart = document.querySelector('.icon');
kart= document.querySelector('.kart');
cart.addEventListener('click', handleClick);

function handleClick (event) { 
    console.log("siwenas");
    var midiv = document.createElement("div");
    midiv.setAttribute("class","cartActive");
    midiv.innerHTML = "<p>Este es el contenido de mi div</p>";
    kart.appendChild(midiv);
  }