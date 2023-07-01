import { SendFill } from 'react-bootstrap-icons'

const SendEmail = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-2xl p-3 lg:p-5 ">
      <h3 className="text-3xl text-center border-b-2 pb-2">Send Email</h3>
      <form action="" className="flex flex-col py-3">
        <div className="mb-3 flex flex-col lg:flex-row gap-3 w-full">
          <input
            type="text"
            name="name"
            className="input border-gray-700 focus:border-gray-400 focus:outline-none border-2
            w-full"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            className="input border-gray-700 focus:border-gray-400 focus:outline-none border-2 w-full"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="subject"
            className="input border-gray-700 focus:border-gray-400 focus:outline-none border-2
            w-full"
            placeholder="Email Subject"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="body"
            rows={10}
            className="textarea border-gray-700 focus:border-gray-400 focus:outline-none border-2
            w-full"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="mb-3 flex justify-end">
          <button className="btn btn-primary" type="submit">
            <SendFill size={28} /> Send Email
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendEmail
