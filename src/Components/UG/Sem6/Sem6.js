import React from 'react';
import { Link } from 'react-router-dom';

class Sem6 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 6</h5>
					<h5 className="semdates">Dec 18 - May 19</h5>
				</div>
				<Link to="/UGCryptography&NetworkSecurity">Cryptography & Network Security</Link>
				<Link to="/UGSoftwareEngineering">Software Engineering</Link>
				<Link to="/UGCompilerEngineering">Compiler Engineering</Link>
				<Link to="/UGArtificialIntelligence">Artificial Intelligence</Link>
				<Link to="/UGMobileComputing">Mobile Computing</Link>
				<Link to="/UGPythonProgramming">Python Programming</Link>
				<Link to="/UGCompilerEngineeringLab">Compiler Engineering Lab</Link>
				<Link to="/UGSoftwareEngineeringLab">Software Engineering Lab</Link>
			</div>
		)
	}
}

export default Sem6