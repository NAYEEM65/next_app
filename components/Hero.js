import React from 'react';
import Layout from './Layout';

const Hero = () => {
    return (
        <Layout>
            <div className="bg-[url('../assets/businessman-pointing-his-presentation-futuristic-digital-screen.jpg')] bg-center bg-cover bg-no-repeat h-[90vh] w-full pl-28 flex justify-center flex-col">
                <div>
                    <h1 className="text-blue-500 md:text-6xl text-3xl font-bold w-full md:w-[550px] mb-5">
                        We power innovation because we are innovators
                    </h1>
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="your email"
                        className="border-none bg-white/80 rounded mr-2"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 rounded w-[150px] px-3 py-2 mt-5 text-white font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Hero;
