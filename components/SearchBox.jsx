"use client";
import React, { useEffect, useRef, useState } from 'react'
import { SlLocationPin } from "react-icons/sl";

export default function SearchBox({ setToggleModal }) {

    return (
        <>
            <button className="btn" onClick={() => setToggleModal(true)}>
                <SlLocationPin size={24} />
                <span className="ml-2">Change Location</span>
            </button>
            {/* <p>{debouncedValue}</p> */}
        </>
    )
}


{/* <label >
<input 
    type='text' 
    placeholder='Enter your location' 
    className='btn p-4 text-slate-50'
    onChange={(e) => setValue(e.target.value)}
    value={value}
/>
</label> */}