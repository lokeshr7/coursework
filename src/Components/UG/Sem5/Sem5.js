import React from 'react';
import { Link } from 'react-router-dom';

class Sem5 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 5</h5>
					<h5 className="semdates">Jul 18 - Nov 18</h5>
				</div>
				<Link to="/UGDesign&AnalysisofAlgorithms">Design & Analysis of Algorithms</Link>
				<Link to="/UGTheoryofComputation">Theory of Computation</Link>
				<Link to="/UGOperatingSystems">Operating Systems</Link>
				<Link to="/UGComputerNetworks">Computer Networks</Link>
				<Link to="/UGEngineeringMathematics-V">Engineering Mathematics-V</Link>
				<Link to="/UGRobotics">Robotics</Link>
				<Link to="/UGOperatingSystemsLab">Operating Systems Lab</Link>
				<Link to="/UGComputerNetworksLab">Computer Networks Lab</Link>
			</div>
		)
	}
}

export default Sem5;