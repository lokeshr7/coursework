import React from 'react';

class UGParallelDistributedSystems extends React.Component{

	render(){

		return(

			<div>

			    <h3>PARALLEL & DISTRIBUTED SYSTEMS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to 
					design parallel and distributed algorithms and demonstrate
					them using CUDA.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Cuda Development Environment - Introduction to Cuda C: </strong>  
					Kernel call - Passing parameters - 
					Querying devices - Using Device Properties.
					<strong> Parallel Programming in Cuda C:</strong> Cuda Parallel Programming.
					<strong> Thread Cooperation:</strong> Splitting parallel blocks - Shared memory and
                    Synchronization.
					<strong> Constant Memory and Events:</strong> Introduction - 
					Measuring Performance with Events.
					<strong> Atomics:</strong> Compute Capability - 
					Atomic operations overview - Computing Histograms.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Parallel Processing Introduction:</strong> Parallel Processing 
					Terminology - The Sieve of Eratosthenes.
					<strong> PRAM Algorithms:</strong> Parallel Reduction - Prefix sums - Preorder Tree Traversal - 
					Merging of two sorted Lists - Graph coloring.
					<strong> Matrix Multiplication:</strong> Algorithms for processor
					Arrays - Multiprocessors and Multi-computers.
					<strong> Sorting:</strong> Enumeration sort - Odd Even
					transposition sort - Bitonic Merge on the Shuffle - Exchange Network-Parallel Quick sort - Hyper
					quick sort.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Introduction and Communication:</strong> Goals of 
					Distributed systems - Hardware Concepts - 
					Software Concepts - The client Server model - 
					Remote Procedure Call - Message Oriented
					Communication - Stream Oriented Communication.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Synchronization & Fault Tolerance:</strong> Clock Synchronization 
					- Logical clocks - Election
					Algorithms - Mutual Exclusion - Distributed Transactions - 
					Reliable Group Communication - 
					Distributed Commit - Recovery - Sun Network File System.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. Jason Sanders, Edward Kandrot, “CUDA by Example: An Introduction to General Purpose
					GPU Programming”, Addison-Wesley, 2011. (UNIT - I).<br/>
					2. Michael J. Quinn “Parallel Computing Theory and Practice”, 
					McGraw Hill, 2nd Edition, 2011 (UNIT - II).<br/>
					3. Andrew S. Tanenbaum, Maarten Van Steen, “Distributed Systems Principles and
					Paradigms”, Prentice Hall of India, 2007. (Units III, IV).
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Ananth Grama, Anshul Gupta, George Karypis, Vipin Kumar, “Introduction to Parallel
					Computing”, Pearson Education, 2nd Edition, 2003.<br/>
					2. Andrew S. Tanenbaum, “Distributed Operating System”, Prentice Hall of India, 2006.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGParallelDistributedSystems;