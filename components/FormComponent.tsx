'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface Coord {
    lat: number;
    lon: number;
}

const FormComponent: React.FC = () => {
    const [address, setAddress] = useState('');
    const [plotData, setPlotData] = useState<[number, number][]>([]);
    const [point, setPoint] = useState<Coord>({ lat: 0, lon: 0 });

    const getAddressCoordinates = async () => {
        try {
            const formattedAddress = address.replace(/\s/g, ',');
            const response = await fetch(`http://127.0.0.1:5000/${formattedAddress}`);
            if (response.ok) {
                const data = await response.json();
                setPlotData(data);
                return;
            }
            // console.error('Error fetching address coordinates:', response.statusText);
            // return null;r
        } catch (error) {
            console.error('Error fetching address coordinates:', error);
            return null;
        }
    };

    const handleAddress = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await getAddressCoordinates();
            if (data) {
                // Optionally process data further here if needed
                console.log('Address coordinates:', data);
            }
        } catch (error) {
            console.error('Error handling address:', error);
        }
    };

    return (
        <div>
            <form className="w-full flew flex-row items-center justify-between space-x-4 px-6 md:px-32 md:py-8" onSubmit={handleAddress}>
                <input type="text" placeholder="" className="w-[75%] rounded-full border border-[#CDD193] py-4 px-8 bg-transparent text-xl self-center filter drop-shadow-sm text-[#3A7D44]" autoComplete='street-address' onChange={(e) => setAddress(e.target.value)} />
                <p className='absolute z-1 top-8 left-36 text-[#3A7D44] bg-[#F2E9DC] p-2 text-xl font-bold rounded-full'>
                    Address
                </p>
                <button className="rounded-full bg-[#3A7D44] text-[#F2E9DC] py-4 px-3 text-xl self-center w-[15%]" type="submit"> 
                    Search
                </button>
            </form>
            <Image
                src="/dummy_pic.png"
                width={1100}
                height={400}
                alt="Picture of the plot"
            />
        </div>
    );
}

export default FormComponent;
