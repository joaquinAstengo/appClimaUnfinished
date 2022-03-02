import React, { useEffect, useState } from 'react'
const Clima = ({ error, resultado }) => {

    const { main, name } = resultado
    return (<>


        <div className=' bg-gray-100 p-14 rounded-md shadow-md sm:w-2/3 border-l-2 border-t-2 border-white'>

            {main ? (
                <>
                    <h2 className='text-center pb-10'>Clima en {name}</h2>
                    <div>
                        <p>Mínima: {main.temp_min} <span> °C</span></p>
                        <p>Máxima: {main.temp_max}<span> °C</span></p>
                        <p>Actual: {main.temp}<span> °C</span></p>
                    </div>
                </>
            ) : (
                <div>
                    <h2 className='text-center'>Aquí verá el clima de su ciudad</h2>
                </div>
            )}
        </div>
    </>
    )
}

export default Clima