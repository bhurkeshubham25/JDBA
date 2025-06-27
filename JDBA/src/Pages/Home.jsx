
import About from '../Components/About'
import Vision from '../Components/Vision'
import Tournaments from '../Components/Tournaments'
import Carousel from '../Components/carousel'
import BadmintonAssociations from '../Components/Other'

const Home = () => {
  return (
    <div>
      <Vision></Vision>
      <About></About>
      <Tournaments></Tournaments>
      <Carousel></Carousel>
      <Sponsors></Sponsors>
      <BadmintonAssociations></BadmintonAssociations>
    </div>
  )
}

export default Home
