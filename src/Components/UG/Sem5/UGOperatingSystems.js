import React from 'react';

class UGOperatingSystems extends React.Component{

	render(){

		return(

			<div>

			    <h3>OPERATING SYSTEMS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to illustrate the memory management schemes, IPC
					mechanisms, concurrency issues, I/O management schemes and to select appropriate
					algorithms for CPU scheduling, disk scheduling and page replacement.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Computer System Overview:</strong> Basic elements - 
					Processor registers - Instruction execution -
					Interrupts - Memory hierarchy - Cache memory - I/O communication techniques.
					<strong> Operating System Overview:</strong> Objectives and functions - 
					Evolution of Operating systems - Major
					achievements - Developments leading to modern operating systems.
					<strong> Virtual Machines: </strong>
					Approaches to virtualization - OS Design Considerations for Multiprocessor and Multi-core.
					<strong> Processes:</strong> Process - Process States - 
					Process Description - Process Control - Execution of the Operating System.
					<strong> Threads:</strong> Processes and threads - 
					Types of Threads - Multi-core and Multithreading.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Uniprocessor scheduling:</strong> Types of processor scheduling - Scheduling
					algorithms - Multiprocessor.
					<strong> Concurrency:</strong> Principles of Concurrency - Mutual exclusion -
					Semaphores - Monitors - Message passing - Readers/Writers problem.
					<strong> Deadlock and Starvation:</strong> Principles of deadlock - 
					Deadlock Prevention - Deadlock Avoidance - Deadlock
					Detection - Integrated deadlock strategy - Dinning philosophers problem.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Memory Management:</strong> No Memory Abstraction - Swapping - 
					Virtual Memory - Paging - Page
					Replacement Algorithms - Design Issues for Paging Systems - Implementation Issues -
					Segmentation - Segmentation with Paging - Thrashing.
					<strong> I/O Management:</strong> I/O devices -
					Organization of the I/O function - OS design issues - I/O buffering.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Disk Scheduling:</strong> Disk performance parameters - 
					Disk scheduling policies. 
					<strong> File management: </strong>
					Overview - Organization and access - File directories - File sharing - Record blocking -
					Secondary storage managements.
					<strong> Operating System Security:</strong> Intruders and Malicious
					software - Buffer overflow - Viruses, Worms and Bots - Root-kits.
					<strong> Security Techniques:</strong> Authentication, Access control 
					- Intrusion detection - Malware defense - Dealing with buffer
					overflow attacks. Trends in Operating System Design.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. William Stallings, “Operating Systems Internals and Design Principles”, Pearson Education,
					8th Edition, 2015.<br/>
					2. Tanenbaum, Andrew S. , and Herbert Bos “Modern Operating Systems”, Pearson, 4th
					Edition, 2015. (UNIT-III: Memory Management, UNIT-IV: Trends in Operating System
					Design).
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Russ Cox, Frans Kaasshoek and Robert Morris, “X v6: A simple, Unix-like Teaching
					Operating System”, MIT, 2014.<br/>
					2. SilberSchatz, J. Peterson, and P. Galvin, “Operating System concepts”, 
					John Wiley, 9th Edition, 2015.<br/>
					3. Achyut Godbole, and Atul Kahate, “Operating Systems”, 3rd Edition, 
					Tata McGraw Hill, 2010.<br/>
					4. Milenkovic, M, “Operating Systems: Concepts and design”, 
					Tata McGraw Hill, 2nd Edition, 2009.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGOperatingSystems;