import React, { useState } from 'react'

const Signup = () => {
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input name='username' onChange={(e) => changeUsername(e.target.value)}></input>
            <input name='password' onChange={(e) => changePassword(e.target.value)}></input>
            <input type="submit" value='Submit'></input>
        </form>
    )
}

export default Signup