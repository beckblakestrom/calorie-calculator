function calculate() {
	event.preventDefault();

	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;

	let genderSelect = document.getElementById("gender-select");
	let gender = genderSelect.value;
	let age = document.getElementById("age").value;
	let height = document.getElementById("height").value * 2.54; //cm
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

	document.getElementById("total").innerHTML = `${calculation} calories`;
}
