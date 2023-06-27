import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/navbar/Navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
