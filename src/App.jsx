import "./App.sass";
import { useState, useEffect } from "react";

function App() {
	const [calcArr, setCalcArr] = useState([0]);

	const appendCalcArr = (nextElement) => {
		const nextArr = [...calcArr, nextElement];
		setCalcArr(nextArr);
	};

	useEffect(() => {
		console.log(calcArr);
	});

	return (
		<div className="App">
			<div className="calc-body">
				<div id="display" className="calc-item">
					{calcArr}
				</div>
				<button
					id="clear"
					className="calc-item operation"
					onClick={() => setCalcArr([0])}
				>
					AC
				</button>
				<button
					id="divide"
					className="calc-item operation"
					onClick={() => {
						if (
							calcArr[calcArr.length - 1] != "+" &&
							calcArr[calcArr.length - 1] != "-" &&
							calcArr[calcArr.length - 1] != "/" &&
							calcArr[calcArr.length - 1] != "*" &&
							calcArr[calcArr.length - 1] != ""
						) {
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
						if (
							calcArr[calcArr.length - 1] != "+" &&
							calcArr[calcArr.length - 1] != "-" &&
							calcArr[calcArr.length - 1] != "/" &&
							calcArr[calcArr.length - 1] != "*" &&
							calcArr[calcArr.length - 1] != ""
						) {
							appendCalcArr("*");
						}
					}}
				>
					x
				</button>
				<button
					id="seven"
					className="calc-item"
					onClick={() => appendCalcArr(7)}
				>
					7
				</button>
				<button
					id="eight"
					className="calc-item"
					onClick={() => appendCalcArr(8)}
				>
					8
				</button>
				<button
					id="nine"
					className="calc-item"
					onClick={() => appendCalcArr(9)}
				>
					9
				</button>
				<button
					id="subtract"
					className="calc-item operation"
					onClick={() => {
						if (
							calcArr[calcArr.length - 1] != "+" &&
							calcArr[calcArr.length - 1] != "-" &&
							calcArr[calcArr.length - 1] != "/" &&
							calcArr[calcArr.length - 1] != "*" &&
							calcArr[calcArr.length - 1] != ""
						) {
							appendCalcArr("-");
						}
					}}
				>
					-
				</button>
				<button
					id="four"
					className="calc-item"
					onClick={() => appendCalcArr(4)}
				>
					4
				</button>
				<button
					id="five"
					className="calc-item"
					onClick={() => appendCalcArr(5)}
				>
					5
				</button>
				<button id="six" className="calc-item" onClick={() => appendCalcArr(6)}>
					6
				</button>
				<button
					id="add"
					className="calc-item operation"
					onClick={() => {
						if (
							calcArr[calcArr.length - 1] != "+" &&
							calcArr[calcArr.length - 1] != "-" &&
							calcArr[calcArr.length - 1] != "/" &&
							calcArr[calcArr.length - 1] != "*" &&
							calcArr[calcArr.length - 1] != ""
						) {
							appendCalcArr("+");
						}
					}}
				>
					+
				</button>
				<button id="one" className="calc-item" onClick={() => appendCalcArr(1)}>
					1
				</button>
				<button id="two" className="calc-item" onClick={() => appendCalcArr(2)}>
					2
				</button>
				<button
					id="three"
					className="calc-item"
					onClick={() => appendCalcArr(3)}
				>
					3
				</button>
				<button id="equals" className="calc-item operation">
					=
				</button>
				<button
					id="zero"
					className="calc-item"
					onClick={() => appendCalcArr(0)}
				>
					0
				</button>
				<button
					id="decimal"
					className="calc-item"
					onClick={() => appendCalcArr(".")}
				>
					.
				</button>
			</div>
		</div>
	);
}

export default App;
