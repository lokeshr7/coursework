import React from 'react';
import { Link } from 'react-router-dom';

class Sem7 extends React.Component{

	render(){

		return(
			<div className="box">
				<div className="track">
					<h5>SEMESTER 7</h5>
					<h5 className="semdates">Jul 19 - Nov 19</h5>
				</div>
				<Link to="/UGBigDataAnalytics">Big Data Analytics</Link>
				<Link to="/UGCloudComputing">Cloud Computing</Link>
				<Link to="/UGParallel&DistributedSystems">Parallel & Distributed Systems</Link>
				<Link to="/UGEmbeddedSystems">Embedded Systems</Link>
				<Link to="/UGInternetofThings">Internet of Things</Link>
				<Link to="/UGEmbeddedSystemsLab">Embedded Systems Lab</Link>
				<Link to="/UGParallel&DistributedSystemsLab">Parallel & Distributed Systems Lab</Link>
			</div>
		)
	}
}

export default Sem7;