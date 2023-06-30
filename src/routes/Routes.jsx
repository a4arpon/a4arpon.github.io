import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import AboutMe from '../pages/about-me/AboutMe'
import Landing from '../pages/landing/Landing'
import MyProjects from '../pages/my-projects/MyProjects'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about-me',
        element: <AboutMe />
      },
      {
        path: '/my-projects',
        element: <MyProjects />
      }
    ]
  }
])
export default Routes
