import React,{useId, useState} from 'react'
import style from './Form.module.css'
export default function Form() {

    // const[email,setEmail]=useState("")
    // const[id,setId]=useState("")
    // const[Passward,setPassward]=useState("")
    
   

  return (
    <div>
        <h1 >Registration</h1>
        <form action=''>
            <div className={style.formGroup}>
            <label htmlFor='email'>Email: </label>
            {/* <input type="email" name='email' id='email' onClick={handleEmailChange} required></input> */}
        </div><div className={style.formGroup}>
                <label htmlFor='id'>id: </label>
                {/* <input type="id" name='id' id='id' required></input> */}
            </div><div className={style.formGroup}>
                <label htmlFor='passward'>passward: </label>
                {/* <input type="passward" name='passward' id='passward' required></input> */}
            </div>
            
        </form>
    </div>
  )
}
