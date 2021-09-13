import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = props => {
	return (
		<h1>
			<i className="far fa-clock"></i>
			{props.contador[0]}
			{props.contador[1]}
			{props.contador[2]}
			{props.contador[3]}
			{props.contador[4]}
			{props.contador[5]}
		</h1>
	);
};

Home.propTypes = {
	contador: PropTypes.arrayOf(PropTypes.number)
};
export default Home;
