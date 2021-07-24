import React from 'react';

class UGCompilerEngineering extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPILER ENGINEERING</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to explain various phases in 
					translating source language to target language and 
					design scanners, construct parse tables, attribute 
					grammars and ad hoc syntax directed translation. 
					This course will also help the learner to classify and 
					identify the opportunities of optimization.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Overview:</strong> Introduction - Compiler structure - 
					Overview of translation Scanners: Introduction - 
					Recognizing words - Regular expressions - 
					Regular expressions to scanners - Implementing scanners.
					<strong> Scanners:</strong> Introduction - Recognizing words - 
					Regular expressions - Regular expressions to scanners - Implementing scanners.
					<strong> Parsers:</strong> Introduction - Expressing syntax - 
					Review of top down parsing - Bottom up parsing.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Lex and YACC:</strong> Using Lex, Using YACC.
					<strong> Context Sensitive Analysis:</strong> Introduction to type systems - 
					Attribute grammar framework - Adhoc syntax directed translation.
					<strong> Intermediate Representations:</strong> Introduction - 
					Graphical IRs - Linear IRs - Mapping values to names - Symbol tables.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Introduction to Optimization:</strong> Introduction - Background - 
					Scope of optimization - Local optimization-Regional optimization - 
					Global optimization - Inter procedural optimization.
					<strong> Data flow analysis:</strong> Introduction - Iterative data flow analysis 
					- SSA form - Inter procedural analysis.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Instruction Selection:</strong> Introduction - Code generation 
					- Extending the Simple Treewalk scheme Instruction selection via 
					Tree Pattern matching - Instruction selection via Peephole Optimization.
					<strong> Instruction Scheduling:</strong> Instruction Scheduling problems - 
					Local List scheduling - Regional Scheduling.
					<strong> Register Allocation:</strong> Background issues - 
					Local Register Allocation and Assignment - Global register Allocation and Assignment.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. Keith D. Cooper and Linda Torczon, “Engineering a Compiler”, 
					Morgan Kauffman Publishers, 2nd Edition, 2012.<br/>
					2. Levine, John R. , Tony Mason, and Doug Brown. 
					Lex & yacc", O'Reilly Media, Inc. , 2nd Edition, 2013 (UNIT-II - Lex & YACC).
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Dick Grune, Kees Van Reewijk, Henry E.Bal, C. J. H. Jacobs, Koen G. 
					Langendoen, “Modern Compiler Design”, Springer, 2nd Edition, 2012.<br/>
					2. Alfred V. Aho, Ravi Sethi, Jeffrey D. Ullman, Monica S. Lam, 
					“Compilers: Principles, Techniques and Tools”, 
					Pearson Education, 2nd Edition, 2006.<br/>
					3. Das, Vinu V. “Compiler Design using FLEX and YACC”, 
					Prentice Hall of India Learning Pvt. Ltd. , 2007.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGCompilerEngineering;