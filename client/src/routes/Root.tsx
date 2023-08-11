import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
const Root: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={`contacts/1`}>Your Name</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>This is a footer</footer>
    </>
  )
}

export default Root
