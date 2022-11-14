import { FaLock, FaUserPlus } from 'react-icons/fa';
import {Link, useSearchParams} from '@remix-run/react'
function AuthForm() {
  const [searchParams]  = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';
  const submitBtnCaption = authMode === 'login' ?'Login':'Create User';
  const toggleBtnCaption = authMode === 'login' ?'Create a new user':'Login wiith existing User';
  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
      {authMode==='login' ? <FaLock /> : <FaUserPlus/>} 
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>Login</button>
        <Link to={authMode==='login' ? '?mode=signup':'?mode=login'}>{toggleBtnCaption}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
