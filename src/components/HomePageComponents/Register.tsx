import { useState } from "react";
import { Checkbox, CustomLogo, FormInput, FormSelect } from "../ui/Utility";
import { INDIAN_STATES } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
    const [formData, setFormData] = useState({
        FullName: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zip: '',
        isAggreedThePolicy: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleInputChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div
            className="min-h-screen flex pt-10  md:pt-0 md:items-center justify-center px-4"
        >
            <div className="h-full w-full md:w-1/2 md:border  rounded-lg p-8 max-w-md ">
                <div className="text-center mb-6">
                    <Link href="/"><CustomLogo /></Link>
                    <h1 className="text-xl  font-bold text-custom-blue mt-2">Register For Free</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        name="FullName"
                        value={formData.FullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />
                    <FormInput
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                    />

                    <FormSelect
                        name="state"
                        option={INDIAN_STATES}
                        value={formData.state}
                        onChange={handleInputChangeSelect}
                    />
                    <FormInput
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="Zip"
                    />

                    <div className="mb-4 flex items-center">
                        <Checkbox
                            name="isAggreedThePolicy"
                            checked={formData.isAggreedThePolicy}
                            handleChange={handleInputChange}
                        />
                        <label htmlFor="agree" className="ml-2 text-gray-700">
                            I agree to the <a href="#" className="text-blue-500">Terms of Service and Privacy Policy</a>.
                        </label>
                    </div>

                    <div className="mb-6">
                        <Button
                            type="submit"
                            className="w-full bg-custom-blue text-lg text-white font-bold py-6 rounded hover:bg-custom-voilate focus:outline-none focus:ring focus:ring-blue-300">
                            Register
                        </Button>
                    </div>

                    {/* <div className="text-center text-gray-500">Or sign in using</div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <img src="/path/to/google-icon.png" alt="Google" />
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <img src="/path/to/facebook-icon.png" alt="Facebook" />
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <img src="/path/to/apple-icon.png" alt="Apple" />
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
                        </button>
                    </div> */}

                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Already have a an account? <Link href="/auth/login" className="text-blue-500">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
