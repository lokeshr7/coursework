import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error';

import UG from './Components/UG/UG';

import UGEngineeringMathematics1 from './Components/UG/Sem1/UGEngineeringMathematics1';
import UGProgramminginC from './Components/UG/Sem1/UGProgramminginC';
import UGEngineeringPhysics from './Components/UG/Sem1/UGEngineeringPhysics';
import UGEngineeringMechanics from './Components/UG/Sem1/UGEngineeringMechanics';
import UGBasicCivilEngineering from './Components/UG/Sem1/UGBasicCivilEngineering';
import UGBasicMechanicalEngineering from './Components/UG/Sem1/UGBasicMechanicalEngineering';
import UGEngineeringPractice from './Components/UG/Sem1/UGEngineeringPractice';
import UGProgramminginCLab from './Components/UG/Sem1/UGProgramminginCLab';
import UGEngineeringPhysicsLab from './Components/UG/Sem1/UGEngineeringPhysicsLab';

import UGTechnicalCommunication from './Components/UG/Sem2/UGTechnicalCommunication';
import UGEngineeringMathematics2 from './Components/UG/Sem2/UGEngineeringMathematics2';
import UGProgramminginCPP from './Components/UG/Sem2/UGProgramminginCPP';
import UGEngineeringChemistry from './Components/UG/Sem2/UGEngineeringChemistry';
import UGEngineeringDrawing from './Components/UG/Sem2/UGEngineeringDrawing';
import UGElectricalSciences from './Components/UG/Sem2/UGElectricalSciences';
import UGProgramminginCPPLab from './Components/UG/Sem2/UGProgramminginCPPLab';
import UGComputerAidedDrawingLab from './Components/UG/Sem2/UGComputerAidedDrawingLab';

import UGEngineeringMathematics3 from './Components/UG/Sem3/UGEngineeringMathematics3';
import UGDatabaseManagementSystems from './Components/UG/Sem3/UGDatabaseManagementSystems';
import UGDataStructures from './Components/UG/Sem3/UGDataStructures';
import UGDigitalElectronics from './Components/UG/Sem3/UGDigitalElectronics';
import UGDiscreteMathematics from './Components/UG/Sem3/UGDiscreteMathematics';
import UGComputerGraphics from './Components/UG/Sem3/UGComputerGraphics';
import UGDataStructuresLab from './Components/UG/Sem3/UGDataStructuresLab';
import UGDigitalElectronicsLab from './Components/UG/Sem3/UGDigitalElectronicsLab';

import UGEngineeringMathematics4 from './Components/UG/Sem4/UGEngineeringMathematics4';
import UGComputerOrganizationArchitecture from './Components/UG/Sem4/UGComputerOrganizationArchitecture.js';
import UGMicroprocessorsMicrocontrollers from './Components/UG/Sem4/UGMicroprocessorsMicrocontrollers';
import UGJavaProgramming from './Components/UG/Sem4/UGJavaProgramming';
import UGObjectOrientedAnalysisDesign from './Components/UG/Sem4/UGObjectOrientedAnalysisDesign';
import UGInformationStorageManagement from './Components/UG/Sem4/UGInformationStorageManagement';
import UGMicroprocessorsMicrocontrollersLab from './Components/UG/Sem4/UGMicroprocessorsMicrocontrollersLab';
import UGJavaProgrammingLab from './Components/UG/Sem4/UGJavaProgrammingLab';

import UGDesignAnalysisofAlgorithms from './Components/UG/Sem5/UGDesignAnalysisofAlgorithms';
import UGTheoryofComputation from './Components/UG/Sem5/UGTheoryofComputation';
import UGOperatingSystems from './Components/UG/Sem5/UGOperatingSystems';
import UGComputerNetworks from './Components/UG/Sem5/UGComputerNetworks';
import UGEngineeringMathematics5 from './Components/UG/Sem5/UGEngineeringMathematics5';
import UGRobotics from './Components/UG/Sem5/UGRobotics';
import UGOperatingSystemsLab from './Components/UG/Sem5/UGOperatingSystemsLab';
import UGComputerNetworksLab from './Components/UG/Sem5/UGComputerNetworksLab';

