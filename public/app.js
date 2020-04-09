'use strict'

function submitForm() {
    const input = document.getElementById("playerform");
    let name = input[0].value;
    fetch(`/api/players/${name}`)
        .then((response) => response.json())
        .then(function(data) {
            
        })
}




