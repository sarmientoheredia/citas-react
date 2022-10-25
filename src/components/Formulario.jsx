import React, { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ setPacientes, pacientes, paciente,setPaciente }) => {
  //1. los hooks se deben colocar encima de la funcion
  //2. no se deben crean en dentro de condicionales
  //3. no se pueden crear luego de algun return 


  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)
    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,

    }

    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }


    //recinicio del formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])



  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimienot Pacientes</h2>

      <p className='text-lg mt-5 mb-10 text-center'>
        Añadir Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>



      <form className='bg-white shadow-xl px-4 mb-10 rounded-lg py-10 text-left'
        onSubmit={handlesubmit}>

        {error &&
          <Error><p>Todos los campos son requeridos</p></Error>
        }
        <div className='mb-3'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold' >Nombre Mascota</label>
          <input type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            placeholder='Nombre de la mascota' />
        </div>

        <div className='mb-3'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold' >Nombre Propietario</label>
          <input type="text"
            id='propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            placeholder='Nombre del propietario' />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold' >Email propietario</label>
          <input type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            placeholder='Email contanto propietario' />
        </div>

        <div className='mb-3'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold' >Fecha Alta</label>
          <input type="date"
            id='alta'
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md' />
        </div>

        <div className='mb-3'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold' >Sintomas</label>
          <textarea id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            placeholder='Describe los sintomas' />

        </div>

        <input type="submit"
          className='bg-indigo-600 w-full p-3
        hover:bg-indigo-700
        cursor-pointer
        rounded-md
        transition-colors
         text-white uppercase font-bold'
          value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'} />
      </form >

    </div >
  )
}

export default Formulario