import UGCryptographyNetworkSecurity from './Components/UG/Sem6/UGCryptographyNetworkSecurity';
import UGSoftwareEngineering from './Components/UG/Sem6/UGSoftwareEngineering';
import UGCompilerEngineering from './Components/UG/Sem6/UGCompilerEngineering';
import UGArtificialIntelligence from './Components/UG/Sem6/UGArtificialIntelligence';
import UGMobileComputing from './Components/UG/Sem6/UGMobileComputing';
import UGPythonProgramming from './Components/UG/Sem6/UGPythonProgramming';
import UGCompilerEngineeringLab from './Components/UG/Sem6/UGCompilerEngineeringLab';
import UGSoftwareEngineeringLab from './Components/UG/Sem6/UGSoftwareEngineeringLab';

import UGBigDataAnalytics from './Components/UG/Sem7/UGBigDataAnalytics';
import UGCloudComputing from './Components/UG/Sem7/UGCloudComputing';
import UGParallelDistributedSystems from './Components/UG/Sem7/UGParallelDistributedSystems';
import UGEmbeddedSystems from './Components/UG/Sem7/UGEmbeddedSystems';
import UGInternetofThings from './Components/UG/Sem7/UGInternetofThings';
import UGEmbeddedSystemsLab from './Components/UG/Sem7/UGEmbeddedSystemsLab';
import UGParallelDistributedSystemsLab from './Components/UG/Sem7/UGParallelDistributedSystemsLab';

import UGECommerce from './Components/UG/Sem8/UGECommerce';
import UGAnimationTechniques from './Components/UG/Sem8/UGAnimationTechniques';
import UGInformationHiding from './Components/UG/Sem8/UGInformationHiding';

import PG from './Components/PG/PG';

function App() {
  return (
    <div>
	    <Routes>
		    <Route path="/coursework" element={<Home/>} exact />
			
		    <Route path="/UG" element={<UG/>} />

			<Route path="/UGEngineeringMathematics-I" element={<UGEngineeringMathematics1/>} />
			<Route path="/UGProgramminginC" element={<UGProgramminginC/>} />
			<Route path="/UGEngineeringPhysics" element={<UGEngineeringPhysics/>} />
			<Route path="/UGEngineeringMechanics" element={<UGEngineeringMechanics/>} />
			<Route path="/UGBasicCivilEngineering" element={<UGBasicCivilEngineering/>} />
			<Route path="/UGBasicMechanicalEngineering" element={<UGBasicMechanicalEngineering/>} />
			<Route path="/UGEngineeringPractice" element={<UGEngineeringPractice/>} />
			<Route path="/UGProgramminginCLab" element={<UGProgramminginCLab/>} />
			<Route path="/UGEngineeringPhysicsLab" element={<UGEngineeringPhysicsLab/>} />

			<Route path="/UGTechnicalCommunication" element={<UGTechnicalCommunication/>} />
			<Route path="/UGEngineeringMathematics-II" element={<UGEngineeringMathematics2/>} />
			<Route path="/UGProgramminginCPP" element={<UGProgramminginCPP/>} />
			<Route path="/UGEngineeringChemistry" element={<UGEngineeringChemistry/>} />
			<Route path="/UGEngineeringDrawing" element={<UGEngineeringDrawing/>} />
			<Route path="/UGElectricalSciences" element={<UGElectricalSciences/>} />
			<Route path="/UGProgramminginCPPLab" element={<UGProgramminginCPPLab/>} />
			<Route path="/UGComputerAidedDrawingLab" element={<UGComputerAidedDrawingLab/>} />

		    <Route path="/UGEngineeringMathematics-III" element={<UGEngineeringMathematics3/>} />
			<Route path="/UGDatabaseManagementSystems" element={<UGDatabaseManagementSystems/>} />
		    <Route path="/UGDataStructures" element={<UGDataStructures/>} />
		    <Route path="/UGDigitalElectronics" element={<UGDigitalElectronics/>} />
		    <Route path="/UGDiscreteMathematics" element={<UGDiscreteMathematics/>} />
		    <Route path="/UGComputerGraphics" element={<UGComputerGraphics/>} />
			<Route path="/UGDataStructuresLab" element={<UGDataStructuresLab/>} />
		    <Route path="/UGDigitalElectronicsLab" element={<UGDigitalElectronicsLab/>} />

			<Route path="/UGEngineeringMathematics-IV" element={<UGEngineeringMathematics4/>} />
			<Route path="/UGComputerOrganization&Architecture" element={<UGComputerOrganizationArchitecture/>} />
		    <Route path="/UGMicroprocessors&Microcontrollers" element={<UGMicroprocessorsMicrocontrollers/>} />
		    <Route path="/UGJavaProgramming" element={<UGJavaProgramming/>} />
		    <Route path="/UGObjectOrientedAnalysis&Design" element={<UGObjectOrientedAnalysisDesign/>} />
		    <Route path="/UGInformationStorage&Management" element={<UGInformationStorageManagement/>} />
			<Route path="/UGMicroprocessors&MicrocontrollersLab" element={<UGMicroprocessorsMicrocontrollersLab/>} />
		    <Route path="/UGJavaProgrammingLab" element={<UGJavaProgrammingLab/>} />

			<Route path="/UGDesign&AnalysisofAlgorithms" element={<UGDesignAnalysisofAlgorithms/>} />
			<Route path="/UGTheoryofComputation" element={<UGTheoryofComputation/>} />
			<Route path="/UGOperatingSystems" element={<UGOperatingSystems/>} />
			<Route path="/UGComputerNetworks" element={<UGComputerNetworks/>} />
			<Route path="/UGEngineeringMathematics-V" element={<UGEngineeringMathematics5/>} />
			<Route path="/UGRobotics" element={<UGRobotics/>} />
			<Route path="/UGOperatingSystemsLab" element={<UGOperatingSystemsLab/>} />
			<Route path="/UGComputerNetworksLab" element={<UGComputerNetworksLab/>} />

			<Route path="/UGCryptography&NetworkSecurity" element={<UGCryptographyNetworkSecurity/>} />
			<Route path="/UGSoftwareEngineering" element={<UGSoftwareEngineering/>} />
			<Route path="/UGCompilerEngineering" element={<UGCompilerEngineering/>} />
			<Route path="/UGArtificialIntelligence" element={<UGArtificialIntelligence/>} />
			<Route path="/UGMobileComputing" element={<UGMobileComputing/>} />
			<Route path="/UGPythonProgramming" element={<UGPythonProgramming/>} />
			<Route path="/UGCompilerEngineeringLab" element={<UGCompilerEngineeringLab/>} />
			<Route path="/UGSoftwareEngineeringLab" element={<UGSoftwareEngineeringLab/>} />

			<Route path="/UGBigDataAnalytics" element={<UGBigDataAnalytics/>} />
			<Route path="/UGCloudComputing" element={<UGCloudComputing/>} />
			<Route path="/UGParallel&DistributedSystems" element={<UGParallelDistributedSystems/>} />
			<Route path="/UGEmbeddedSystems" element={<UGEmbeddedSystems/>} />
			<Route path="/UGInternetofThings" element={<UGInternetofThings/>} />
			<Route path="/UGEmbeddedSystemsLab" element={<UGEmbeddedSystemsLab/>} />
			<Route path="/UGParallel&DistributedSystemsLab" element={<UGParallelDistributedSystemsLab/>} />

			<Route path="/UGE-commerce" element={<UGECommerce/>} />
			<Route path="/UGAnimationTechniques" element={<UGAnimationTechniques/>} />
			<Route path="/UGInformationHiding" element={<UGInformationHiding/>} />

		    <Route path="/PG" element={<PG/>} />

		    <Route element={<Error/>} />
	    </Routes>
    </div>
  );
}

export default App;