import React from 'react';

class UGDataStructuresLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>DATA STRUCTURES LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To help the learner understand the 
                    concepts and techniques available for 
                    data structures using C/C++.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Create a Stack and do the following operations using arrays: <br/>
                    a) Push b) Pop c) Peep d) Display <br/>
                    2. Create a Queue and do the following operations using arrays: <br/>
                    a) Enqueue b) Dequeue c) Search d) Display <br/>
                    3. Implement insertion, deletion and display operations on singly linked list. <br/>
                    4. Implement conversion of infix expression to postfix using linked stack. <br/>
                    5. Implement insertion, deletion and display operations on doubly linked list. <br/>
                    6. Implement insertion, deletion and display operations on circular doubly linked list. <br/>
                    7. Implement the following operations on a binary search tree: <br/>
                    a) Insert a node b) Delete a node c) Traversals - In-order, Pre order, & Post order <br/>
                    8. General Tree to Binary Tree Conversion. 
					</p>
					
					<p className='half-lab'>
                    9. Implement the following operations on B-tree: <br/>
                    a) Insert a node b) Delete a node c) Display using preorder traversal <br/>
                    10. Implement the following operations on trie structure: <br/>
                    a) Insert a node b) Delete a node c) Search for a node d) Display using preorder traversal <br/>
                    11. Sort the list of numbers using Heap sort and Merge Sorting Techniques. <br/>
                    12. Implement the following three searching techniques for a set of numbers. <br/>
                    a) Linear Search b) Binary Search c) Hash Search using modulo division method (Chained Hashing) <br/>
                    13. Traverse the nodes of the graph using BFS and DFS. <br/>
                    14. Minimum Cost Spanning Tree using Prim’s algorithm.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGDataStructuresLab;