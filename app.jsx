function App() {
	const [gender, setGender] = React.useState(true);
	const [age, setAge] = React.useState(0);
	const [height, setHeight] = React.useState(0);
	const [weight, setWeight] = React.useState(0);

	const [calories, setCalories] = React.useState(0);
	let total = `${calories} calories per day`;

	const calculate = () => {
		event.preventDefault();
		console.log(gender);
	};

	const genderSelect = () => {
		var selectBox = document.getElementById("gender-select");
		var selectedValue = selectBox.options[selectBox.selectedIndex].index;
		if (selectedValue == 1) {
			setGender(true);
			console.log(gender);
		} else {
			setGender(false);
			console.log(gender);
		}
	};

	return (
		<form onSubmit={calculate} className="container">
			<label className="label" htmlFor="gender-select">
				Gender
				<select
					defaultValue="default"
					onChange={genderSelect}
					name="gender-select"
					id="gender-select">
					<option disabled value="default">
						-- select an option --
					</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</label>
			<label className="label" htmlFor="age">
				Age
				<input name="age" type="number" />
			</label>
			<label className="label" htmlFor="height">
				Height
				<input type="number" name="height-ft" id="" /> <span>ft</span>
				<input type="number" name="height-in" id="" /> <span>in</span>
			</label>
			<label className="label" htmlFor="weight">
				Weight
				<input type="number" name="weight" id="" />
				<span>lbs</span>
			</label>
			<input type="submit" />
			<h1>{total}</h1>
		</form>
	);
}

const domContainer = document.getElementById("root");
ReactDOM.render(<App />, domContainer);
