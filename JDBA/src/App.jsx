import './App.css'
import About from './Components/About';
import Header from './Components/Header';
import Vision from './Components/Vision';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import BadmintonAssociations from './Components/Other';

function App() {
  

  return (
    <>
      <Header></Header>
      <Vision></Vision>
      <About></About>
      <Tournaments></Tournaments>
      <BadmintonBasics></BadmintonBasics>
      <BadmintonAssociations></BadmintonAssociations>
    </>
  )
}

export default App
