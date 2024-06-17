import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className='header'>
        <nav className='navbar'>
          <ul>
            <NavLink to='/pedido'>Pedir</NavLink>
            <NavLink to='/reservas'>Reservas</NavLink>
          </ul>
          <NavLink to='/bolsita'>Bolsita</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
