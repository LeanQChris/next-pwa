import { searchIcon } from '@/components/icons/svg-icons'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function HomePage() {
    return (
        <div className=''>
            <div className='flex border items-center pl-2'>
                {searchIcon}
                <Input placeholder='Search by Plant or Product Number' className='border-0 focus:outline-none active:border-none' />
            </div>
        </div>
    )
}
