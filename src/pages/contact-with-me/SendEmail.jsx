const SendEmail = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-b-2xl p-3 lg:p-5">
      <h3 className="text-3xl text-center border-b-2 pb-2">Send Email</h3>
      <form action="" className="flex flex-col lg:flex-row py-3">
        <div className="mb-3 flex flex-col lg:flex-row gap-3 w-full">
          <input
            type="text"
            name=""
            className="input input-primary focus:outline-none border-2
            w-full"
          />
          <input
            type="text"
            name=""
            className="input input-primary focus:outline-none border-2 w-full"
          />
        </div>
      </form>
    </div>
  )
}

export default SendEmail
