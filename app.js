function calculate() {
	let genderSelect = document.getElementById("gender-select");
	let gender = genderSelect.value;
	let age = document.getElementById("age").value;
	let height = document.getElementById("height").value;
	let weight = document.getElementById("weight").value;
	event.preventDefault();
	console.log(
		`gender: ${gender}, age: ${age}, height: ${height}, weight: ${weight}`
	);
}
