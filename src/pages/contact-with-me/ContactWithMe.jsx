import { Helmet } from 'react-helmet-async'
import bgWave from '../../assets/svgs/bgWave.svg'
import EmailAndPhone from './EmailAndPhone'
import MySocialAccounts from './MySocialAccounts'
import SendEmail from './SendEmail'
const ContactWithMe = () => {
  return (
    <>
      <Helmet>
        <title>Contact With Me | Shahin Islam Arpon</title>
      </Helmet>
      <div
        className="bg-cover flex items-center py-20 min-h-screen"
        style={{ background: `url(${bgWave})` }}
      >
        <div
          className="container mx-auto
        "
        >
          <div className="flex flex-col gap-20 p-2">
            <SendEmail />
            <EmailAndPhone />
            <MySocialAccounts />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactWithMe
