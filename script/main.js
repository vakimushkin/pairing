function playOff() {

let personsStr = document.getElementById("persons").value;

let persons = personsStr.split(' ');

console.log(persons);

document.getElementById("list-playoff").innerHTML = "";

if  ((Math.log(persons.length)/Math.log(2)) % 1 !== 0){
    document.getElementById("list-playoff").innerHTML="Число участников должно быть степенью 2-ки";
    return;
}

let half = persons.length/2;

for(let i=0; i<half; i++){
    let index1 = Math.floor(Math.random() * persons.length);
    console.log(persons);
    console.log(index1);
    let person1 = persons[index1];
    persons.splice(index1, 1);
    let index2 = Math.floor(Math.random() * persons.length);
    console.log(persons);
    console.log(index2);
    let person2 = persons[index2];
    persons.splice(index2, 1);
    document.getElementById("list-playoff").innerHTML+= "<li>" + person1 + " - " + person2 + "</li>";
}

}


function circle() {

let personsStr = document.getElementById("persons").value;

let persons = personsStr.split(' ');

console.log(persons);

document.getElementById("list-circle").innerHTML = "";

let pairs = [];

for(let i = 0; i<persons.length-1; i++){
	for(let j=i+1; j<persons.length; j++){
		pairs.push([persons[i], persons[j]]);
	}
}

console.log(pairs);

pairs.sort(() => Math.random() - 0.5);


for(let i = 0; i<pairs.length; i++){
    pairs[i].sort(() => Math.random() - 0.5);
    document.getElementById("list-circle").innerHTML+= "<li>" + pairs[i][0] + " - " + pairs[i][1] + "</li>";
}

}


