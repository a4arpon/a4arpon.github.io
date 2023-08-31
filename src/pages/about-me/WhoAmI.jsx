const WhoAmI = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-2xl p-3 lg:p-5">
      <h3 className="text-3xl text-center border-b-2 pb-2">About Me</h3>
      <div className="my-10 flex justify-between flex-col lg:flex-row gap-5">
        <img
          src="/arpon.png"
          alt="Shahin Islam Arpon, MERN Stack Web Developer, HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, education, skills, experience | https://a4arpon.github.io"
          className="w-full lg:w-1/4 h-96 rounded-full object-cover hidden"
        />
        <div className="lg:w-3/4">
          <h1 className="text-3xl lg:text-5xl mb-3">Shahin Islam (Arpon)</h1>
          <p className="text-xl lg:text-3xl">MERN Stack Web Developer</p>
          <p className="mt-5 text-justify">
            Hi, I&apos;m Shahin Islam Arpon, a skilled MERN Stack Web developer.
            With a solid foundation in HTML, CSS, JavaScript, Tailwind and
            React. I have expertise in creating functional and responsive user
            interfaces. However, my true passion and proficiency lie in
            server-side coding. I have a solid foundation in server-side
            technologies such as Node.js, ExpressJS, and MongoDB. I am
            continuously expanding my knowledge and deepening my understanding
            of these technologies to develop robust and efficient web
            applications. My ability to architect scalable and secure
            server-side solutions, coupled with my meticulous attention to
            detail, ensures the delivery of high-quality projects. I have a
            continuous drive for learning and improvement, always staying
            updated with the latest industry trends and best practices. This
            enables me to provide innovative and optimized solutions to any
            development challenge. I am well-positioned to make a substantial
            impact in the web development landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI
