import React from 'react';

class UGComputerAidedDrawingLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPUTER AIDED DRAWING LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    To train the students to create simple 
                    engineering designs and draft models/figures interactively
                    using AutoCAD Software.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Introduction to AutoCAD. <br/>
                    2. Basic commands of AutoCAD. <br/>
                    3. Modifying commands. <br/>
                    4. Editing commands. <br/>
                    5. Changing Object Properties. <br/>
                    6. Text and Dimensioning.
					</p>
					
					<p className='half-lab'>
                    7. Drawing Information. <br/>
                    8. Orthographic and Isometric Drawing. <br/>
                    9. 3-D Drawing. <br/>
                    10. 3-D Model: <br/>
                    a) Wire frame model b) Surface model c) Solid Model
					</p>
		
				</div>
				<hr/>

                <div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
                    1. Gopalakrishnan K. R. 1983 Engineering Drawing 
                    (I and II) Subhas Stores, Avenue Road,
                    Bangalore, 2008. <br/>
                    2. Natararjan K. V. , A text book of Engineering 
                    Drawing, Dhanalakshmi Publications, Chennai,
                    2008. <br/>
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
                    1. Parkinson, A. C. Intermediate Engineering Drawings. ELBS. 2009. <br/>
                    2. Venugopal K. , Engineering Drawing and Graphics, New age international (P) Ltd. ,
                    Chennai, 2010. <br/>
                    3. Narayana K. L. , Kannaiah P. , Venkata Reddy K. , Machine Drawing, New Age
                    Internations, (P) Ltd. , Chennai, 2007. <br/>
                    4. M. B. Shah and B. C. Rana. Engineering Drawing, Pearson Publications, 2010. <br/>
                    5. Dhananjay AJolhe, Engineering Graphics, McGraw-Hill Publishing Company, Ltd, 2009.
					</p>
				</div>
				<hr/>
 
            

			</div>
		)
	}
}

export default UGComputerAidedDrawingLab;