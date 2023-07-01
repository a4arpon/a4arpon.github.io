const Projects = () => {
  const projectsItems = [
    {
      id: 1,
      projectImgURL: 'https://i.ibb.co/y0zDn8s/Super-Saver.webp',
      projectName: 'Super Saver',
      details:
        'Designed and built a dynamic Toy Marketplace platform, supporting various categories of toys for users to showcase and sell their toys',
      github: 'https://github.com/a4arpon/super-savers',
      web: 'https://supersavergalexy.web.app/'
    },
    {
      id: 2,
      projectImgURL: 'https://i.ibb.co/CbzrrW7/Summer-Surfers.webp',
      projectName: 'Summer Surfers',
      details:
        'Developed and implemented a full stack LMS Web App Prototype with multiple roles. And Stripe payment gateway intrigante to handle payment processing.',
      github: 'https://github.com/a4arpon/summer-surfers-client',
      web: 'https://omnibox-farint.web.app/'
    },
    {
      id: 3,
      projectImgURL: 'https://i.ibb.co/kgqyp1p/Buck-Donald-s.png',
      projectName: 'Buck Donald',
      details:
        'Similar to mealDb. A recipe platform, featuring top chefs from the USA and their signature recipes.',
      github: 'https://github.com/a4arpon/recipeHunter',
      web: 'https://visionary-jalebi-28e9dd.netlify.app/'
    }
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
      {projectsItems.map((item) => (
        <div className="projectCard" key={item.id}>
          <div className="relative max-w-full h-72 overflow-hidden rounded-t-lg">
            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
              <img
                src={item.projectImgURL}
                alt={item.projectName}
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <div className="p-3 mb-10">
              <p className="text-title">{item.projectName}</p>
              <p className="break-words">{item.details}</p>
            </div>
          </div>
          <div className="projectCard-button flex gap-3 justify-between">
            <a
              href={item.github}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={item.web}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Webapp
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
