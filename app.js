function calculate() {
	event.preventDefault();

	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;

	let genderSelect = document.getElementById("gender-select");
	let gender = genderSelect.value;
	let age = document.getElementById("age").value;
	let height = document.getElementById("heightSlider").value * 2.54; //cm
	let weight = document.getElementById("weight").value * 0.453592; //kg
	let genderNumber;

	if (gender == "male") {
		genderNumber = 5;
	} else {
		genderNumber = -161;
	}
	console.log(
		`first name: ${firstName}, last name ${lastName}, gender: ${gender}, genderNumber: ${genderNumber}, age: ${age}, height: ${height}cm, weight: ${weight}kg`
	);

	let calculation = Math.round(
		10 * weight + 6.25 * height - 5 * age + genderNumber
	);

	document.getElementById("total").innerHTML = `BMR: ${calculation} kcal/day`;
}

function output() {
	let output = document.getElementById("heightSlider").value; //total inches

	let integer = Math.floor(output / 12); //ft
	let remainder = Math.round(((output / 12) % 1) * 12); //in

	let currentHeight = remainder
		? `${integer}ft ${remainder}in`
		: `${integer}ft`;

	document.getElementById("selectedHeight").innerHTML = currentHeight;
}
