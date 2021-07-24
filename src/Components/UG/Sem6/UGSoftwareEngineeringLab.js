import React from 'react';

class UGSoftwareEngineeringLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>SOFTWARE ENGINEERING LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    This course will help the learner to understand the steps 
                    and utilities of various tools available on IBM Rational 
                    Suite for the Software Engineering Process.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
					1. Case Tools Study: Study of Rational Unified Process.<br/>
                    2. Prepare SRS using Rational Requisite Pro.<br/>
                    3. Generate the Use Case and Activity Diagrams using Rational Rose.<br/>
                    4. Generate the Sequence, Collaboration and Class Diagram using Rational Rose.<br/>
                    5. Develop the Forward Engineering and Reverse Engineering using JAVA.<br/>
                    6. Memory leak testing with Rational Purify.<br/>
                    7. Code coverage testing with Rational Pure Coverage.<br/>
					8. Management of Test Planning using Rational Test Manager.
					</p>
					
					<p className='half-lab'>
                    9. Develop a manual Test Script using Rational Robot.<br/>
                    10. Develop a test script for Object insertions and Alphanumeric Verification Points.<br/>
                    11. Develop a test script with External Data Source using Rational Robot.<br/>
                    12. Develop a test script with Data Pools using Rational Robot and Rational test manager.<br/>
                    13. Develop a test script for Object Scripting using Rational Robot.<br/>
                    14. Create a test script for Website Testing Using Rational Robot.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGSoftwareEngineeringLab;