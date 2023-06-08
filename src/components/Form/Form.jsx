import React, { useState } from 'react'
export const Form = () => {
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')


  return (
    <div className='sm:mt-[-1.9rem] ' >
    <h1 className='text-[#f0c70a] font-bold text-[28px]'>Entre em contato</h1>
    <h3 className='text-white text-[12px]'>Solicite o seu orçamento e negocie comnosco</h3>
    <form className='flex flex-col mt-4' action='https://formsubmit.co/capitaolebara952@gmail.com' method='POST'>
        <input required name='email' type="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='Digite seu email' 
         className=' w-full sm:w-[20rem] h-[1.5rem] pl-2 bg-transparent border-[0.13rem] outline-none text-[#f0c70a]  font-bold border-solid border-[#f0c70a] py-[1rem] placeholder:text-[#f0c70a] focus:bg-[#f0c70a] focus:text-white focus:placeholder:text-white mt-2'/>

        <textarea cols="1" rows="3" 
        name='text' type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder='Escreva o tipo de serviço de segurança que deseja'

        className='mt-2 resize-none w-full sm:w-[20rem] text-[15px] placeholder:text-[14px]
         bg-transparent border-[0.13rem] outline-none text-[#f0c70a]  font-bold border-solid border-[#f0c70a] py-[1rem] placeholder:text-[#f0c70a] focus:bg-white focus:text-black focus:placeholder:text-white'></textarea>

        <input type="submit" value="Enviar" className='
        mt-4 w-[7rem] h-[1.9rem] text-[18px] text-center border-[0.13rem] outline-none font-bold border-solid border-[#f0c70a] hover:bg-transparent bg-[#f0c70a] text-white cursor-pointer'   />
    </form>
    
</div>
  )
}



