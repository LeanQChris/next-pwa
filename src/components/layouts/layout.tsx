import BottomNavBar from '@/components/layouts/bottom-nav'
import React from 'react'
import Navbar from './navbar'

export default function BottomNavLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className='py-4 px-6'>
                {children}
            </main>
            <BottomNavBar />
        </div>
    )
}
