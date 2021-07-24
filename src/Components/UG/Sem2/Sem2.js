import React from 'react';
import { Link } from 'react-router-dom';

class Sem2 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 2</h5>
					<h5 className="semdates">Dec 16 - May 17</h5>
				</div>
				<Link to="/UGTechnicalCommunication">Technical Communication</Link>
				<Link to="/UGEngineeringMathematics-II">Engineering Mathematics-II</Link>
				<Link to="/UGProgramminginCPP">Programming in C++</Link>
				<Link to="/UGEngineeringChemistry">Engineering Chemistry</Link>
				<Link to="/UGEngineeringDrawing">Engineering Drawing</Link>
				<Link to="/UGElectricalSciences">Electrical Sciences</Link>
				<Link to="/UGProgramminginCPPLab">Programming in C++ Lab</Link>
				<Link to="/UGComputerAidedDrawingLab">Computer Aided Drawing Lab</Link>
			</div>
		)
	}
}

export default Sem2;