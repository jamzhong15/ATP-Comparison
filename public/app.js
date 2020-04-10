'use strict'

function submitForm() {
    const input = document.getElementById("playerform");
    let name = input[0].value;
    fetch(`/api/players/${name}`)
    .then(response => response.json())
    .then(data => changeText(data));
}

function changeText(data) {
    console.log(data);
    document.getElementById("playerstat").innerHTML=(JSON.stringify(data));
}




