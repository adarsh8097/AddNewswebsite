import Login from '@/components/Login';
import React from 'react'
import Head from 'next/head';
const LoginPage = () => {
  return (
    <div>
      <div>
         <Head>
          <title>Login page</title>
         </Head>
      </div>
      <Login/>
    </div>
  )
}

export default LoginPage;

