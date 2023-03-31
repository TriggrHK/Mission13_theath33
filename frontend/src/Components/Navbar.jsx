import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: 'grey',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'None',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark border-bottom box-shadow mb-3 p-3"
      style={navStyle}
    >
      <div className="container">
        <div className="d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item m-2">
              <Link style={linkStyle} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link style={linkStyle} to="/Podcasts">
                Podcasts
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link style={linkStyle} to="/Collection">
                Collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
