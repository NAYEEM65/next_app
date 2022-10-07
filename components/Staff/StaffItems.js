import Image from 'next/image';
import React from 'react';
import adamImage from '../../assets/pexels-photo-9775676.jpeg';
import lindaImage from '../../assets/linda.jpeg';
import gamesImage from '../../assets/games.jpeg';
import marryImage from '../../assets/marry.jpeg';
import parryImage from '../../assets/perry.jpg';
import looImage from '../../assets/loo.jpeg';
const staffItemdata = [
    {
        id: 1,
        image: adamImage,
        name: 'ADAM JONSON',
        act: 'Developer',
    },
    {
        id: 2,
        image: lindaImage,
        name: 'LINDA LARSON',
        act: 'Mana​ger',
    },
    {
        id: 3,
        image: gamesImage,
        name: 'GAMES LARSON',
        act: 'Designer',
    },
    {
        id: 4,
        image: marryImage,
        name: 'MARRY HUDSON',
        act: 'Designer',
    },
    {
        id: 5,
        image: parryImage,
        name: 'PAUL PERRY',
        act: 'Designer',
    },
    {
        id: 6,
        image: looImage,
        name: 'LOO SCAVO',
        act: 'Designer',
    },
];
const StaffItems = () => {
    return (
        <>
            {staffItemdata.map((item) => (
                <div key={item.id} className="flex justify-center items-center flex-col p-5">
                    <Image
                        src={item.image}
                        alt={item.name}
                        className="rounded-full"
                        height={100}
                        width={100}
                    />
                    <h3 className="font-semibold text-xl mt-3">{item.name}</h3>
                    <p className="text-md text-gray-500 mt-3">{item.act}</p>
                </div>
            ))}
        </>
    );
};

export default StaffItems;
