import React from 'react';
import { Link } from 'react-router-dom';

class Sem4 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 4</h5>
					<h5 className="semdates">Dec 17 - May 18</h5>
				</div>
				<Link to="/UGEngineeringMathematics-IV">Engineering Mathematics-IV</Link>
				<Link to="/UGComputerOrganization&Architecture">Computer Organization & Architecture</Link>
				<Link to="/UGMicroprocessors&Microcontrollers">Microprocessors & Microcontrollers</Link>
				<Link to="/UGJavaProgramming">Java Programming</Link>
				<Link to="/UGObjectOrientedAnalysis&Design">Object Oriented Analysis & Design</Link>
				<Link to="/UGInformationStorage&Management">Information Storage & Management</Link>
				<Link to="/UGMicroprocessors&MicrocontrollersLab">Microprocessors & Microcontrollers Lab</Link>
				<Link to="/UGJavaProgrammingLab">Java Programming Lab</Link>
			</div>
		)
	}
}

export default Sem4;