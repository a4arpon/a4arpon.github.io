import MyDetails from './MyDetails'
import MyPhoto from './MyPhoto'
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20 py-20 p-3">
        <MyPhoto />
        <MyDetails />
      </div>
    </div>
  )
}

export default Hero
