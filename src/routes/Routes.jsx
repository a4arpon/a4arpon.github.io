import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing/Landing'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
])
export default Routes
