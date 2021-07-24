import React from 'react';

class UGDatabaseManagementSystems extends React.Component{

	render(){

		return(

			<div>

			    <h3>DATABASE MANAGEMENT SYSTEMS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					To help the learner understand the concepts, techniques, 
					query languages used in Database Management Systems.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction:</strong> Data - Database - Characteristics of the Database Approach
					- Actors on the scene - Advantages - Data models, Schemas and Instances
					- Three Schema Architecture and Data Independence - Database Languages and Interfaces
					- Database System Environment - Classification of DBMS.
					<strong> Data Modeling:</strong> Data modeling using the ER model - 
					Enhanced ER modeling - UML Class diagrams.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>SQL:</strong> Introduction - Creating Tables and Inserting Rows,
					Selection, Update and Delete - Operations - Projection - Joins - Sub queries,
					nesting and correlated Sub queries - Grouping - Sorting Set operations-Aggregation
					and Built-In-Functions - Working with Date Data type, Synonyms, Views, Sequences, Indexes.
					<strong> PL/SQL:</strong> General Structure, Control statements,
					Simple Programs, Cursors, Procedures and Functions, Triggers, Exception Handling.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Relational Database Design:</strong> Functional Dependency - First, Second and Third
					Normal Forms - BCNF - Multi valued Dependency and Fourth Normal Form - 
					Join Dependency and Fifth Normal Form.
					<strong> Transaction Processing Concepts:</strong> Introduction to Transaction Processing - 
					Transaction and System Concepts - Characterizing schedules - Concurrency Control Techniques.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Introduction to Non-Relational Databases:</strong> CouchDB: Different Data model
					- Replication - Eventual consistency - Data: Local, Remote, Everywhere - Deployment and 
					Performance. CouchDB Basics: Futon - Populating a Simple Database - HTTP Operations
					- Errors - HTTP Headers - HTTP URL Paths - JSON - Documents. Design Documents - 
					Creating Design documents - Shows - Views - Lists.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. R. Elmasri and S. B. Navathe. Fundamentals of Database Systems.
					Addison Wesley: 6th Edition, 2010 (Unit I, II, III).<br/>
					2. Martin C. Brown. Getting Started with CouchDB: Extreme Scalability 
					at Your Fingertips. O'Reilly Publications: 2012 (Unit IV).
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Henry F. Korth, Abraham Silberschat and Sudarshan. Database 
					System Concepts. McGraw Hill: 6th Edition, 2010.<br/>
					2. S. K. Singh. Database Systems Concepts, Design and Applications. 
					Prentice Hall of India: 1st Edition, 2009.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGDatabaseManagementSystems;