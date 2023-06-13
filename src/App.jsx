
import { useEffect, useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import UserList from './components/UserList'
import { data } from 'autoprefixer'

const BASE_URL = "https://users-crud.academlo.tech"

const DEFAULT_VALUES = {
  birthday:"",
  first_name:"",
  last_name:"",
  password:"",
  email:""
}

function App() {

  const [isUserToUpdate,setIsUserToUpdate ] = useState(null)
  
  const [users, setUsers] = useState([])

  const [isShowModal, setIsShowModal] = useState(false)

  const changeShowModal = () => setIsShowModal(!isShowModal)

  const getAllUSers = () =>{
    const url = BASE_URL + "/users/"
    
    axios.get(url)
      .then(({data})=> setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) =>{
    const url = BASE_URL + "/users/" 

    axios.post(url, data)
      .then(()=>{
        getAllUSers()
        resetModalForm(reset)
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) =>{
    const url = BASE_URL + `/users/${id}/` 

    axios.delete(url)
      .then(()=> getAllUSers())
      .catch((err) => console.log(err))

  }

  const updateUser = (data, reset) =>{
    const url = BASE_URL + `/users/${isUserToUpdate.id}/` 

    axios.patch(url, data)
      .then(()=> {
        getAllUSers()
        resetModalForm(reset)
      })
      .catch((err) => console.log(err))


  }

  const resetModalForm = (reset) =>{
    setIsShowModal(false);
    reset(DEFAULT_VALUES )
    setIsUserToUpdate(null);

  }

  useEffect(() => {
    getAllUSers()
  },[])

  return (
    <main className="font-['Roboto'] ">

      <section>
        
          <Headers changeShowModal={changeShowModal}/>
        
        
          <ModalForm isShowModal={isShowModal} createUser={createUser}
            isUserToUpdate={isUserToUpdate} updateUser={updateUser} resetModalForm={resetModalForm}/>
        
        
        <UserList users={users} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} />
        
      
      
      

      </section>
      
      
    </main>
  )
}

export default App
