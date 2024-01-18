import Image from 'next/image';
import React from 'react';

const Header = () => {
    // w-full: ocupa todo el ancho
    // py-6: padding en el eje y de 6
    return (
        <div>
            <header className="w-full py-6 bg-blue-300">
                <div className='container m-auto flex justify-between items-center'>
                    <p className='text-4xl text-bold text-slate-100'>
                        <Image 
                            src={"/next.svg"}
                            alt="CoderHouse-Logo"
                            width={100}
                            height={200}
                        />
                    </p>
                    <nav className='flex justify-between gap-2'>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 1</a>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 2</a>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 3</a>
                    </nav>
                </div>
            </header>
            <br />
        </div>
    )
}

export default Header