import "./App.sass";
import { useState, useEffect } from "react";

function App() {
	const [calcArr, setCalcArr] = useState([]);

	const appendCalcArr = (nextElement) => {
		setCalcArr([...calcArr, nextElement]);
	};

	const calculate = () => {
		let copyArr = [...calcArr];

		let numsJoinedArr = [];
		let digitsArr = [];

		for (let i = 0; i < copyArr.length; i++) {
			// now digits and decimal points will be joined in sub arrays

			let operationCondition =
				copyArr[i] == "/" ||
				copyArr[i] == "*" ||
				copyArr[i] == "-" ||
				copyArr[i] == "+";

			if (i == 0) {
				digitsArr.push(copyArr[i]);
			} else if (operationCondition && i != 0) {
				numsJoinedArr.push(digitsArr.join(""));
				digitsArr = [];
				numsJoinedArr.push(copyArr[i]);
			} else if (i == copyArr.length - 1 && i != 0) {
				digitsArr.push(copyArr[i]);
				numsJoinedArr.push(digitsArr.join(""));
				digitsArr = [];
			} else {
				digitsArr.push(copyArr[i]);
			}
		}

		let resultArr = [];
		console.log(numsJoinedArr);

		for (let i = 0; i < numsJoinedArr.length; i++) {
			// now we proceed with the mathematical sequence of operations
			if (numsJoinedArr[i] === "*") {
				let multiplicationResult =
					parseFloat(numsJoinedArr[i - 1] + "a") *
					parseFloat(numsJoinedArr[i + 1] + "a");
				numsJoinedArr.splice(i - 1, 3, multiplicationResult);
			}
		}
		for (let i = 0; i < numsJoinedArr.length; i++) {
			if (numsJoinedArr[i] === "/") {
				let divisionResult =
					parseFloat(numsJoinedArr[i - 1] + "a") /
					parseFloat(numsJoinedArr[i + 1] + "a");
				numsJoinedArr.splice(i - 1, 3, divisionResult);
			}
		}
		for (let i = 0; i < numsJoinedArr.length; i++) {
			if (numsJoinedArr[i] === "+") {

				let additionResult =
					parseFloat(numsJoinedArr[i - 1] + "a") +
					parseFloat(numsJoinedArr[i + 1] + "a");
				numsJoinedArr.splice(i - 1, 3, additionResult);
			}
		}
		for (let i = 0; i < numsJoinedArr.length; i++) {
			if (numsJoinedArr[i] === "-") {
				let subtractionResult =
					parseFloat(numsJoinedArr[i - 1] + "a") -
					parseFloat(numsJoinedArr[i + 1] + "a");
				numsJoinedArr.splice(i - 1, 3, subtractionResult);
			}
		}
		setCalcArr([...numsJoinedArr]);
	};

	useEffect(() => {
		console.log(calcArr);
	});

	const IsNotOperation =
		calcArr[calcArr.length - 1] != "+" &&
		calcArr[calcArr.length - 1] != "-" &&
		calcArr[calcArr.length - 1] != "/" &&
		calcArr[calcArr.length - 1] != "*" &&
		calcArr[calcArr.length - 1] != "";

	return (
		<div className="App">
			<div className="calc-body">
				<div id="display" className="calc-item">
					{calcArr.length == 0 ? "0" : calcArr}
				</div>
				<button
					id="clear"
					className="calc-item operation"
					onClick={() => setCalcArr([])}
				>
					AC
				</button>
				<button
					id="divide"
					className="calc-item operation"
					onClick={() => {
						if (IsNotOperation) {
							appendCalcArr("/");
						}
					}}
				>
					/
				</button>
				<button
					id="multiply"
					className="calc-item operation"
					onClick={() => {
						if (IsNotOperation) {
							appendCalcArr("*");
						}
					}}
				>
					x
				</button>
				<button
					id="seven"
					className="calc-item"
					onClick={() => appendCalcArr("7")}
				>
					7
				</button>
				<button
					id="eight"
					className="calc-item"
					onClick={() => appendCalcArr("8")}
				>
					8
				</button>
				<button
					id="nine"
					className="calc-item"
					onClick={() => appendCalcArr("9")}
				>
					9
				</button>
				<button
					id="subtract"
					className="calc-item operation"
					onClick={() => {
						if (IsNotOperation) {
							appendCalcArr("-");
						}
					}}
				>
					-
				</button>
				<button
					id="four"
					className="calc-item"
					onClick={() => appendCalcArr("4")}
				>
					4
				</button>
				<button
					id="five"
					className="calc-item"
					onClick={() => appendCalcArr("5")}
				>
					5
				</button>
				<button
					id="six"
					className="calc-item"
					onClick={() => appendCalcArr("6")}
				>
					6
				</button>
				<button
					id="add"
					className="calc-item operation"
					onClick={() => {
						if (IsNotOperation) {
							appendCalcArr("+");
						}
					}}
				>
					+
				</button>
				<button
					id="one"
					className="calc-item"
					onClick={() => appendCalcArr("1")}
				>
					1
				</button>
				<button
					id="two"
					className="calc-item"
					onClick={() => appendCalcArr("2")}
				>
					2
				</button>
				<button
					id="three"
					className="calc-item"
					onClick={() => appendCalcArr("3")}
				>
					3
				</button>
				<button id="equals" className="calc-item operation" onClick={calculate}>
					=
				</button>
				<button
					id="zero"
					className="calc-item"
					onClick={() => appendCalcArr("0")}
				>
					0
				</button>
				<button
					id="decimal"
					className="calc-item"
					onClick={() => {
						appendCalcArr(".");
					}}
				>
					.
				</button>
			</div>
		</div>
	);
}

export default App;
