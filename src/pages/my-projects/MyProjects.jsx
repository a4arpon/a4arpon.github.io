import { Helmet } from 'react-helmet-async'
import bgWave from '../../assets/svgs/bgWave.svg'
import Projects from './Projects'
const MyProjects = () => {
  return (
    <>
      <Helmet>
        <title>Project Library | Shahin Islam Arpon</title>
      </Helmet>
      <div
        className="bg-cover flex items-center py-20 min-h-screen"
        style={{ background: `url(${bgWave})` }}
      >
        <div className="container mx-auto p-2">
          <div className="bg-base-300 bg-opacity-40 rounded-2xl p-3 lg:p-5">
            <h3 className="text-3xl text-center border-b-2 pb-2">
              My Projects
            </h3>
            <Projects />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProjects
