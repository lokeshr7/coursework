import React from 'react';
import { Link } from 'react-router-dom';

class Sem1 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 1</h5>
					<h5 className="semdates">Jul 16 - Nov 16</h5>
				</div>
				<Link to="/UGEngineeringMathematics-I">Engineering Mathematics-I</Link>
				<Link to="/UGProgramminginC">Programming in C</Link>
				<Link to="/UGEngineeringPhysics">Engineering Physics</Link>
				<Link to="/UGEngineeringMechanics">Engineering Mechanics</Link>
				<Link to="/UGBasicCivilEngineering">Basic Civil Engineering</Link>
				<Link to="/UGBasicMechanicalEngineering">Basic Mechanical Engineering</Link>
				<Link to="/UGEngineeringPractice">Engineering Practice</Link>
				<Link to="/UGProgramminginCLab">Programming in C Lab</Link>
				<Link to="/UGEngineeringPhysicsLab">Engineering Physics Lab</Link>
			</div>
		)
	}
}

export default Sem1;