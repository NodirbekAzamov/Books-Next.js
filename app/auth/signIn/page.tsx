import { signIn } from '@/api-service/api-service'
import { IAuthPromise, ISignInPayload } from '@/app/types/auth.types'
import { redirect } from 'next/navigation'
import React from 'react'
interface formData {
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}
const SignIn = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server"
    let username = formData.get('username')
    let password = formData.get('password')
    let payload: ISignInPayload = {username, password}
    const response: IAuthPromise | undefined = await signIn({...payload})
    if (response?.tokens) {
      redirect("/dashboard")
    }
  }
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-[30px] my-4'>SignUp</h1>
      <form action={handleSubmit} className=' min-h-[96px] w-[600px] p-[20px] border-[1px]'>
        <input type="text" placeholder='username' name='username' className=' w-full p-3 my-3 rounded-md border border-[#000]' />
        <input type="text" placeholder='password' name='password' className=' w-full p-3 my-3 rounded-md border border-[#000]' />
        <button className='w-full p-3 border border-[#000] rounded-lg'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignIn