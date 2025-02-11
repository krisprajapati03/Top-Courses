import React from 'react'
import './Spinner.css';

function Spinner() {
    return (
        <div className='flex flex-col items-center space-y-2 h-screen'>
            <div className='spinner'></div>
            <p className='text-slate-900 text-lg font-semibold '>Loading...</p>
        </div>
    );
}


export default Spinner