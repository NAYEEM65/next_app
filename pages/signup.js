import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const signup = () => {
    const [isvisible, setIsVisible] = useState(false);
    return (
        <Layout>
            <div className="flex justify-center items-center ">
                <div className="bg-slate-300 md:p-20 p-12 rounded shadow-lg mt-3">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-3xl text-gray-500 font-bold">Sign up Now</h1>
                    </div>
                    <div className="flex items-center justify-center ">
                        <form className="flex justify-center items-center flex-col">
                            <input
                                type="text"
                                className="mt-2 mb-2 rounded w-full"
                                placeholder="Your name"
                            />
                            <input
                                type="email"
                                className="mt-2 mb-2 rounded w-full"
                                placeholder="Email"
                            />
                            <div className="relative w-full">
                                <input
                                    type={`${isvisible ? 'text' : 'password'}`}
                                    placeholder="password"
                                    className="rounded w-full"
                                />
                                {isvisible ? (
                                    <FaRegEye
                                        className="absolute right-3 top-3 cursor-pointer"
                                        onClick={() => setIsVisible(!isvisible)}
                                    />
                                ) : (
                                    <FaRegEyeSlash
                                        className="absolute right-3 top-3 cursor-pointer"
                                        onClick={() => setIsVisible(!isvisible)}
                                    />
                                )}
                            </div>
                            <div className="mt-5 mb-3 text-left flex justify-start items-center gap-1 w-full">
                                <p className="text-xs">
                                    have an Account?{' '}
                                    <Link href="/signin">
                                        <a className="text-blue-600">Sign in.</a>
                                    </Link>
                                </p>
                                <p className="text-xs">
                                    {' '}
                                    <Link href="/signup">
                                        <a className="text-blue-700">Forgot Password</a>
                                    </Link>
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-slate-100 hover:text-gray-600 transition-all duration-100 ease-in-out border-blue-500 border-2 hover:border-blue-500 hover:border-2 w-full "
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default signup;
