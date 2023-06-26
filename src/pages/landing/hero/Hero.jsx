import bgWave from '../../../assets/svgs/bgWave.svg'
import MyDetails from './MyDetails'
import MyPhoto from './MyPhoto'
const Hero = () => {
  return (
    <div
      className="h-[calc(100vh-10vh)] bg-no-repeat bg-cover lg:py-20 overflow-y-auto flex items-center justify-center"
      style={{ backgroundImage: `url(${bgWave})` }}
    >
      <div className="container flex flex-col lg:flex-row justify-center gap-5 items-center mx-auto bg-base-100 bg-opacity-60 lg:rounded-lg py-20 px-5 lg:px-20 text-white">
        <MyPhoto />
        <MyDetails />
      </div>
    </div>
  )
}

export default Hero
