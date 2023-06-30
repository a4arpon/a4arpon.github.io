import { House, Journal, Person } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="left-0 fixed flex h-full items-center justify-center w-[70px]">
      <div className="h-1/2 bg-white bg-opacity-25 rounded-tr-lg rounded-br-lg p-3 flex justify-between flex-col opacity-40 hover:opacity-100 -ml-14 lg:ml-0 hover:ml-0 ease-in duration-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-circle btn-primary'
              : 'btn btn-circle btn-neutral'
          }
        >
          <House size={24} />
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-circle btn-primary'
              : 'btn btn-circle btn-neutral'
          }
        >
          <Person size={24} />
        </NavLink>
        <NavLink
          to="/my-projects"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-circle btn-primary'
              : 'btn btn-circle btn-neutral'
          }
        >
          <Journal size={24} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
