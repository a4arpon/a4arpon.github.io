import { Helmet } from 'react-helmet-async'

const MetaManager = ({ title, canonical }) => {
  return (
    <Helmet>
      <meta
        name="description"
        content="Shahin Islam Arpon is a MERN Stack Web Developer with expertise in HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, ExpressJS, NodeJS, MongoDB, ReactRouter and Firebase. Learn more about his education, skills, and experience on his portfolio website."
      />
      <meta
        name="keywords"
        content="Shahin Islam Arpon, MERN Stack Web Developer, HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, education, skills, experience, ExpressJS, NodeJS, MongoDB, ReactRouter, Firebase"
      />
      <meta name="author" content="Shahin Islam Arpon" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Learn more about Shahin Islam Arpon's education, skills, and experience as a MERN Stack Web Developer on his portfolio website."
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/70208852?v=4"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="a4arpon.github.io" />
      <meta
        name="twitter:title"
        content="Shahin Islam Arpon - MERN Stack Web Developer"
      />
      <meta
        name="twitter:description"
        content="Learn more about Shahin Islam Arpon's education, skills, and experience as a MERN Stack Web Developer on his portfolio website."
      />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/70208852?v=4"
      />
      <meta
        name="twitter:card"
        content="https://avatars.githubusercontent.com/u/70208852?v=4"
      />
      <link rel="shortlink" href="https://a4arpon.github.io" />
      <link rel="canonical" href="https://a4arpon.github.io" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <title>{title}</title>
    </Helmet>
  )
}

export default MetaManager
