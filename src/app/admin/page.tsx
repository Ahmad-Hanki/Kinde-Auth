import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';

const Admin = async () => {
    const {isAuthenticated, getPermission} = getKindeServerSession();
    const isSeeData = await getPermission('see:Data');

    if (!isSeeData?.isGranted){
        redirect('/');
    }
  return (
    <div>Admin only</div>
  )
}

export default Admin