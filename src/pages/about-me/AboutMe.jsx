import { Helmet } from 'react-helmet-async'
import bgWave from '../../assets/svgs/bgWave.svg'
import MyCourses from './MyCourses'
import MyEducation from './MyEducation'
import MyExperience from './MyExperience'
import MySkills from './MySkills'
import WhoAmI from './WhoAmI'
const AboutMe = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Shahin Islam Arpon</title>
      </Helmet>
      <div
        className="bg-cover flex items-center py-20"
        style={{ background: `url(${bgWave})` }}
      >
        <div className="container mx-auto flex flex-col gap-20 p-2">
          <WhoAmI />
          <MyEducation />
          <MyExperience />
          <MyCourses />
          <MySkills />
        </div>
      </div>
    </>
  )
}

export default AboutMe
