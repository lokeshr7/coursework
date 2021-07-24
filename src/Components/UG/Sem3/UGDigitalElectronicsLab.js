import React from 'react';

class UGDigitalElectronicsLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>DIGITAL ELECTRONICS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To help the learner implement the 
                    logical aspects of combinational and 
                    sequential circuits.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. 4 Bit Adder / Subtractor. <br/>
                    Design/construct: <br/>
                    a) Basic gates
                    b) Half adder
                    c) Half subtractor
                    d) Full Adder
                    e) Full Subtractor
                    f) 2:1 Multiplexer
                    g) 2:4 decoder
                    h) BCD to Seven Segment Decoder
                    i) Understanding of seven segment display.<br/>

                    2. 4-bit Magnitude Comparator. <br/>
                    Design/construct: <br/>
                    a) Bit comparator.
                    b) 4 bit comparator. <br/>

                    3. 4-bit Arithmetic Logic Unit. <br/>
                    Design/construct: <br/>
                    a) 8:1 Multiplexer (4 bit comparator 
                    and 4 bit adder have to be used here).
					</p>
					
					<p className='half-lab'>
                    4. 3-bit Asynchronous Ripple Counter.<br/>
                    Design/construct: <br/>
                    a) SR Latch b) JK Flip-Flop c) SR Flip-Flop d) 
                    T Flip-Flop e) D Flip-Flop.<br/>

                    5. Register File, Instruction and Data Memories.<br/>
                    Design/construct: <br/>
                    a) PIPO Shift Register b) PISO Shift Register 
                    c) SIPO Shift Register d) PIPO Shift Register e) 4: 1 Multiplexer<br/>

                    6. Assembling the Processor.<br/>
                    Design/construct: <br/>
                    a) 3 bit asynchronous counter (PC) (combination of all the above experiments).
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGDigitalElectronicsLab;