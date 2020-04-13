'use strict'

function submitForm() {
    const input = document.getElementById("playerform");
    let names = input[0].value + "," + input[1].value;
    console.log(names);

    fetchPlayers(names);
}

async function fetchPlayers(names) {
    const response = await fetch(`/api/players/${names}`);
    const players = await response.json();
    changeText(players);
}

function changeText(data) {
    console.log(data);
    let data1 = data.players[0];
    let data2 = data.players[1];
    var fname1 = data1.first_name;
    var lname1 = data1.last_name;
    var fname2 = data2.first_name;
    var lname2 = data2.last_name;


    document.getElementById("name1").innerHTML=(fname1 + " " + lname1);
    document.getElementById("birthdate1").innerHTML=(data1.birthdate);
    document.getElementById("birthplace1").innerHTML=(data1.birthplace);
    document.getElementById("height1").innerHTML=(data1.height_cm);
    document.getElementById("weight1").innerHTML=(data1.weight_kg);
    document.getElementById("handedness1").innerHTML=(data1.handedness);
    document.getElementById("backhand1").innerHTML=(data1.backhand);
    document.getElementById("turned_pro1").innerHTML=(data1.turned_pro);
    document.getElementById("flag1").src=(`http://www.tennisabstract.com/photos/${fname1.toLowerCase()}_${lname1.toLowerCase()}-sirobi.jpg`);
    
    document.getElementById("name2").innerHTML=(fname2+ " " + lname2);
    document.getElementById("birthdate2").innerHTML=(data2.birthdate);
    document.getElementById("birthplace2").innerHTML=(data2.birthplace);
    document.getElementById("height2").innerHTML=(data2.height_cm);
    document.getElementById("weight2").innerHTML=(data2.weight_kg);
    document.getElementById("handedness2").innerHTML=(data2.handedness);
    document.getElementById("backhand2").innerHTML=(data2.backhand);
    document.getElementById("turned_pro2").innerHTML=(data2.turned_pro);
    document.getElementById("flag2").src=(`http://www.tennisabstract.com/photos/${fname2.toLowerCase()}_${lname2.toLowerCase()}-sirobi.jpg`);
}





