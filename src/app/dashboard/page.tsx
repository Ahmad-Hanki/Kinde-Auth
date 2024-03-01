import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation' ;

const dashboard = async () => {
    const {isAuthenticated}= getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    if (!isLoggedIn) {
        redirect("/api/auth/login?post_login_redirect_url=/dashboard");
    }
  return (
    <div>dashboard Only Users!</div>
  )
}

export default dashboard