import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPaciente from './components/ListadoPaciente'
import { useState, useEffect } from 'react'

function App () {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})



  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  //funcion para eliminiar un paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }


  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente} />

        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>

    </div>


  )
}
//npm i -D tailwindcss postcss autoprefixer    ====>comando para instalar tailwindcss
//luego este comando ==> npx tailwindcss init -p
export default App
