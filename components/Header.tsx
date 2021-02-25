import Link from 'next/link';

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
    <div className='container'>
      <Link href='/'>
        <a className='navbar-brand'>positronX.io</a>
      </Link>
      <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/login'>
              <a className='nav-link'>Login</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/sign-up'>
              <a className='nav-link'>Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
