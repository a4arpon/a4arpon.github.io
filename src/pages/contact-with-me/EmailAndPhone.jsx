import { Headset, Mailbox2, Whatsapp } from 'react-bootstrap-icons'

const EmailAndPhone = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-2xl p-3 lg:p-5">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-10">
          <p className="flex gap-3 items-center text-3xl">
            <Mailbox2 size={32} /> Email
          </p>
          <p className="text-2xl underline mt-2">
            <a href="mailto:a4arpon@gmail.com">a4arpon@gmail.com</a>
          </p>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-10">
          <p className="flex gap-3 items-center text-3xl flex-wrap">
            <Headset size={32} />
            <Whatsapp size={32} /> Phone
          </p>
          <p className="text-2xl underline mt-2">+880 1995942029</p>
        </div>
      </div>
    </div>
  )
}

export default EmailAndPhone
