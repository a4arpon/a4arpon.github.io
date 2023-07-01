import {
  Discord,
  Facebook,
  Github,
  Linkedin,
  Telegram,
  Twitter,
  Youtube
} from 'react-bootstrap-icons'

const MySocialAccounts = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-2xl p-3 lg:p-5">
      <h3 className="text-3xl text-center border-b-2 pb-2">Social Accounts</h3>
      <div className="flex flex-col lg:flex-row gap-3 justify-between my-5">
        <a href="" target="_blank" className="btn btn-primary">
          <Github size={28} /> GitHub
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Linkedin size={28} /> Linkedin
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Youtube size={28} /> Youtube
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Facebook size={28} /> Facebook
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Discord size={28} /> Discord
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Twitter size={28} /> Twitter
        </a>
        <a href="" target="_blank" className="btn btn-primary">
          <Telegram size={28} /> Telegram
        </a>
      </div>
    </div>
  )
}

export default MySocialAccounts
