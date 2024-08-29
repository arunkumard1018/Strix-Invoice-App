import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox, CustomLogo, FormInput } from '../ui/Utility';
import { useRouter } from 'next/navigation'


const Login = () => {
    const router = useRouter();


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.email === "admin@strix.com" && formData.password === "admin") {
            router.push("/")
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div
            className="min-h-screen flex pt-32 md:pt-0 md:items-center justify-center"
        >
            <div className="h-full w-full md:w-1/2 md:border rounded-lg p-8 max-w-md bg-white">
                <div className="text-center mb-6">
                    <Link href="/"><CustomLogo /></Link>
                    <h1 className="text-2xl font-bold text-custom-blue">Sign in to your account</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />

                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                name='rememberMe'
                                checked={formData.rememberMe}
                                handleChange={handleInputChange}
                            />
                            <label htmlFor="remember" className="ml-2 text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <Link href="#" className="text-blue-500">Forgot your password?</Link>
                    </div>


                    <div className="mb-6">
                        <Button
                            type="submit"
                            className="w-full bg-custom-blue text-lg text-white font-bold py-6 rounded hover:bg-custom-voilate focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Sign In
                        </Button>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Don&apos;t have an account? <Link href="/auth/register" className="text-blue-500">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
