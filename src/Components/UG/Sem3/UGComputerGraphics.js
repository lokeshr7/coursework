import React from 'react';

class UGComputerGraphics extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPUTER GRAPHICS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					To help the learner understand the concepts and algorithms 
					of computer graphics for 2D and 3D objects.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction:</strong> A Survey of Computer Graphics, Overview of graphics 
					systems - Raster and Random Scan displays, Raster and 
					random scan systems.
					<strong> Output primitives:</strong> Points and lines, Line Drawing Algorithms, Circle and Ellipse 
					Generating algorithms, Pixel addressing, Scan line polygon 
					fill algorithm, boundary fill and flood-fill algorithms. Attributes 
					of Output Primitives - Curve attributes, Color and grayscale levels, 
					Area fill and bundled attributes.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>2-D Geometric transformations:</strong> Translation, scaling, rotation, reflection and shearing 
					transformations, matrix representations and homogeneous 
					coordinates, composite transformations.
					<strong> 2-D Viewing and Clipping:</strong> The viewing pipeline, viewing coordinate reference frame, 
					window to view-port coordinate transformation, Point clipping, 
					Line clipping - Cohen-Sutherland, Liang-Barsky and NLN line 
					clipping algorithms, Sutherland-Hodgeman and Weiler-Atherton 
					polygon clipping algorithms, Text Clipping, Exterior Clipping.
					Transform Techniques - acceptance rejection technique - special properties.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>3-D object representation:</strong> 3-D concepts, Polygon surfaces, quadric surfaces, 
					Bezier curve and B-Spline curves, Bezier and 
					B-Spline surfaces, CSG, Octrees.
					<strong> 3-D Geometric transformations:</strong> Translation, rotation, scaling, reflection and 
					shearing transformations, composite transformations.
					<strong> 3-D viewing:</strong> Viewing pipeline, viewing coordinates, Parallel 
					and Perspective projections and clipping.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Hidden Surface Elimination:</strong> Back Face Detection - Z Buffer Algorithm - A Buffer 
					algorithm - Scan Line Algorithm - Painter’s Algorithm.
					<strong> Surface-Rendering Methods:</strong> Light Sources, Polygon-rendering methods.
					<strong> Computer animation:</strong> Design of animation sequence, general computer animation 
					functions, raster animation, computer animation languages, 
					key frame systems, motion specifications.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. Donald Hearn and Pauline Baker. Computer Graphics C version. 
					Dorling Kindersley (India) Pvt. Ltd: 2nd Edition, 2009.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Zhigand Xiang and Roy Plastock. Computer Graphics. 
					Tata McGraw Hill: 2nd Edition, 2000.<br/>
					2. Foley, VanDam, Feiner and Hughes. Computer Graphics 
					Principles & Practice. Addison Wesley Professional: 2nd Edition, 1995.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGComputerGraphics;