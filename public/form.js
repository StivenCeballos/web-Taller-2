var formulary = document.querySelector(".options_form");

formulary.addEventListener('submit',function(event){
    event.preventDefault();
    var formInfo= new FormData(formulary);
        var data= new URLSearchParams(formInfo);
        console.log("hasta acá vamos bien");
        var promise = fetch('/api/formulary', {
            method : 'POST', 
            body : data
        });

        promise.then((raw) => {
            return raw.json();
        }).then((info) => {
            formulary.reset();
            console.log(info);
        });
    });