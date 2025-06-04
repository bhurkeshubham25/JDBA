import './App.css'
import About from './Components/About';
import Header from './Components/Header';
import Vision from './Components/Vision';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import Sponsors from './Components/Sponsors';
import SignIn from './Components/Signin';

function App() {
  

  return (
    <>
      <Header></Header>
      <Vision></Vision>
      <About></About>
      <Tournaments></Tournaments>
      <BadmintonBasics></BadmintonBasics>
      <Sponsors></Sponsors>
      <SignIn></SignIn>
    </>
  )
}

export default App;
