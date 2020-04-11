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
    const fname = data.first_name;
    const lname = data.last_name; 
    console.log(data.birthdate);
    document.getElementById("name").innerHTML=(fname + " " + lname);
    document.getElementById("birthdate").innerHTML=(data.birthdate);
    document.getElementById("birthplace").innerHTML=(data.birthplace);
    document.getElementById("height").innerHTML=(data.height_cm);
    document.getElementById("weight").innerHTML=(data.weight_kg);
    document.getElementById("handedness").innerHTML=(data.handedness);
    document.getElementById("backhand").innerHTML=(data.backhand);
    document.getElementById("turned_pro").innerHTML=(data.turned_pro);
}




