
const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">Your invoicing is about to get a</h1>
                    <a href="#" className="text-blue-500 font-semibold text-lg">whole lot easier</a>
                </div>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="+91 Phone Number"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <select
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option>Karnataka</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="agree"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="agree" className="ml-2 text-gray-700">
                            I agree to the <a href="#" className="text-blue-500">Terms of Service and Privacy Policy</a>.
                        </label>
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Create Free Account
                        </button>
                    </div>
                    <div className="text-center text-gray-500">Or sign in using</div>
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
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Already have a Zoho account? <a href="#" className="text-blue-500">Sign In</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
