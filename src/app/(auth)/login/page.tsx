import { getSession } from '@/core/auth/auth'
import Login from '@/modules/auth/login/login'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function LoginPage() {
    const session = await getSession()
    console.log(session)
    if (session) {
        return redirect("/")

    }
    return (
        <div>
            <p>Welcome Back</p>
            <div>
                <Login />
            </div>
        </div>
    )
}
