'use strict'

function submitForm() {
    const input = document.getElementById("playerform");
    let names = input[0].value + "," + input[1].value;
    console.log(names);
    fetch(`/api/players/${names}`)
    .then(response => response.json())
    .then(data => changeText(data));
}

function changeText(data) {
    console.log(data);
    const data1 = data.players[0];
    const data2 = data.players[1];
    const fname = data1.first_name;
    const lname = data1.last_name; 
    console.log(data.birthdate);
    document.getElementById("name1").innerHTML=(fname + " " + lname);
    document.getElementById("birthdate1").innerHTML=(data1.birthdate);
    document.getElementById("birthplace1").innerHTML=(data1.birthplace);
    document.getElementById("height1").innerHTML=(data1.height_cm);
    document.getElementById("weight1").innerHTML=(data1.weight_kg);
    document.getElementById("handedness1").innerHTML=(data1.handedness);
    document.getElementById("backhand1").innerHTML=(data1.backhand);
    document.getElementById("turned_pro1").innerHTML=(data1.turned_pro);
   
    document.getElementById("birthdate2").innerHTML=(data2.birthdate);
    document.getElementById("birthplace2").innerHTML=(data2.birthplace);
    document.getElementById("height2").innerHTML=(data2.height_cm);
    document.getElementById("weight2").innerHTML=(data2.weight_kg);
    document.getElementById("handedness2").innerHTML=(data2.handedness);
    document.getElementById("backhand2").innerHTML=(data2.backhand);
    document.getElementById("turned_pro2").innerHTML=(data2.turned_pro);
}




