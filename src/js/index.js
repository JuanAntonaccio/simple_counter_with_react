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
let contador = [0, 0, 0, 0, 0, 0];

let indice1 = [5, 4, 3, 2, 1, 0];
let columnas = 0;

setInterval(function() {
	ReactDOM.render(
		<Home contador={contador} />,
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
}, 1000);
