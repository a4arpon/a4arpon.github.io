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
        <a href="https://github.com/a4arpon" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Github size={28} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/a4arpon/" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Linkedin size={28} /> Linkedin
        </a>
        <a href="https://www.youtube.com/@a4arpon" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Youtube size={28} /> Youtube
        </a>
        <a href="https://www.facebook.com/a4arpon" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Facebook size={28} /> Facebook
        </a>
        <a href="https://discord.gg/xgXwmEhHZV" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Discord size={28} /> Discord
        </a>
        <a href="https://twitter.com/a4arpon" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Twitter size={28} /> Twitter
        </a>
        <a href="https://t.me/a4arpon" target="_blank" className="btn btn-primary" rel="noreferrer">
          <Telegram size={28} /> Telegram
        </a>
      </div>
    </div>
  )
}

export default MySocialAccounts
