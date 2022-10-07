import Link from 'next/link';
import React, { useState } from 'react';
import { MdMenu, MdOutlineClear } from 'react-icons/md';

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const handleMenuItem = (prevState) => {
        // setIsMenu(!prevState);
        console.log(!prevState);
    };
    return (
        <div className="bg-slate-200 px-4 py-2">
            {/* destop version */}
            <div className="hidden md:flex justify-between items-center">
                <h1 className="text-3xl text-gray-400 font-semibold">
                    <Link href="/">
                        <a>
                            <span className="text-blue-600">N</span>ext
                        </a>
                    </Link>
                </h1>

                <div className="flex justify-center items-center gap-3">
                    <ul className="flex justify-center items-center gap-3 text-gray-600 cursor-pointer hover:text-gray-700 transition-all duration-100 ease-in-out">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service">
                                <a>Service</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center gap-3">
                        {' '}
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-slate-100 hover:text-gray-600 transition-all duration-100 ease-in-out border-blue-500 border-2 hover:border-blue-500 hover:border-2">
                            <Link href="/signin">
                                <a>Sign in</a>
                            </Link>
                        </button>
                        <button className="border-2 border-w border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-all duration-100 ease-in-out">
                            <Link href="/signup">
                                <a>Sign up</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile version */}

            <div className="flex justify-between items-center md:hidden relative">
                <h1 className="text-3xl text-gray-400 font-semibold">
                    <Link href="/">
                        <a>
                            <span className="text-blue-600">N</span>ext
                        </a>
                    </Link>
                </h1>
                {isMenu && (
                    <div className="flex justify-center flex-col items-center z-50 gap-3 w-40 shadow-lg rounded absolute top-10 right-10 bg-slate-200 p-6 transition-all duration-100 ease-in-out">
                        <ul className="flex justify-center items-center flex-col gap-3 text-gray-600 cursor-pointer hover:text-gray-700 transition-all duration-100 ease-in-out">
                            <li>
                                <Link href="/">
                                    <a onClick={handleMenuItem}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a onClick={handleMenuItem}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service">
                                    <a onClick={handleMenuItem}>Service</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a onClick={handleMenuItem}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center flex-col justify-center gap-3">
                            {' '}
                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-slate-100 hover:text-gray-600 transition-all duration-100 ease-in-out border-blue-500 border-2 hover:border-blue-500 hover:border-2">
                                <Link href="/signin">
                                    <a>Sign in</a>
                                </Link>
                            </button>
                            <button className="border-2 border-w border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-all duration-100 ease-in-out">
                                <Link href="/signup">
                                    <a>Sign up</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
                {isMenu ? (
                    <MdOutlineClear className="text-3xl" onClick={() => setIsMenu(!isMenu)} />
                ) : (
                    <MdMenu className="text-3xl" onClick={() => setIsMenu(!isMenu)} />
                )}
            </div>
        </div>
    );
};

export default Header;
