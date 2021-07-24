import React from 'react';
import { Link } from 'react-router-dom';

class Sem8 extends React.Component{

	render(){

		return(
			<div className="last box">
				<div className="track">
					<h5>SEMESTER 8</h5>
					<h5 className="semdates">Dec 19 - Jul 20</h5>
				</div>
				<Link to="/UGE-commerce">E-commerce</Link>
				<Link to="/UGAnimationTechniques">Animation Techniques</Link>
				<Link to="/UGInformationHiding">Information Hiding</Link>
			</div>
		)
	}
}

export default Sem8;