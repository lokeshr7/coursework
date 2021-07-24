import React from 'react';

class UGParallelDistributedSystemsLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>PARALLEL & DISTRIBUTED SYSTEMS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner demonstrate 
					parallel algorithms using GPU programming
					and develop distributed applications.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    
					<h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					
					<p className='half-lab' style={{marginRight: "50px"}}>
					<strong>Parallel Computing Exercises (GPU Programming)</strong><br/>
					1. Find all occurrences of a particular string in another string.<br/>
					2. Compute the dot product of two vectors. <br/>
					3. Compute the product of two matrices. Propose two different kernels, 
					"matmul" and "block_matmul" to illustrate how performance 
					enhancement can be undertaken. <br/>
					4. Implement quick sort algorithm. <br/>
					5. Implement Gauss Elimination method. <br/>
					6. Find the k-th largest element in an unsorted list 
					of n elements initially distributed among p processors.
					</p>
					
					<p className='half-lab'> 
					<strong>Distributed Computing Exercises</strong><br/>
					7. Implement a chat server.<br/>
					8. Implement RPC.<br/>
					9. Implement Clock synchronization.<br/>
					10. Implement a Leader Election algorithm in a ring network.<br/>
					11. Implement Group Communication.<br/>
					12. Implement Byzantine Agreement.
					</p>

				</div>
				<hr/>

			</div>
		)
	}
}

export default UGParallelDistributedSystemsLab;