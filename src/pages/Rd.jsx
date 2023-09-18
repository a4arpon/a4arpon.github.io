import { useParams } from "react-router-dom"

const Rd = () => {
  const {type} = useParams()
  if (type=='resume') {
    setTimeout(() => {
      window.location.replace(
        'https://a4arpon.vercel.app/resume'
      )
    }, 100)
  } else {
    setTimeout(() => {
      window.location.replace(
        'https://a4arpon.vercel.app/'
      )
    }, 100)
  }
  console.log(type)
  return (
    <div className="flex h-screen w-screen items-center justify-center p-3">
      <div className="alert alert-info w-full md:w-3/4 lg:w-2/5">
        <h1>Redirecting To</h1>
        <p>Resume</p>
      </div>
    </div>
  )
}

export default Rd
