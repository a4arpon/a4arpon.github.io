import bgWave from '../../assets/svgs/bgWave.svg'
import Hero from './hero/Hero'
const Landing = () => {
  return (
    <div className="h-screen" style={{ background: `url(${bgWave})` }}>
      <Hero />
    </div>
  )
}

export default Landing
