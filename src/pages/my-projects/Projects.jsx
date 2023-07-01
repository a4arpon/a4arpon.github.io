const Projects = () => {
  const projectsItems = [
    {
      id: 1,
      projectImgURL: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp',
      projectName: 'Super Saver',
      details: 'sfsdsdsdsdhauhduashdasdiuashdiuasudas',
      github: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp',
      web: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp'
    },
    {
      id: 2,
      projectImgURL: 'https://i.ibb.co/CbzrrW7/Summer-Surfers.webp',
      projectName: 'Summer Surfers',
      details: 'sfsdsdsdsdhauhduashdasdiuashdiuasudas',
      github: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp',
      web: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp'
    },
    {
      id: 3,
      projectImgURL: 'https://i.ibb.co/kgqyp1p/Buck-Donald-s.png',
      projectName: 'Buck Donald',
      details: 'sfsdsdsdsdhauhduashdasdiuashdiuasudas',
      github: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp',
      web: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp'
    }
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
      {projectsItems.map((item) => (
        <div className="projectCard" key={item.id}>
          <div className="projectCard-details">
            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={item.projectImgURL}
                  alt={item.projectName}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="p-3 mb-10">
              <p className="text-title">{item.projectName}</p>
              <p className="text-body hidden">{item.details}</p>
            </div>
          </div>
          <div className="projectCard-button flex gap-3 justify-between">
            <a href="" className="btn btn-primary">
              GitHub
            </a>
            <a href="" className="btn btn-primary">
              Live Webapp
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
