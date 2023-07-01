import { Helmet } from 'react-helmet-async'
import bgWave from '../../assets/svgs/bgWave.svg'
import Hero from './hero/Hero'
const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Shahin Islam Arpon | MERN Stack Web Developer</title>
      </Helmet>
      <div className="h-screen" style={{ background: `url(${bgWave})` }}>
        <Hero />
      </div>
    </>
  )
}

export default Landing
