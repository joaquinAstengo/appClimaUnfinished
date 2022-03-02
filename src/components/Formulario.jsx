import React from 'react'
import { useState } from 'react'

const Formulario = ({ busqueda, guardarBusqueda, setConsultar}) => {

    const { ciudad, pais } = busqueda

    const handleSubmit = e =>{
     
        e.preventDefault();

        setConsultar(true)
        setTimeout(() => {
            setConsultar(false)
        }, 1);
    }

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        }
        )
    }

    return (
        <form onSubmit={handleSubmit}>

            <label className="text-slate-800 text-xl font-medium" htmlFor="ciudad">Ciudad</label>
            <input
                id='ciudad'
                name='ciudad'
                value={ciudad}
                onChange={handleChange}
                placeholder='Ingrese una ciudad'
                className='p-5 block w-full rounded-md shadow-md mb-5 focus:bg-slate-100  placeholder:text-slate-600'
                type="text" />

            <label className="text-slate-800 text-xl font-medium" htmlFor="ciudad">País</label>

            <select
                name="pais"
                value={pais}
                onChange={handleChange}
                className='w-full rounded-md p-5 bg-white  text-slate-600'>
                <option value="">Seleccione un país</option>
                <option value="AR">Argentina</option>
                <option value="MX">México</option>
                <option value="CL">Chile</option>
            </select>
            <input type="submit"
                value="Enviar"
                className="w-full font-bold p-5 bg-slate-600 mt-5 text-white rounded-md transition-all hover:bg-slate-700 cursor-pointer"
            />
        </form>
    )
}

export default Formulario