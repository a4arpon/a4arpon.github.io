import bgWave from '../../assets/svgs/bgWave.svg'
import MetaManager from '../../hooks/MetaManager'
import Hero from './hero/Hero'
const Landing = () => {
  return (
    <>
      <MetaManager
        title={'Shahin Islam Arpon | MERN Stack Web Developer'}
        canonical={'https://a4arpon.github.io/'}
      />
      <div className="h-screen" style={{ background: `url(${bgWave})` }}>
        <Hero />
      </div>
    </>
  )
}

export default Landing
