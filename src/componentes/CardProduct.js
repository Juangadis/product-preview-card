import React, {useState, useEffect } from 'react'
import mobile from '../assets/img/mobile.jpg'
import desktop from'../assets/img/desktop.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CardProduct = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 650)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650)
    }

    useEffect (() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    })


    return (

        <div className='cardProduct w-10/12 flex flex-col bg-White rounded-lg
                        md:flex-row md:items-center md:w-3/5
                        lg:flex-row lg:items-center lg:w-3/5'>

            {isDesktop ?
                (<img className='w-full rounded-t-lg
                md:w-1/2 md:rounded-l-lg md:rounded-r-none md:h-full
                lg:w-1/2 lg:rounded-l-lg lg:rounded-r-none lg:h-full' src={desktop}/>)
                :
                (<img className='w-full rounded-t-lg' src={mobile}/>)
            }

            

            <div className='cardProductInfo p-6'>

                <p className='font-montserrat font-medium text-sm pb-1 text-Aluminium'>PERFUME</p>

                <h2 className='font-bold text-3xl block font-fraunces py-1'>Gabrielle Essence Eau De Parfum</h2>

                <p className='font-montserrat font-medium text-sm py-1 text-Aluminium leading-6'>A floral, solar and voluptuous <br/> 
                interpretation composed by Oliver <br/>
                Polge, Perfumer-Creator for the House of <br/>
                CHANEL.
                </p>

                <div className='price py-2 flex items-center'>

                    <p className='text-Viridian font-bold text-3xl font-fraunces pr-5'>$149.99</p>

                    <p className='line-through text-sm text-Aluminium'>$169.99</p>

                </div>

                <button className='bg-Viridian self-center w-10/12 text-White p-2 rounded-lg mb-7 text-Aluminium
                                    lg:my-2'>
                    <ShoppingCartOutlinedIcon/> Add to Cart
                </button>

            </div>

        </div>
    )
}
