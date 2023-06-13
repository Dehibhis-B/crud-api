import React from 'react'

const Headers = ({changeShowModal}) => {
    const handleClickShowModal =()=>{
        changeShowModal()
    }
  return (
    <section className="flex justify-between h-16  items-center p-4 max-w-[1024px] py-6 gap-10 mx-auto">
        <h1 className="font-bold text-2xl">Usuarios</h1>
        <button onClick={handleClickShowModal} className="btn-primary"> <i className='bx bx-plus'></i> Crear Usuario</button>
    </section>
  )
}

export default Headers