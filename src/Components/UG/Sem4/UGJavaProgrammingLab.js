import React from 'react';

class UGJavaProgrammingLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>JAVA PROGRAMMING LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To help the learner to develop Java Applications 
                    and Applets implementing object oriented techniques.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Program to demonstrate Polymorphism. <br/>
                    2. Program to demonstrate Inheritance. <br/>
                    3. Program to demonstrate Interfaces and Packages. <br/>
                    4. Program to demonstrate Exception handling. <br/>
                    5. Program to demonstrate Multithreading. <br/>
                    6. Program using ArrayList.
					</p>
					
					<p className='half-lab'>
                    7. Program using Set, Comparable interface and Comparator class. <br/>
                    8. Program to create applet with AWT controls. <br/>
                    9. Program to create Frame with AWT controls. <br/>
                    10. Program using Layout Managers. <br/>
                    11. Program to demonstrate file I/O. <br/>
                    12. Program using JDBC.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGJavaProgrammingLab;