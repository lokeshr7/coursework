import React from 'react';

class UGDesignAnalysisofAlgorithms extends React.Component{

	render(){

		return(

			<div>

			    <h3>DESIGN & ANALYSIS OF ALGORITHMS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner develop efficient algorithms for a given
					application by selecting the appropriate design technique after analyzing 
					its computational, time and space complexity.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction:</strong> Role of algorithms in computing 
					- Analyzing algorithms - Designing algorithms.
					<strong> Divide and Conquer:</strong> Maximum subarray problem - Strassen’s algorithm for matrix
					multiplication - Substitution method for solving recurrences - Recursion tree method for solving
					recurrences - Master method for solving recurrences - Proof of the master theorem.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Heapsort:</strong> Heaps - Maintaining the heap property - Building a heap-heap sort
					algorithm - Priority queues.
					<strong> Quicksort:</strong> Description of Quicksort - Performance of Quicksort - A
					randomized version of Quicksort - Analysis of Quicksort.
					<strong> Sorting in Linear Time:</strong> Lower
					bounds for sorting - Counting sort - Radix sort - Bucket sort.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Dynamic Programming & Greedy Algorithms:</strong> Rod cutting - 
					Matrix Chain Multiplication -
					Longest common subsequence - An activity selection problem - Elements of the greedy
					strategy - Huffman codes.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Graph Algorithms:</strong> Breadth first search - Depth first search 
					- Topological sort - The
					Algorithms of Kruskal and Prim - Bellman-Ford algorithm - 
					Dijkstra’s algorithm - Floyd-Warshall algorithm.
					<strong> String Matching:</strong> Notation and Terminology - The naïve string matching - Rabin
					Karp algorithm - String matching with finite-automata - 
					Knuth-Morris-Pratt algorithm.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. T. H. Cormen, C. E. Leiserson, R. L. Rivest, and C. Stein, “Introduction to Algorithms”,
					Prentice Hall of India, 3rd Edition, 2009.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Anany Levitin, “Introduction to the Design and Analysis of Algorithm”, Pearson Education,
					3rd Edition, 2012.<br/>
					2. Sara Baase and Allen Van Gelder, “Computer Algorithms - Introduction to Design
					and Analysis”, Pearson Education, 3rd Edition, 2008.<br/>
					3. A. V. Aho, J. E. Hopcroft, and J. D. Ullman, “The Design and Analysis of Computer
					Algorithms”, Pearson Education, 2003.<br/>
					4. Jon Kleinberg and Eva Tardos, “Algorithm Design”, Pearson Education, 1st Edition, 2013.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGDesignAnalysisofAlgorithms;