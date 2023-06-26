import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="uppercase text-xl lg:text-4xl font-semibold">Arpon</a>
      </div>
      <div className="navbar-end ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 -translate-x-40"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/">My Projects</Link>
            </li>
            <li>
              <Link to="/">Contact With Me</Link>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/">My Projects</Link>
          </li>
          <li>
            <Link to="/">Contact With Me</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
