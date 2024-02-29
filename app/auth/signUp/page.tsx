import { signUp } from '@/api-service/api-service'
import { ISignUpPayload, IAuthPromise } from '@/app/types/auth.types'
import { redirect } from 'next/navigation'
import React from 'react'
interface formData {
  full_name: FormDataEntryValue | null,
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}
const SignUp = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server"
    let full_name = formData.get('full_name')
    let username = formData.get('username')
    let password = formData.get('password')
    let payload: formData = { full_name, username, password }
   const response:IAuthPromise | undefined  =  await signUp({ ...payload })
   console.log(response?.tokens, "response-1");
   if(response?.tokens)
      redirect("/auth/signIn");
  }
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-[30px] my-4'>SignUp</h1>
      <form action={handleSubmit} className=' min-h-[96px] w-[600px] p-[20px] border-[1px]'>
        <input type="text" placeholder='full name' name='full_name' className=' w-full p-3 my-3 rounded-md border border-[#000]' />
        <input type="text" placeholder='username' name='username' className=' w-full p-3 my-3 rounded-md border border-[#000]' />
        <input type="text" placeholder='password' name='password' className=' w-full p-3 my-3 rounded-md border border-[#000]' />
        <button className='w-full p-3 border border-[#000] rounded-lg'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp