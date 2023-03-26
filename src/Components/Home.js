import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import UICLogo from './UIC.png';
import SastraLogo from './SastraLogo.png';
import UGDegreeCertificate from './DegreeCertificateTechnicallyRedacted3.png';
import UICWritingLogo from './UICWritingLogo.png';

class Home extends React.Component{

	render(){

		return(
			
			<div className='whole'>
				<div className='section'>
				    <img src={SastraLogo} alt="Sastra logo" width="auto" height="170" id="FirstLogo"/>
					<div className='compartment' id='UGCompartment'>
						<h3>Bachelor of Technology <br/><br/>Computer Science and Engineering <br/><br/>
						Shanmugha Arts, Science, Technology and Research Academy <br/><br/>
						(SASTRA)</h3>
						<h3>July 11, 2016 - July 16, 2020</h3>
						{console.log(process.env.PUBLIC_URL)}
						<Link to="/UG">Click here to view undergraduate coursework</Link>
					</div>
					<img src={UGDegreeCertificate} alt="Degree Certificate" width="auto" height="300" id="UGDegreeCertificate"/>
				</div>

				<hr/>

			    <div className='section'>
				    <img src={UICLogo} alt="UIC logo" width="200" height="200" id="UICLogo"/>
					<img src={UICWritingLogo} alt="UIC logo" width="auto" height="250" id="UICWritingLogo"/>
					<div className='compartment' id='PGCompartment'>
						<h3>Master of Science <br/><br/> Computer Science <br/><br/>
						University of Illinois, Chicago <br/><br/> (UIC)</h3>
						<h3>August 23, 2021 - May 5, 2023</h3>
						<Link to="/PG">Click here to view postgraduate coursework</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;