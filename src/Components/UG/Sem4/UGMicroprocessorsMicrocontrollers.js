import React from 'react';

class UGMicroprocessorsMicrocontrollers extends React.Component{

	render(){

		return(

			<div>

			    <h3>MICROPROCESSORS & MICROCONTROLLERS</h3>

			    <hr/>
			    <div className='wrapper'>
				    <h4>
				    OBJECTIVE
				    </h4>
				    <p>
					To help the learner understand the architecture of x86 
					microprocessors and 8051 microcontroller with corresponding 
					assembly language programming.
					</p>
				</div>
				<hr/>

			    <div className='wrapper'>
				    <h4>
				    UNIT – I
				    </h4>
				    <p>
					<strong>8086/8088 Architecture:</strong> CPU Architecture – pin out – Bus Interface Unit 
					and Execution Unit – Prefetch and Instruction Queue CPU registers – 
					data registers – pointer and index registers – stack register. Memory space – stack and its function – 
					segmentation – segment registers – segment override – effective address – generating physical address. 
					Internal cyclic operation – timing diagram. Addressing modes – Register, 
					Immediate, Direct and Indirect Register Modes. 
					Instruction set of 8086/8088 – Instruction format – Groups – data transfer, arithmetic, logic, 
					branch and rotate groups – loop, compare and flag control instructions. Illustrative programs in 
					Assembly language covering the above groups – Assembler and assembly directives.
					</p>
				</div>
				<hr/>
				
				<div className='wrapper'>
					<h4>
				    UNIT – II
				    </h4>
					<p>
					<strong>Subroutines, Interrupts and Interfacing:</strong> Subroutines – 
					Call and Return commands – PUSH and POP instructions. Illustrative programs. 
					Interrupts in 8088 – Interrupt vector table – Interrupt service routine – 
					Programmed and Interrupt driven data transfer. Block transfer using DMA. 
					Minimum and Maximum Modes of 8088. 8288 bus controller – concept of multiprocessor 
					– basic ideas of 8087 numeric and 8089 I/O co-processors. Interfacing Memory with 8088 
					– Memory System design – Memory map – Interfacing 8255 PPI – 8255 Ports and port programming 
					– I/O and BSR Modes – Examples and problems. Simple DAC and ADC interfacing using 8255. 
					Interfacing 8253/8254 Timer – Modes of Timer - Timer/Counter programming – 
					Applications and examples of Timer - Major features of 80286, 
					386 and 486 processors and Atom processor.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - III
				    </h4>
					<p>
					<strong>Architecture of 8051 Microcontroller:</strong> Comparison of microcontroller 
					with general purpose microprocessor – 
					Major Microcontroller families – Overview of Intel, Atmel and PIC families. 
					Inside 8051 – internal ROM and RAM – stack – memory map – on-chip parallel 
					and serial ports – structure of RAM – SFR registers- Address table. Addressing 
					methods in 8051 – instruction groups – assembly language programming – 
					covering data transfer and arithmetic operations – logic and branch instruction 
					and their use in programs. Subroutines – CALL and RET instructions – PUSH and 
					POP commands – generation of time delay – concept of machine cycle. 
					Typical application programs. I/O Port – pin out description – Port 0 multiplexing 
					– Port 1 description – dual role of Port 2 and Port 3 pins. Use of Port 3 pins 
					for serials communication and interrupts – Bit addressability of ports - 
					Programs for I/O device control.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    UNIT - IV
				    </h4>
					<p>
					<strong>Timer and Interrupt Programming In 8051:</strong> Programming of 8051 timers – 
					Timer 0 and Timer 1 register – Modes 1 and 2 programming steps – 
					TCON register – calculations for specified time delay/frequency – 
					Event counter mode – Illustrative programs. Serials communication – 
					basics – simplex, duplex and half duplex transmission – Baud rate – 
					framing of data – RS232 standard –DB-9 pin connecter – 
					PCON and SCON registers – 8051 programming steps for 
					serials transmission / reception – Typical programs. 8051 Interrupts 
					– Interrupts vector table – timer based interrupt – serials communication 
					based interrupt – external interrupts – interrupt priority – 
					Illustrative programs Applications: Interfacing Keyboard and display 
					– Stepper Motor Control - Temperature monitoring and control – 
					measurement of period and phase angle. Waveform generation.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    TEXTBOOKS
				    </h4>
					<p>
					1. A. K. Ray and K. M. Burchandi Advanced Microprocessors and Peripherals, 
					2nd Edition, 19th Reprint, 2011.<br/>
					2. Venugopal K. R. Microprocessor x86 Programming, BPB Publications, 2003.<br/>
					3. M. A. Mazidi and J. G. Mazidi. The Microcontroller and Embedded system, 
					Pearson Education: 2000.<br/>
					4. AT89C51 Microcontroller Data Sheet and Application – Atmel Corporation.
					</p>
				</div>
				<hr/>

				<div className='wrapper'>
					<h4>
				    REFERENCES
				    </h4>
					<p>
					1. Krishna Kant. Microprocessors and Microcontrollers, Prentice Hall of India: 2007.<br/>
					2. Kenneth J. Ayala. The 8051 Microcontroller, Thomson Delmar learning , 3rd Edition, 2004.
					</p>
				</div>
				<hr/>

			</div>
		)
	}
}

export default UGMicroprocessorsMicrocontrollers;