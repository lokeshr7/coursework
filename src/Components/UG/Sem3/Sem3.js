import React from 'react';
import { Link } from 'react-router-dom';

class Sem3 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 3</h5>
					<h5 className="semdates">Jul 17 - Nov 17</h5>
				</div>
				<Link to="/UGEngineeringMathematics-III">Engineering Mathematics-III</Link>
				<Link to="/UGDatabaseManagementSystems">Database Management Systems</Link>
				<Link to="/UGDataStructures">Data Structures</Link>
				<Link to="/UGDigitalElectronics">Digital Electronics</Link>
				<Link to="/UGDiscreteMathematics">Discrete Mathematics</Link>
				<Link to="/UGComputerGraphics">Computer Graphics</Link>
				<Link to="/UGDigitalElectronicsLab">Digital Electronics Lab</Link>
				<Link to="/UGDataStructuresLab">Data Structures Lab</Link>
			</div>
		)
	}
}

export default Sem3;