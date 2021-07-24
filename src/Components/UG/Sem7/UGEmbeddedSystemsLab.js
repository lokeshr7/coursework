import React from 'react';

class UGEmbeddedSystemsLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>EMBEDDED SYSTEMS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
					To learner will be able to demonstrate advanced 
					interfacing mechanisms in development boards
					like 8051, ARM, Arduino, Raspberry Pi and 
					to understand the real time operating system concepts in ARM core.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES
				    </h4>
				    <p className='half-lab' style={{marginRight: "40px"}}>
					<strong>8051</strong> <br/>
					1. Verification of on-chip (Timer, Counter) peripherals using 8051. <br/>
					2. Event driven programming with External Interrupts of 8051. <br/>
					3. Interfacing PC with 8051 using UART. <br/>
					<strong>AVR (Arduino IDE)</strong><br/>
					4. Interfacing AVR with PC using UART. <br/>
					5. Programming the on-chip ADC of AVR. <br/>
					6. File Manipulation using AVR. <br/>
					<strong>ARM Core (LPC 2140, MCB 2370 & MCB 1760)</strong> <br/>
					7. GPIO module of ARM. <br/>
					8. Data Acquisition and Control using LM35. <br/>
					9. Serial Communication using ARM. <br/>
					10. Mutual exclusion Implementation. <br/>
					11. Implementation of Scheduling Algorithm. <br/>
					</p>
					
					<p className='half-lab'>
					<strong>Raspberry Pi</strong> <br/>
					12. Configuring and Programming the Raspberry Pi (GPIO and Data acquisition). <br/>
					13. Connecting the Raspberry Pi to the Cloud. <br/>
					<strong>Additional Experiments</strong> <br/>
					14. Connecting the Arduino to the Cloud. <br/>
					15. Processing Images using Raspberry Pi. <br/>
					</p>
					
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGEmbeddedSystemsLab;