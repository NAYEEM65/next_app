import Image from 'next/image';
import React from 'react';

import StaffItems from './StaffItems';

const Staff = () => {
    return (
        <div className="w-full flex justify-between items-center p-10">
            <div className="flex justify-start  flex-col pl-10 py-20 ml-10 border-l-8 border-blue-500">
                <h1 className="text-6xl font-bold mb-5">Our Staff</h1>
                <p>Sample text. Click to select the Text Element.</p>
            </div>
            <div className="grid grid-cols-3 w-[50%]">
                <StaffItems />
            </div>
        </div>
    );
};

export default Staff;
