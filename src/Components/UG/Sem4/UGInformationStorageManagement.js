import React from 'react';

class UGInformationStorageManagement extends React.Component{

	render(){

		return(

			<div>

			    <h3>INFORMATION STORAGE & MANAGEMENT</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to 
					identify and develop shareable and secured information storage systems.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Introduction to Information Storage and Management: </strong> Information Storage 
					– Evolution of Storage Technology and Architecture – 
					Data Center Infrastructure - Key challenges in managing information – 
					Information lifecycle. 
					<strong> Storage system environment:</strong> Components - 
					Disk drive performance.
					<strong> RAID:</strong> Implementation – Array components – 
					levels – Comparison – Hot spares.
					<strong> Intelligent Storage System:</strong> Components – Intelligent Storage Array.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>DAS and SCSI:</strong> DAS Types – Benefits
					– Limitations – Disk drive interface – 
					Introduction to parallel SCSI – SCSI Command model.
					<strong> Storage Area Networks:</strong> SAN and its evolution – Components – 
					FC overview – Connectivity – Ports – 
					Architecture – Login types – Topologies – Zoning.
					<strong> Network Attached Storage:</strong> General Purpose servers vs 
					NAS devices – NAS Benefits – Implementation – File sharing protocols 
					– I/O operations, Factors affecting performance and availability. 
					iSCSI – FCIP.
					<strong> CAS Storage:</strong> Types – Features – Benefits – Architecture - Examples.
					<strong> Storage Visualization:</strong> Forms
					– SNIA – Taxonomy - Configuration - Challenges - Types.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Business Continuity:</strong> Introduction - Information Availability – BC Terminology – Planning
					lifecycle - Failure analysis – Impact analysis – Technology solutions.
					<strong> Backup and Recovery:</strong> Backup in NAS Environments - Backup Technologies.
					<strong> Local Replication:</strong> Source - Uses - Data Consistency - 
					Replication Technologies - Restore and Restart consideration - 
					Creating multiple replicas - Management Interface.
					<strong> Remote Replication:</strong> Modes - Technologies - Network Infrastructure.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Securing the Storage Infrastructure:</strong> Storage security framework - 
					Risk Triad - Storage security domains - Implementations.
					<strong> Managing the Storage Infrastructure:</strong> Monitoring – 
					Management activities - Challenges - Developing an Ideal solution.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. EMC Corporation. Information Storage and Management, WileyIndia, 2009.<br/>
					2. Robert Spalding. Storage Networks: The Complete Reference, Tata McGraw Hill, Osborne, 2003.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Marc Farley. Building Storage Networks, Tata McGraw Hill, Osborne, 2001.<br/>
					2. Meeta Gupta. Storage Area Network Fundamentals, Pearson Education, 2002.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGInformationStorageManagement;