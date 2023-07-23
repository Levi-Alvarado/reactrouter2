import { NavLink } from 'react-router-dom';
import logo from '/game.svg';

const Navbar = () => {
  return (
    <nav className="navbar bg-danger">
      <div className="container-fluid">

        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="PokeLogo" style={{ width: '50px' }} />
        </NavLink>
        <div className='justify-content-end'>
          <ul className="navbar-nav d-flex flex-row" style={{ "--bs-scroll-height": "100px" }} id="navbar">
            <li className="nav-item">
              <NavLink to="/" style={{ marginRight: '10px' }}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pokemones" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Pokemones
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
