import { CloudDownload, Github, Linkedin } from 'react-bootstrap-icons'

const MyDetails = () => {
  return (
    <div className="lg:w-4/5 lg:text-justify">
      <h1 className="text-3xl lg:text-6xl mb-3">Shahin Islam</h1>
      <p className="text-2xl">MERN Stack Web Developer</p>
      <hr className="my-6" />
      <p>
        Hi, I&rsquo;m Shahin Islam (Arpon), MERN Stack Web Application
        Developer. I&rsquo;m passionate about exploring new things and
        technology. I&rsquo;m always eager to expand my skill set. Creativity is
        one of my passion. Continuous growth is my focus.
      </p>
      <div className="flex mt-10 gap-5">
        <a
          className="btn btn-primary font-bold"
          href="https://drive.google.com/uc?export=download&id=1uYp7ZNHFCOXIW_szDS1gZIVB_QVPjRAJ"
          download={true}
        >
          <CloudDownload size={32} />
          My Resume
        </a>
        <a
          className="btn btn-neutral font-semibold"
          href="https://github.com/a4arpon"
          rel="noreferrer"
          target="_blank"
        >
          <Github size={32} />
        </a>
        <a
          className="btn btn-accent text-white font-semibold"
          href="https://www.linkedin.com/in/a4arpon/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  )
}

export default MyDetails
