import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import Rd from '../pages/Rd'
import AboutMe from '../pages/about-me/AboutMe'
import ContactWithMe from '../pages/contact-with-me/ContactWithMe'
import Landing from '../pages/landing/Landing'
import MyProjects from '../pages/my-projects/MyProjects'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/my-projects',
        element: <MyProjects />,
      },
      {
        path: '/contact-with-me',
        element: <ContactWithMe />,
      },
      {
        path: '/rd/:type',
        element: <Rd />,
      },
    ],
  },
])
export default Routes
