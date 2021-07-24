import React from 'react';

class UGComputerNetworksLab extends React.Component{

	render(){

		return(

			<div>

			    <h3>COMPUTER NETWORKS LAB</h3>

			    <hr/>
			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    OBJECTIVE
				    </h4>
				    <p>
                    This course will help the learner to 
                    demonstrate the concepts of computer networks and to develop
                    applications.
					</p>
				</div>
				<hr/>

			    <div className='wrapper-lab'>
				    <h4 className='middle-lab'>
				    EXERCISES 
				    </h4>
					<p className='half-lab' style={{marginRight: "50px"}}>
                    1. Simple network programs: <br/>
                    a) Program to find IP address of a computer. <br/>
                    b) Program for using Ping command. <br/>
                    c) Program to send messages to other users in a network. <br/>
                    2. Programs for information exchange between client and server using TCP and UDP. <br/>
                    3. Secured communication through encryption and decryption of messages. <br/>
                    4. Serial Communication between PCs (Character Transfer) via RS 232. <br/>
                    5. a) Tuning the TCP Kernel: Use the sysctl command to read and manipulate the various
                    TCP parameters. eg. sysctl -a , sysctl -p and sysctl -w. <br/>
                    b) TCP Keep alive time: Display the current TCP keepalive time value using the sysctl
                    command and change that using echo command - e.g echo ’3600’ >
                    /proc/sys/net/ipv4/tcpkeepalive time. 
					</p>
					
					<p className='half-lab'>
                    6. Take a sample subnet graph with weights indicating delay between nodes.
                    Now obtain the routing table at each node using distance vector routing. <br/>
                    7. Program for remote procedure call under client server environment (RMI). <br/>
                    8. Implement data link layer framing method bit stuffing. <br/>
                    9. a) Program for error detection using CRC. <br/>
                    b) Program for error correction using Hamming Code. <br/>
                    11. Implementation of Sliding window protocols - go back n and selective repeat. <br/>
                    12. Simulation of wired and wireless networks. <br/>
                    13. Network performance evaluation using simulator. <br/>
                    14. Study of SASTRA network infrastructure.
					</p>
		
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGComputerNetworksLab;