import './App.css';
import { Route, Switch} from 'react-router-dom';
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
	    <Switch>
		    <Route path="/coursework" component={Home} exact />
			
		    <Route path="/UG" component={UG} />

			<Route path="/UGEngineeringMathematics-I" component={UGEngineeringMathematics1} />
			<Route path="/UGProgramminginC" component={UGProgramminginC} />
			<Route path="/UGEngineeringPhysics" component={UGEngineeringPhysics} />
			<Route path="/UGEngineeringMechanics" component={UGEngineeringMechanics} />
			<Route path="/UGBasicCivilEngineering" component={UGBasicCivilEngineering} />
			<Route path="/UGBasicMechanicalEngineering" component={UGBasicMechanicalEngineering} />
			<Route path="/UGEngineeringPractice" component={UGEngineeringPractice} />
			<Route path="/UGProgramminginCLab" component={UGProgramminginCLab} />
			<Route path="/UGEngineeringPhysicsLab" component={UGEngineeringPhysicsLab} />

			<Route path="/UGTechnicalCommunication" component={UGTechnicalCommunication} />
			<Route path="/UGEngineeringMathematics-II" component={UGEngineeringMathematics2} />
			<Route path="/UGProgramminginCPP" component={UGProgramminginCPP} />
			<Route path="/UGEngineeringChemistry" component={UGEngineeringChemistry} />
			<Route path="/UGEngineeringDrawing" component={UGEngineeringDrawing} />
			<Route path="/UGElectricalSciences" component={UGElectricalSciences} />
			<Route path="/UGProgramminginCPPLab" component={UGProgramminginCPPLab} />
			<Route path="/UGComputerAidedDrawingLab" component={UGComputerAidedDrawingLab} />

		    <Route path="/UGEngineeringMathematics-III" component={UGEngineeringMathematics3} />
			<Route path="/UGDatabaseManagementSystems" component={UGDatabaseManagementSystems} />
		    <Route path="/UGDataStructures" component={UGDataStructures} />
		    <Route path="/UGDigitalElectronics" component={UGDigitalElectronics} />
		    <Route path="/UGDiscreteMathematics" component={UGDiscreteMathematics} />
		    <Route path="/UGComputerGraphics" component={UGComputerGraphics} />
			<Route path="/UGDataStructuresLab" component={UGDataStructuresLab} />
		    <Route path="/UGDigitalElectronicsLab" component={UGDigitalElectronicsLab} />

			<Route path="/UGEngineeringMathematics-IV" component={UGEngineeringMathematics4} />
			<Route path="/UGComputerOrganization&Architecture" component={UGComputerOrganizationArchitecture} />
		    <Route path="/UGMicroprocessors&Microcontrollers" component={UGMicroprocessorsMicrocontrollers} />
		    <Route path="/UGJavaProgramming" component={UGJavaProgramming} />
		    <Route path="/UGObjectOrientedAnalysis&Design" component={UGObjectOrientedAnalysisDesign} />
		    <Route path="/UGInformationStorage&Management" component={UGInformationStorageManagement} />
			<Route path="/UGMicroprocessors&MicrocontrollersLab" component={UGMicroprocessorsMicrocontrollersLab} />
		    <Route path="/UGJavaProgrammingLab" component={UGJavaProgrammingLab} />

			<Route path="/UGDesign&AnalysisofAlgorithms" component={UGDesignAnalysisofAlgorithms} />
			<Route path="/UGTheoryofComputation" component={UGTheoryofComputation} />
			<Route path="/UGOperatingSystems" component={UGOperatingSystems} />
			<Route path="/UGComputerNetworks" component={UGComputerNetworks} />
			<Route path="/UGEngineeringMathematics-V" component={UGEngineeringMathematics5} />
			<Route path="/UGRobotics" component={UGRobotics} />
			<Route path="/UGOperatingSystemsLab" component={UGOperatingSystemsLab} />
			<Route path="/UGComputerNetworksLab" component={UGComputerNetworksLab} />

			<Route path="/UGCryptography&NetworkSecurity" component={UGCryptographyNetworkSecurity} />
			<Route path="/UGSoftwareEngineering" component={UGSoftwareEngineering} />
			<Route path="/UGCompilerEngineering" component={UGCompilerEngineering} />
			<Route path="/UGArtificialIntelligence" component={UGArtificialIntelligence} />
			<Route path="/UGMobileComputing" component={UGMobileComputing} />
			<Route path="/UGPythonProgramming" component={UGPythonProgramming} />
			<Route path="/UGCompilerEngineeringLab" component={UGCompilerEngineeringLab} />
			<Route path="/UGSoftwareEngineeringLab" component={UGSoftwareEngineeringLab} />

			<Route path="/UGBigDataAnalytics" component={UGBigDataAnalytics} />
			<Route path="/UGCloudComputing" component={UGCloudComputing} />
			<Route path="/UGParallel&DistributedSystems" component={UGParallelDistributedSystems} />
			<Route path="/UGEmbeddedSystems" component={UGEmbeddedSystems} />
			<Route path="/UGInternetofThings" component={UGInternetofThings} />
			<Route path="/UGEmbeddedSystemsLab" component={UGEmbeddedSystemsLab} />
			<Route path="/UGParallel&DistributedSystemsLab" component={UGParallelDistributedSystemsLab} />

			<Route path="/UGE-commerce" component={UGECommerce} />
			<Route path="/UGAnimationTechniques" component={UGAnimationTechniques} />
			<Route path="/UGInformationHiding" component={UGInformationHiding} />

		    <Route path="/PG" component={PG} />

		    <Route component={Error} />
	    </Switch>
    </div>
  );
}

export default App;