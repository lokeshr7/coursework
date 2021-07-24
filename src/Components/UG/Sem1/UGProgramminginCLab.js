import React from 'react';

class UGProgramminginCLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>PROGRAMMING IN C LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To help the learners understand the 
                    underlying features of C language and impart skills in
                    writing programs for solve a variety of problems.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Programs using Input, output and assignment statements. <br/>
                    2. Programs using Branching statements. <br/>
                    3. Programs using Looping statements. <br/>
                    4. Programs using Functions. <br/>
                    5. Programs using Arrays. <br/>
                    6. Programs using Structures.
					</p>
					
					<p className='half-lab'>


                    7. Programs using strings. <br/>
                    8. Programs using Pointers (both data pointers and function pointers). <br/>
                    9. Programs using dynamic memory allocation. <br/>
                    10. Programs using Recursion. <br/>
                    11. Programs using Files. <br/>
                    12. Dividing a large program into multiple files.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGProgramminginCLab;