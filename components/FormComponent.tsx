'use client'

import React from 'react'

const handleAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Address submitted");
};


const FormComponent = () => {
  return (
    <form className="w-full flew flex-row items-center justify-between space-x-4 px-6 md:px-32 md:py-8" onSubmit={handleAddress}>
        <input type="text" placeholder="" className="w-[75%] rounded-full border border-[#CDD193] py-4 px-8 bg-transparent text-xl self-center filter drop-shadow-sm text-[#A8A47B]" autoComplete='street-address' />
        <p className='absolute z-1 top-8 left-36 text-[#A8A47B] bg-[#2E1A13] p-2 text-xl font-bold rounded-full'>
            Address
        </p>
        <button className="rounded-full bg-[#A8A47B] text-[#2E1A13] py-4 px-3 text-xl self-center w-[15%]" type="submit"> 
            Search
        </button>
    </form>
  )
}

export default FormComponent
