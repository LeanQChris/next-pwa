"use client"
import { backIcon } from '@/components/icons/svg-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function MobileHeader({ title }: { title: string }) {
    const router = useRouter()
    return (
        <div className='flex gap-4 py-6 px-6 h-[75px] md:hidden'>
            <button onClick={() => router.back()}>{backIcon}</button>
            <p className='text-[16px] font-semibold'>{title}</p>
        </div>
    )
}
