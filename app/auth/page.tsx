import Link from 'next/link'
import React from 'react'

const Auth = () => {
  return (
    <div>
      <h1>Auth page</h1>
      <Link href="/auth/signUp">SignUp page</Link>
    </div>
  )
}

export default Auth