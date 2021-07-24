import React from 'react';

class UGCryptographyNetworkSecurity extends React.Component{

	render(){

		return(

			<div>

			    <h3>CRYPTOGRAPHY & NETWORK SECURITY</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					This course will help the learner to question 
					the need for cryptographic and network security 
					algorithms, apply security principles to system design. 
					This course will also help the learner to identify and 
					investigate network security threats.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>Overview:</strong> Computer Security Concepts - 
					OSI Security Architecture - Security Attacks - 
					Security Services - Security Mechanisms - 
					Model for Network Security. 
					Classical Encryption Techniques: Symmetric cipher 
					model - Substitution Techniques - Transposition Techniques 
					- Rotor Machines - Steganography.
					<strong> Block Ciphers and DES:</strong> Block cipher principles - 
					DES - Example - Strength of DES - Differential and Linear 
					Cryptanalysis - Block Cipher Design Principles - 
					implementation of cryptographic algorithms in network processor.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Basic Concepts in Number Theory and Finite Fields:</strong> Divisibility and 
					Division Algorithm - Euclidean Algorithm - Modular Arithmetic - 
					Groups, Rings and Fields - Finite Fields of the form GF(p) - 
					Polynomial Arithmetic - Finite Fields of the form GF(2<sup>n</sup>).
					<strong> Advanced Encryption Standard:</strong> Origin of AES - 
					AES Structure - AES Round Function - AES Key Expansion - Example - AES Implementation.
					<strong> Block Cipher Operation:</strong> Multiple Encryption and 
					Triple DES - ECB - CBC - CFM - OFM - Counter Mode - XTS mode.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Public-Key Cryptography:</strong> Principles of Public Key 
					Cryptosystem - RSA Algorithm. Other Public Key Cryptosystem: 
					Diffie-Hellman Key Exchange - ElGamal Cryptosystem - 
					Elliptic curve arithmetic - Elliptic curve cryptography.
					<strong> System Security:</strong> Basics of hacking - intruders - 
					viruses - worms - Firewall design and its types - Trusted Systems - 
					Antivirus techniques.
					<strong> Cyber Law and Security:</strong> Laws, Investigation and Ethics: 
					Cyber Crime, Information Security and Law, Types & overview of Cyber Crimes, 
					Cyber Law Issues in E-Business Management Overview of Indian IT Act, 
					Ethical Issues in Intellectual property rights, Copy Right, Patents, 
					Data privacy and protection, Domain Name, Software piracy, 
					Plagiarism, Issues in ethical hacking.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Cryptographic Hash Functions:</strong> Applications - Two Simple Hash functions - 
					Requirements and Security - Hash functions based on CBC - SHA - SHA-3.
					<strong> Message Authentication Codes:</strong> Message Authentication Requirements, 
					functions - Message Authentication Codes - Security of MACs - 
					MACs based on Hash functions and Block Ciphers - CCM and GCM.
					<strong> Digital Signatures:</strong> ElGamal Digital Signature Scheme - Schnorr Digital Signature Scheme - DSS.
					<strong> Transport Level Security:</strong> Web Security issues - SSL - TLS - HTTPS - SSH.
					<strong> Electronic Mail Security:</strong> Pretty Good Privacy - S/MIME - Domain Keys Identified Mail.
					<strong> IP Security:</strong> Overview - IP Security Policy - 
					Encapsulating Security pay load - Combining Security Associations - Internet key exchange.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. William Stallings, “Cryptography and Network 
					Security: Principles and Practice”, Pearson Education, 6th Edition, 2014.
					2. Vivek Sood, “Cyber Laws Simplified”, Tata McGraw Hill, 2001.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Bruce Schneier, ”Applied Cryptography: Protocols, 
					Algorithms, and Source Code in C”, John Wiley & Sons, 2nd Edition, 2012.<br/>
					2. Alfred J. Menezes, Paul C. Van Oor Schot 
					and Scott A. Van Stone, “Handbook of Applied Cryptography”, CRC Press, 1996.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGCryptographyNetworkSecurity;