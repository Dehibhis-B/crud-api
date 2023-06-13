import React from 'react'

const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {

  const handleClickDeleted = () => {
    deleteUser(user.id)
  }

  const handleClickUpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  return (
    <article className="p-4 border-2 border-zinc-300/75">
      <h4 className="text-lg font-bold opacity-90 " >{user.first_name} {user.last_name}</h4>
      <div>
        <h5 className="text-[12px] opacity-50">CORREO</h5>
        <span className="text-[12px]" >{user.email}</span>
      </div>
      <div>
        <h5 className='text-[12px] opacity-50'>CUMPLEAÑOS</h5>
        <span className="text-[12px]" ><i className='bx bxs-gift'></i>{user.birthday || " no definido"}</span>
      </div>
      <div className='flex justify-end gap-1 p-1'>
        <button className="bg-red-500 hover:bg-red-600 w-8 h-8 rounded-md text-white" onClick={handleClickDeleted} ><i className="bx bxs-trash-alt"></i></button>
        <button className="bg-gray-500 hover:bg-green-500 w-8 h-8 rounded-md text-white" onClick={handleClickUpdate} ><i className='bx bxs-pencil' ></i></button>
      </div>
      
    </article>
  )
}

export default User