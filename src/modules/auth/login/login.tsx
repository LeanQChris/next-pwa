"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react';
import React from 'react'

export default function Login() {

    async function handleLogin(formData: FormData) {
        const email = formData.get('email');
        const password = formData.get('password');

        await signIn("credentials", {
            email: email as string,
            password: password as string,
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <form action={handleLogin}>
            <Input placeholder="Username" name='email' defaultValue={"leanq.digital@gmail.com"} />
            <Input placeholder="Password" name="password" defaultValue={"leanq@123"} />
            <p className='text-end'>Forgot Password?</p>
            <Button className='w-full bg-orange-500 text-white'>Login</Button>
        </form>
    )
}
