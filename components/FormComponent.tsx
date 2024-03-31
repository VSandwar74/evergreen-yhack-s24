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
    const [bound, setBound] = useState<boolean>(false);
    const [point, setPoint] = useState<Coord>({ lat: 0, lon: 0 });
    const [irrigation, setIrrigation] = useState<string | null>(null);

    const getAddressCoordinates = async () => {
        try {
            const formattedAddress = address.replace(/\s/g, ',');
            const response = await fetch(`http://127.0.0.1:5000/${formattedAddress}`);
            if (response.ok) {
                const data = await response.json();
                setIrrigation(data["evap"]);
                setPlotData(data["final_poly"]);
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
        <div className='flex flex-col justify-center items-center w-full'>
            <form className="w-full flew flex-row items-center justify-between space-x-4 px-6 md:px-32 md:py-8" onSubmit={handleAddress}>
                <input type="text" placeholder="" className="w-[70%] rounded-full border border-[#CDD193] py-4 px-8 bg-transparent focus:bg-transparent text-xl self-center filter drop-shadow-sm text-[#3A7D44]" autoComplete='street-address' onChange={(e) => setAddress(e.target.value)} />
                <p className='absolute z-1 top-8 left-150 text-[#3A7D44] bg-[#F2E9DC] p-2 text-xl font-bold rounded-full'>
                    Address
                </p>
                <button className="rounded-full bg-[#3A7D44] hover:bg-green-600 text-[#F2E9DC] py-4 px-3 text-xl self-center w-[25%]" type="submit"> 
                    Search
                </button>
            </form>
            <div className='flex flex-row space-x-4 mx-20'>

                {(irrigation && !bound) ? (
                    <div className='flex flex-col items-center'>
                        <div className='w-full flex flex-row space-x-4 items-cented'>
                            <video
                                src="/dummy_vid.mp4"
                                width={1000}
                                height={400}
                                autoPlay
                            />
                            {/* <div className='bg-[#3A7D44] rounded-xl w-[25%] p-4 text-center space-y-4'>
                                <h2 className='text-3xl text-[#F2E9DC] font-bold'>Irrigation</h2>
                                <p className='text-xl text-[#F2E9DC] font-bold'>{(150 / parseFloat(irrigation)).toFixed(2)}  min/day</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>At this rate you would save ${(((15.0 - (150/parseFloat(irrigation))) * 16 * 1/10 * 365).toFixed(2))} per year!</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>You should turn on your sprinklers for 5:52 AM, for optimal savings</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>The optimized radius is 8 feet</p>
                            </div> */}
                        </div>
                        <button className='rounded-full bg-[#3A7D44] hover:bg-green-600 text-[#F2E9DC] hover:border py-4 px-3 text-xl self-center w-[25%] mt-4'
                            onClick={() => setBound(true)}>
                            Save
                        </button>
                    </div>
                ) : (bound && irrigation) ? (
                    <div className='flex flex-col items-center'>
                        <div className='w-full flex flex-row space-x-4 mx-20 justify-center'>
                            <Image
                                src="/dummy_res.png"
                                width={800}
                                height={400}
                                alt='Irrigation Result'
                                className='rounded-lg'
                            />
                            <div className='bg-[#3A7D44] rounded-xl w-[25%] p-4 text-center space-y-4'>
                                <h2 className='text-3xl text-[#F2E9DC] font-bold'>Irrigation</h2>
                                <p className='text-xl text-[#F2E9DC] font-bold'>{(150 / parseFloat(irrigation)).toFixed(2)}  min/day</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>At this rate you would save ${(((15.0 - (150/parseFloat(irrigation))) * 16 * 1/10 * 365).toFixed(2))} per year!</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>You should turn on your sprinklers for 5:52 AM, for optimal savings</p>
                                <p className='text-lg text-[#F2E9DC] font-semibold'>The optimized radius is 8 feet</p>
                            </div>
                        </div>
                    </div>
                ) : (null)}
            </div>
        </div>
    );
}

export default FormComponent;
