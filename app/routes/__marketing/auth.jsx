import AuthForm  from '~/components/auth/AuthForm';
import sharedStyles from '~/styles/auth.css';


export default function AuthPage() {
    return (
      <AuthForm />
    );
  }
  


export function links(){
    return [{rel:'stylesheet', href: sharedStyles}]
  }