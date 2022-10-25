import React, { useState } from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, alta, sintomas, id } = paciente


    const handleEliminar = () => {

        const respuesta = confirm('Deseas eliminar este paciente')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="text-left m-3 px-3 py-10 rounded-xl bg-white shadow-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta:{' '}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg'
                    type="button"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>

                <button className='py-2 px-10 bg-red-700 hover:bg-red-900 text-white font-bold uppercase rounded-lg'
                    type="button"
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>

    )
}

export default Paciente
