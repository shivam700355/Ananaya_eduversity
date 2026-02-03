import React from 'react'
const RadioButton = ({label,type ,name}) =>{
    return (
        <>
        <label for="username">{label}</label>
        <input type={type} name={name}
        className='mr-6'
        
        />
        
        </>
    )
}

export default RadioButton
