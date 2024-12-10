import Image from 'next/image'
import React from 'react'
import { contactUsIcon, notificationIcon } from '../icons/svg-icons'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-8 py-6'>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />

            <div className='flex gap-4 items-center justify-center'>
                <Link href={"/contact-us"}>
                    {contactUsIcon}
                </Link>
                <Link href={"/notification"}>
                    {notificationIcon}
                </Link>
            </div>
        </div>
    )
}
