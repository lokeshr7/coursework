import React from 'react';

class UGEmbeddedSystems extends React.Component{

	render(){

		return(

			<div>

			    <h3>EMBEDDED SYSTEMS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to describe 
					the concepts and components of an embedded
					system, and design embedded system applications.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction to Embedded Computing:</strong> Complex Systems 
					and Multiprocessors - Embedded
					System Design Process.
					<strong> Network and Multiprocessors:</strong> Introduction - Categories of
					Multiprocessors - Distributed Embedded Systems - MPSoCs and Shared Memory
					Multiprocessors.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>ARM Architecture and Instruction Set:</strong> ARM Design Philosophy - Embedded System
					Hardware - Embedded System Software - Registers - Current Program Status Register -
					Pipeline - Exceptions - Interrupts and the Vector Table - Core Extensions - Architecture
					Revisions - ARM Processor Families - Data Processing Instructions - Branch Instructions - Load
					- Store Instructions - Software Interrupt Instruction - Program Status Register Instructions -
					Loading Constants - ARMv5E Extensions - Conditional Execution.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Embedded Programming:</strong> Getting Most out of C: 
					Integer, Boolean and Mixing Data types -
					Manipulating bits in Memory and IO Ports - Accessing Memory Mapped IO Devices - Structures
					- Variant Access. Data Manipulation in Assembly: Loading Constants into Registers - Loading
					Memory Data into Registers - Storing Data from Registers to Memory - Converting C
					assignment statements to ARM Assembly - Memory Address Calculations and Examples -
					Stack Instructions - Data Processing Instructions - Control Structures in Assembly - IO
					Programming in Assembly.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Real Time Operating Systems:</strong> Introduction to RTOS 
					- Multiple tasks and Multiple Processes -
					Multi rate Systems - Preemptive RTOS - Priority based Scheduling - Inter process
					Communication Mechanisms - Evaluating Operating System Performance - Power Optimization
					Strategies for Processes - POSIX - Windows CE - Case study: Telephone Answering Machine.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. Marilyn Wolf, “Computers as Components: Principles of Embedded Computing System
					Design”, Morgan Kaufmann, 3rd Edition, 2012 (UNIT - I, IV).<br/>
					2. Andrew N. Sloss, Dominic Symes and Chris Wright, “ARM System Developers Guide:
					Designing and optimizing system software”, Morgan Kaufmann, 2004 (UNIT - II).<br/>
					3. Daniel W. Lewis, “Fundamentals of Embedded Software with the ARM Cortex-M3”, 2nd
					Edition, Pearson Education, 2013. (UNIT - III).
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Wayne Wolf, “Computers as Components: 
					Principles of Embedded Computing System
					Design”, Elsevier, 2nd Edition, 2008.<br/>
					2. Raj Kamal, “Embedded systems - 
					Architecture, Programming and design”, Tata McGraw
					Hill, 3rd Edition, 2014.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGEmbeddedSystems;