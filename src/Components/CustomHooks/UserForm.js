import React, {useState} from 'react'
import useInput from './Hooks/useInput'

function UserForm() {

    const[firstname, bindFirstname, resetFirstname]=useInput(" ")
    const[lastname, bindLastname, resetLastname] = useInput(" ")

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }

    return (
        <div>
           <form onSubmit={submitHandler}>
               <div>
                   <label>First Name</label>
                   <input type="text" {...bindFirstname}/>
               </div>
               <div>
                   <label>Last Name</label>
                   <input type="text" {...bindLastname}/>
               </div>
               <button>Submit</button>
            </form> 
        </div>
    )
}

export default UserForm
