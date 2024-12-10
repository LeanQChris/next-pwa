import BottomNavLayout from '@/components/layouts/layout'
import React from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <BottomNavLayout>{children}</BottomNavLayout>
    )
}
