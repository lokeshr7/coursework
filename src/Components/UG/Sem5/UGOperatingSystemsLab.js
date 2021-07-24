import React from 'react';

class UGOperatingSystemsLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>OPERATING SYSTEMS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    This course will help the learner to explore 
                    inter-process communication mechanisms and
                    simulate CPU, file and Disk scheduling 
                    algorithms and to implement memory management
                    techniques.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Creation of a child process using fork system call and communication between parent and
                    child using pipe.<br/>
                    2. Simulation of IPC through shared memory and message queues.<br/>
                    3. Simulation of CPU scheduling algorithms and analyzing their performances.<br/>
                    4. Simulation of thread scheduling approaches.<br/>
                    5. Implementing the solution for Producer-Consumer problem for the bounded and unbounded
                    buffer variants.<br/>
                    6. Implementing the solution for Reader-Writer problem based on reader priority and writer
                    priority approaches.
					</p>
					
					<p className='half-lab'>
                    7. Simulation of Banker’s algorithm for Deadlock Avoidance.<br/>
                    8. Simulation of Deadlock Detection.<br/>
                    9. Implementing a solution to resolve the Dining Philosopher’s problem.<br/>
                    10. Simulation of memory allocation schemes based on dynamic partitioning with placement
                    algorithms and buddy systems.<br/>
                    11. Simulation of page replacement algorithms.<br/>
                    12. Implementing the address translation mechanism under paging.<br/>
                    13. Simulation of Disk scheduling techniques.<br/>
                    14. Adding a new system call to Linux kernel.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGOperatingSystemsLab;