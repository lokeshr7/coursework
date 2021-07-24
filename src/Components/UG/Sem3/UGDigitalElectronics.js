import React from 'react';

class UGDigitalElectronics extends React.Component{

	render(){

		return(

			<div>

			    <h3>DIGITAL ELECTRONICS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					To enable the learner to analyze, design, implement logical operations in 
					sequential and combinational circuits.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Boolean Functions:</strong> Boolean Laws - Simplifications Using Laws - 
					Minterms - Maxterms - Sum of Product and Product of Sum Form 
					- Karnaugh Map - NAND, NOR Implementation.
					<strong> Digital Logic families:</strong> RTL - DTL - ECL - TTL - 
					CMOS Logic Families - Characteristics - Comparison of IC Families.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Combinational Circuits:</strong> Adders - Subtractors- 
					Magnitude Comparators - Multiplexer - Demultiplexer - Encoder - Decoder.
					<strong> Memories:</strong> Semiconductor Memories - Types of Memories: RAM, ROM, 
					EPROM, EEPROM, MRAM, CAM, CCD, Flash Memory.
					<strong> Programmable Devices:</strong> SPLD: PAL, PLA, GAL, PROM, CPLD, FPGA.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Asynchronous Sequential Machine:</strong> Introduction - ASM Charts - Examples of 
					Synchronous Sequential Network Design Using ASM Charts - State Assignment 
					- ASM Tables- ASM Realization for Traffic Control, 
					2 Bit Synchronous Up/Down Counter, Automatic Bank Teller, 
					Milk Vending Machine, Waveform Generator.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Asynchronous & Synchronous Sequential Circuits: </strong>
					Flip Flops: RS - D - JK - T and Master Slave Flip Flops. 
					Registers: Shift Registers - SISO, SIPO, PISO, PIPO and Bi-Directional Registers. 
					Counters: Design of Synchronous Counters, Design of Asynchronous Counters 
					FSM - Basic Design Procedure - Mealy & Moore Machines - 
					FSM realization Design of Sequential Networks - ROM, PLA, PLDs and PGAs.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. M. Morris Mano. Digital Design. Pearson Education: 4th Edition, 2006.<br/>
					2. Donald D. Givone. Digital Principles and Designs. Tata McGraw Hill: 2003.<br/>
					3. Charles H. Roth, Jr. Fundamentals of Logic Design. Thomson Learning: 5th Edition, 2007.<br/>
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. R. P. Jain. Modern Digital Electronics. Tata McGraw Hill: 3rd Edition, 2006.<br/>
					2. Bhutiyani. R. S. Advanced Digital Technique & Digital System Design. 
					Everest Publishing House: 1993.<br/>
					3. T. L. Floyd. Digital Fundamentals. Pearson Education: 3rd Edition, 2006.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGDigitalElectronics;