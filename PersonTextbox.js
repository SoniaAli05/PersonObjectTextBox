function submit(){
    let a = document.getElementById("text1").value;
	let b = document.getElementById("num1").value;
    let c = document.getElementById("text2").value;


let person = {
	name : a,
	age : b,
	occupation : c
	};
	console.log(person);
	document.getElementById("output").innerHTML = "Name: " + person.name 
	+ ", Age: " + person.age 
	+ ", Occupation: " + person.occupation;
	
}