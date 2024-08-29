"use client"
import Login from '@/components/HomePageComponents/Login';
import Register from '@/components/HomePageComponents/Register';
import { useParams } from 'next/navigation';

export default function LoginSignUpPage() {
    const parms = useParams();

    if (parms) {
        if (parms.slug === 'login') {
            return <Login/>

        } else if (parms.slug === 'register') {
            return <Register/>
        }
    }

    return <div className='text-4xl text-center mt-44'>404 Page Not Found</div>;
}
