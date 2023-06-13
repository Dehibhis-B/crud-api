import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({isShowModal, createUser, isUserToUpdate, updateUser, resetModalForm}) => {

    const {register, handleSubmit, reset} = useForm()
    const submit = (data) =>{
        if(!data.birthday) data.birthday =null
        if(isUserToUpdate) {
            updateUser(data, reset)
        }else{
            createUser(data, reset)
        }
        
    }

    const handleCloseModal=() =>{
        resetModalForm(reset)

    }

    useEffect(()=>{
        if(isUserToUpdate){
            reset(isUserToUpdate) 
        }
    },[isUserToUpdate])
    
  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center
     ${isShowModal ? "opacity-100 visible" : "invisible opacity-0 "} transition-opacity  `}>
        <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4 grid gap-6 relative'>
            <h3 className='font-bold text-2xl'>{isUserToUpdate ? "Editar Usuario": "Adicionar Usuario" }</h3>

            {/* nombre */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Nombre</label>
                <input placeholder="Igresa Nombre" className='bg-gray-100 outline-none p-2' type="text" {...register("first_name")} />
            </div>
            {/* Apellidos */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Apellidos</label>
                <input placeholder="Ingresa Apellido" className='bg-gray-100 outline-none p-2' type="text" {...register("last_name")} />
            </div>
            {/* correo */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Correo</label>
                <input placeholder="Ingresa Email" className='bg-gray-100 outline-none p-2' type="email" {...register("email")} />
            </div>
            {/* nombre */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Contraseña</label>
                <input placeholder="Ingrese Password" className='bg-gray-100 outline-none p-2' type="password" {...register("password")} />
            </div>
            {/* nombre */}
            <div className='grid gap-2'>
                <label className='font-bold text-sm' htmlFor="">Cumpleaños</label>
                <input placeholder="Ingrese Cumpleaños" className='bg-gray-100 outline-none p-2' type="date" {...register("birthday")} />
            </div>

            <button onClick={handleCloseModal} type='button' className="absolute top-2 right-2 text-2xl hover:text-secondary" > <i className='bx bx-x'></i></button>
            
            <button className='btn-primary'>{isUserToUpdate ? "Guardar Cambios" : "Agregar Usuario"}</button>
        </form>
    </section>
  )
}

export default ModalForm