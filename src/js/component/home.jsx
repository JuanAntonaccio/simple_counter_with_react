import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = props => {
	return (
		<div className="otro">
			<div className="reloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="cajas">{props.contador[0]}</div>
			<div className="cajas">{props.contador[1]}</div>
			<div className="cajas">{props.contador[2]}</div>
			<div className="cajas">{props.contador[3]}</div>
			<div className="cajas">{props.contador[4]}</div>
			<div className="cajas">{props.contador[5]}</div>
		</div>
	);
};

Home.propTypes = {
	contador: PropTypes.arrayOf(PropTypes.number)
};
export default Home;
