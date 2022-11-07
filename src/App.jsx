import "./App.sass";
import { useState, useEffect } from "react";

function App() {
	const [calcVal, setcalcVal] = useState([]);

	const digitRegex = /[0-9]/

	useEffect(() => {
	console.log(calcVal);
	});

	return (
		<div className="App">
			<div className="calc-body">
				<div id="display" className="calc-item">
					{calcVal}
				</div>
				<button
					id="clear"
					className="calc-item operation"
					onClick={() => setcalcVal("")}
				>
					AC
				</button>
				<button
					id="divide"
					className="calc-item operation"
					onClick={() => {
						if (
							calcVal[calcVal.length - 1] != "+" &&
							calcVal[calcVal.length - 1] != "-" &&
							calcVal[calcVal.length - 1] != "/" &&
							calcVal[calcVal.length - 1] != "*" &&
							calcVal[calcVal.length - 1] != ""
						) {
							setcalcVal(calcVal + "/");
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
							calcVal[calcVal.length - 1] != "+" &&
							calcVal[calcVal.length - 1] != "-" &&
							calcVal[calcVal.length - 1] != "/" &&
							calcVal[calcVal.length - 1] != "*" &&
							calcVal[calcVal.length - 1] != ""
						) {
							setcalcVal(calcVal + "*");
						} 
				}}
				>
					x
				</button>
				<button
					id="seven"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "7")}
				>
					7
				</button>
				<button
					id="eight"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "8")}
				>
					8
				</button>
				<button
					id="nine"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "9")}
				>
					9
				</button>
				<button
					id="subtract"
					className="calc-item operation"
					onClick={() => {
						if (
							calcVal[calcVal.length - 1] != "+" &&
							calcVal[calcVal.length - 1] != "-" &&
							calcVal[calcVal.length - 1] != "/" &&
							calcVal[calcVal.length - 1] != "*" &&
							calcVal[calcVal.length - 1] != ""
						) {
							setcalcVal(calcVal + "-");
						}
					}}
				>
					-
				</button>
				<button
					id="four"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "4")}
				>
					4
				</button>
				<button
					id="five"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "5")}
				>
					5
				</button>
				<button
					id="six"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "6")}
				>
					6
				</button>
				<button
					id="add"
					className="calc-item operation"
					onClick={() => {
						if (
							calcVal[calcVal.length - 1] != "+" &&
							calcVal[calcVal.length - 1] != "-" &&
							calcVal[calcVal.length - 1] != "/" &&
							calcVal[calcVal.length - 1] != "*" &&
							calcVal[calcVal.length - 1] != ""
						) {
							setcalcVal(calcVal + "+");
						} 
				}}
				>
					+
				</button>
				<button
					id="one"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "1")}
				>
					1
				</button>
				<button
					id="two"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "2")}
				>
					2
				</button>
				<button
					id="three"
					className="calc-item"
					onClick={() => setcalcVal(calcVal + "3")}
				>
					3
				</button>
				<button id="equals" className="calc-item operation" >
					=
				</button>
				<button id="zero" className="calc-item" onClick={() => setcalcVal(calcVal + "0")}>
					0
				</button>
				<button id="decimal" className="calc-item" onClick={() => {
					if (calcVal.length == 0) {setcalcVal(calcVal + "0.")}
					else if (calcVal[calcVal.length - 1] !== ".") {setcalcVal(calcVal + ".")}
					}}>
					.
				</button>
			</div>
		</div>
	);
}

export default App;
