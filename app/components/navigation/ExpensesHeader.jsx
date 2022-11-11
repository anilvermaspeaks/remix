import { NavLink } from '@remix-run/react';

import Logo from '../util/Logo';

function ExpensesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expences" end>
              Manage Expences
            </NavLink>
          </li>
          <li>
            <NavLink to="/expences/analysis">Analyze Expensces</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Logout</button>
      </nav>
    </header>
  );
}

export default ExpensesHeader;