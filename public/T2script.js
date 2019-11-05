selector = document.querySelector('.selectOrder');


  
selector.addEventListener('change',
  function(){
    var selectedOption = this.options[selector.selectedIndex];
    if(selectedOption.value==2){
        numbers.sort(function(a, b) {
            return a - b;
          });
    }
  });


 