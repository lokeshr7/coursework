import React from 'react';

class UGEngineeringPhysicsLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>ENGINEERING PHYSICS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To practically understand some of the advanced behavior of solids, which includes
                    nanomaterials, superconductors, magnetic and dielectric materials. Also, to understand the
                    basic concepts of spectroscopy, which includes LASERS and microscopes through experimentation.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Spectrometer - Determination of Wavelength using Grating. <br/>
                    2. Measurement of dielectric constant using parallel plate capacitor. <br/>
                    3. Transistor Characteristics - Common Emitter Configuration. <br/>
                    4. Calibration of Ammeter using Potentiometer. <br/>
                    5. Laser Grating - Determination of wavelength of 
                    He-Ne Laser and Non-Destructive Testing. <br/>
                    6. Hall effect – Measurement of carrier concentration and mobility of semiconductor.
					</p>
					
					<p className='half-lab'>
                    7. Thermister – Determination of Band gap. <br/>
                    8. Logic Gates - OR, AND, NOT, NOR and NAND using Discrete Components. <br/>
                    9. Velocity of Ultrasonic waves in Liquids and Compressibility 
                    of the liquid using Ultrasonic Interferometer. <br/>
                    10. Four Probe Method – Measurement of Resistivity of material. <br/>
                    11. Hysteresis Loop Tracing – BH Curve. <br/>
                    12. Electron Spin Resonance Spectrometer.
					</p>
		
				</div>
				<hr/>            

			</div>
		)
	}
}

export default UGEngineeringPhysicsLab;