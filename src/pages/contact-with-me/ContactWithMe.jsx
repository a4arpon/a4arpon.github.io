import bgWave from '../../assets/svgs/bgWave.svg'
import MetaManager from '../../hooks/MetaManager'
import EmailAndPhone from './EmailAndPhone'
import MySocialAccounts from './MySocialAccounts'
import SendEmail from './SendEmail'
const ContactWithMe = () => {
  return (
    <>
      <MetaManager
        title={'Contact With Me | Shahin Islam Arpon'}
        canonical={'https://a4arpon.github.io/contact-with-me'}
      />
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
