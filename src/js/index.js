//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let sigue = true;
let contador = [0, 0, 0, 0, 0, 0];
const resetear = () => {
	contador = [0, 0, 0, 0, 0, 0];
	sigue = true;
	return contador;
};

const parar = () => {
	let cont2 = contador;
	sigue = false;
	return cont2;
};

const continuar = () => {
	sigue = true;
};

setInterval(function() {
	if (sigue) {
		ReactDOM.render(
			<div className="contenedor">
				<Home contador={contador} />
				<button classNamme="btn1" onClick={resetear}>
					Pulse para Resetear
				</button>
				<button classNamme="btn2" onClick={parar}>
					Pulse para Parar
				</button>
				<button classNamme="btn3" onClick={continuar}>
					Pulse para Continuar
				</button>
			</div>,
			document.querySelector("#app")
		);
		contador[5]++;
		if (contador[5] > 9) {
			contador[4]++;
			if (contador[4] > 9) {
				contador[3]++;
				if (contador[3] > 9) {
					contador[2]++;
					if (contador[2] > 9) {
						contador[1]++;
						if (contador[1] > 9) {
							contador[0]++;
							contador[1] = 0;
						}
						contador[2] = 0;
					}
					contador[3] = 0;
				}
				contador[4] = 0;
			}
			contador[5] = 0;
		}
	}
}, 1000);
