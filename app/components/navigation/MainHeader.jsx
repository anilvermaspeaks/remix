
import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import Logo from '../util/Logo';
function MainHeader() {
  const userid = useLoaderData();
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            {!userid && <Link to="/auth" className="cta">
              Login
            </Link>}
            {userid && <Form method='post' action='/logout' id="logout-form"><button className="cta-alt" to="/auth">
              Logout
            </button></Form>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
