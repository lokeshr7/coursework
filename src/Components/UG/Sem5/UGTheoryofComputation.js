import React from 'react';

class UGTheoryofComputation extends React.Component{

	render(){

		return(

			<div>

			    <h3>THEORY OF COMPUTATION</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to discuss different classes of formal languages in Chomsky
					hierarchy, explain their properties and to design the acceptor machines for those languages.
					The learner will also be able to develop Turing machines for arithmetic tasks and understand
					the various other models and computational complexity classes.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction:</strong> Preliminaries and notations - Basic concepts - applications.
					<strong> Finite Automata:</strong> Deterministic FA - Non-deterministic FA - Equivalence - Minimization.
					<strong> Regular languages and regular grammars:</strong> Relation between regular 
					languages and regular expressions - Regular grammars.
					<strong> Properties of Regular Languages:</strong> Closure properties - Identifying non regular languages.
					<strong> JFLAP:</strong> Construction of automata.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Context Free Languages:</strong> Context free grammars - parsing and ambiguity 
					- Context-free grammars and programming languages.
					<strong> Simplification and Normal Forms:</strong> Transformations -
					Chomsky and Greibach normal forms - membership algorithm for CFG.
					<strong> JFLAP:</strong> Conversion automata to grammar.
					<strong> Push Down Automata:</strong> Non-Deterministic PDA - PDA, and CFL -
					Deterministic PDA and deterministic CFL - Grammars for deterministic CFL.
					<strong> JFLAP:</strong> Construction of PDA.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Properties of CFL:</strong> Pumping Lemma for CFL, 
					Closure properties and decision algorithm for CFL.
					<strong> Turing Machines:</strong> The Standard Turing Machine 
					- combining TM for complicated tasks - Turing’s thesis.
					<strong> JFLAP:</strong> Construction of TM.
					<strong> Other Models of TM:</strong> Minor variations on TM - TM
					with complex storage - Non-deterministic TM - 
					Universal TM - Linear bounded automata.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>A hierarchy of formal languages and automata:</strong> Recursive and 
					recursive enumerable languages - unrestricted grammars 
					- context sensitive grammars and languages - Chomsky Hierarchy.
					<strong> Limits of algorithmic computation:</strong> problems that can't be solved by TM -
					Undecidable problems for recursively enumerable languages - post correspondence problem -
					Undecidable problems for CFL.
					<strong> Other Models of Computation:</strong> Recursive function, Post
					systems, Rewriting Systems. An Introduction to computational complexity.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. Peter Linz, “An Introduction to Formal Languages and Automata”, 5th Edition, Jones and
					Bartle Learning International, United Kingdom, 2011.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. John E. Hopcroft, Rajeev Motwani, and Jeffery D. Ullman, “Introduction to Automata Theory,
					Languages and Computation”, 3rd Edition, Pearson Education, 2007.<br/>
					2. Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D. Ullman, “Compilers Principles,
					Techniques, & Tools”, Pearson Education, 2007.<br/>
					3. Susan H. Rodger and Thomas W. Finley, “JFLAP: An Interactive Formal Languages and
					Automata Package”, Jones & Bartlett Publishers, Sudbury, MA, 2006.<br/>
					4. Michael Sipser, “Introduction to the theory of computation”, 2nd Edition, Thomson Course
					Technology, 2006.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGTheoryofComputation;