import React from 'react'
import { CardProduct } from './componentes/CardProduct';

function App () {
    return (
        <>
        
            <div className='flex flex-col items-center justify-center h-screen bg-DawnPink 
                            lg:m-8 lg:rounded-lg lg:shadow-2xl'>

                <CardProduct/>

            </div>
        
        </>
    )
}

export default App;
