import React from 'react';

class UGMicroprocessorsMicrocontrollersLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>MICROPROCESSORS & MICROCONTROLLERS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To gain hands on experience by exposing the 
					learners to the assembly language programming 
					of 8086 and 8051 and also to give a practical 
					training of interfacing the peripheral devices 
					with the microprocessor and microcontroller.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
					1. Implementation of Data transfer operations using X86. <br/>
					2. Implementation of Arithmetic operations using X86. <br/>
					3. Implementation of Logical operations using X86. <br/>
					4. Sorting and Array processing using X86. <br/>
					5. Code conversion programs using 8051. <br/>
					6. Generation of Waveforms using DAC with 8051. <br/>
					7. Interfacing ADC with 8051. <br/>
					8. Traffic light controller using 8051.
					</p>
					
					<p className='half-lab'>
					9. Recursion program using 8051.<br/>
					10. Implementation of counters using 8051. <br/>
					11. Measurement of frequency and phase angle using 8051. <br/>
					12. Seven segment display interface using 8051. <br/>
					13. Interfacing stepper motor using 8051. <br/>
					14. Serial communication using UART with 8051. <br/>
					15. Control of firing circuit for SCR using 8051.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGMicroprocessorsMicrocontrollersLab;