import { useEffect } from 'react'
import Hero from './hero/Hero'
const Landing = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace(
        'https://a4arpon.vercel.app/?ref=classic.portfolio'
      )
    }, 100)
  }, [])

  return (
    <>
      <div className="h-screen">
        <div className="w-full lg:w-1/2 mx-auto mt-10">
          <div className="alert alert-info flex flex-col ">
            <h1>Redirecting..</h1>
            <p>Redirecting to new portfolio.</p>
          </div>
        </div>
        <Hero />
      </div>
    </>
  )
}

export default Landing
