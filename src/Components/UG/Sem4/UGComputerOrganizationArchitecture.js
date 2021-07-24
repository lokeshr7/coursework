import React from 'react';

class UGComputerOrganizationArchitecture extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPUTER ORGANIZATION & ARCHITECTURE</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					To help the learner understand the components that 
					go inside a computer and how they work together.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction:</strong> Organization and Architecture, Structure and Function - 
					Computer Evolution - Brief history of computers - Designing for performance.
					<strong> Computer System:</strong> Components, Function - Interconnection 
					Structures - Bus interconnection - PCI.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Memory:</strong> Cache memory: Memory system overview - Cache memory principles - 
					Elements of Cache design - Semiconductor Main Memory - Error correction - Advanced DRAM organization.
					<strong> External Memory:</strong> Magnetic Disk - RAID - Optical Memory - Magnetic Tapes.
					<strong> Input/Output:</strong> External Devices - I/O Modules - Programmed I/O - Interrupt Driven I/O - DMA.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>CPU:</strong> Computer Arithmetic: ALU - Integer Representation and 
					Arithmetic - Floating Point Representation and Arithmetic.
					<strong> Instruction Set:</strong> Characteristics - Operand Types - 
					Operation Types - Addressing Modes - Instruction formats.
					<strong> Processor Organization:</strong> Register organization - Instruction Cycle - 
					Instruction Pipelining.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>RISC:</strong> Instruction execution characteristics - 
					Large Register File - Compiler based Register Optimization - 
					Architecture - RISC Vs CISC Characteristics.
					<strong> Control Unit:</strong> Micro-Operations - Control of Processors - 
					Hardwired Implementation.
					<strong> Micro Programmed Control:</strong> Basic concepts - Microinstruction 
					Sequencing - Microinstruction Execution.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. William Stallings. Computer Organization and Architecture - 
					Designing for Performance. Prentice Hall of India: 7th Edition, 2006.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Patterson, D. A. and Hennessy, J. L. Computer Organization and Design: 
					The Hardware/Software Interface. Morgan Kaufmann Publishers: 4th Edition, 2008.<br/>
					2. D. A. Godse and A. P. Godse. Computer Architecture & Organization. Technical Publications: 2007.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGComputerOrganizationArchitecture;