import { ChatFill, House, Journal, Person } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bottom-0 lg:left-0 fixed flex lg:h-full items-center justify-center lg:w-[70px] z-10 w-full">
      <div className="h-20 lg:h-1/2 bg-white bg-opacity-25 lg:rounded-tr-lg lg:rounded-br-lg p-3 flex justify-between lg:flex-col opacity-40 hover:opacity-100 lg:ml-0 hover:ml-0 ease-in duration-300 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-circle btn-primary'
              : 'btn btn-circle btn-neutral'
          }
          title="Home"
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
          title="About Me"
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
          title="My Projects"
        >
          <Journal size={24} />
        </NavLink>
        <NavLink
          to="/contact-with-me"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-circle btn-primary'
              : 'btn btn-circle btn-neutral'
          }
          title="Contact With Me"
        >
          <ChatFill size={24} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
