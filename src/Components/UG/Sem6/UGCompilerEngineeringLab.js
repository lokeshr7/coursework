import React from 'react';

class UGCompilerEngineeringLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPILER ENGINEERING LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    This course will help the learner to 
                    design context free grammar, construct 
                    regular expressions and implement several 
                    phases in compilation process like scanning, 
                    parsing, Adhoc syntax directed translation, 
                    code generation, code optimization using Lex & YACC tools.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Construct an NFA for the given regular expression using Thomson’s algorithm.<br/>
                    2. Convert the NFA into a DFA using subset construction algorithm.<br/>
                    3. Minimize the DFA using Hopcroft’s algorithm.<br/>
                    4. Develop a scanner using LEX for recognizing the token types in a given C program.<br/>
                    5. Implement a bottom up parser LR(1) to decide whether the 
                    input string is valid or not (Context-Free Grammar, 
                    Action and GOTO tables are supplied as inputs).<br/>
                    6. Develop a parser for all branching statements using LEX & YACC (inputs in ‘c’ language).<br/>
                    7. Develop a parser for all loop statements using LEX & YACC (inputs in ‘c’ language).<br/>
                    8. Develop a parser for complex expressions with 
                    procedure calls and array references using LEX & YACC (inputs in ‘c’ language).
					</p>
					
					<p className='half-lab'>
                    9. Implement adhoc syntax directed translation 
                    for evaluating a compound expression with arithmetic, logical and relational operators.<br/>
                    10. Use LEX and YACC to create two translators that would translate 
                    a given input (compound expression used in experiment 8) into three-address
                    and postfix intermediate codes. The output of the translators should be files.<br/>
                    11. Write an optimizer pass that does common-sub expression elimination on the intermediate code.<br/>
                    12. Write a back end that traverses the three address intermediate code and generates x86 code.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGCompilerEngineeringLab;