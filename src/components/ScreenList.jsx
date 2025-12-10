import * as React from 'react';
import LiftSlide from "./LiftSlid";
import AddForm from "./AddForm";


export default function ScreenList(){
    return(
        <>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                <div className="w-full h-auto p-2  m-auto lg:col-span-1 md:col-span-1 hideSlide">
                    <div className='w-full h-auto border-4 border-yellow-500 rounded-2xl py-12.5 p-5'>
                        <LiftSlide />
                    </div>
                </div>
                <div className="w-full h-auto p-2 m-auto lg:col-span-2 md:col-span-2 z-30">
                    <div className='w-full h-[99.5%] border-4 border-yellow-500 rounded-2xl'>
                        <AddForm />
                    </div>
                </div>
            </div>
        </>
    )
}