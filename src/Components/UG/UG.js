import React from 'react';
import Sem1 from './Sem1/Sem1'
import Sem2 from './Sem2/Sem2'
import Sem3 from './Sem3/Sem3'
import Sem4 from './Sem4/Sem4'
import Sem5 from './Sem5/Sem5'
import Sem6 from './Sem6/Sem6'
import Sem7 from './Sem7/Sem7'
import Sem8 from './Sem8/Sem8'
import './UG.css';

class UG extends React.Component{

	render(){

		return(

			<div className="container">

				<div className="divider">

					<Sem1 />

					<Sem2 />
					
				</div>
					
				<div className="divider">

					<Sem3 />

					<Sem4 />

				</div>
					
				<div className="divider">

					<Sem5 />
				
					<Sem6 />

				</div>
					
				<div className="divider">

					<Sem7 />

					<Sem8 />

				</div>

			</div>
		)
	}
}

export default UG;