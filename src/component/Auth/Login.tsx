import React, { useState } from 'react';

interface LoginProps {
    handleLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black px-4">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form
                    onSubmit={submitHandler}
                    className="w-full sm:max-w-sm bg-black p-6 rounded-lg shadow-md border-green-500"
                >
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            className="border border-emerald-600 p-2 w-full rounded-3xl focus:ring-2 text-white bg-black"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            id="password"
                            className="border border-emerald-600 p-2 w-full rounded-3xl focus:ring-2 text-white bg-black"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-emerald-600 text-white py-2 px-4 w-full rounded-3xl hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;