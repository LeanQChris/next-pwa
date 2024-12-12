import React from 'react'
import {
    activeContactUsIcon,
    chevronRight,
    cogIcon,
    faqIocn,
    logoutIcon,
} from "@/components/icons/svg-icons";
import Link from 'next/link';
import { signOut } from 'next-auth/react';
export default function ProfileMenues() {
    return (
        <div className='space-y-6'>
            <Link href="/manage-assets" className="flex justify-between">
                <div className="flex gap-4 items-center">
                    {cogIcon}
                    <p>Manage assets</p>
                </div>
                {chevronRight}
            </Link>
            <Link href="/contact-us" className="flex justify-between">
                <div className="flex gap-4 items-center">
                    {activeContactUsIcon}
                    <p>Contact Us</p>
                </div>
                {chevronRight}
            </Link>
            <Link href="/contact-us" className="flex justify-between">
                <div className="flex gap-4 items-center">
                    {faqIocn}
                    <p>Faq</p>
                </div>
                {chevronRight}
            </Link>
            <div className="flex justify-between" onClick={() => signOut()}>
                <div className="flex gap-4 items-center">
                    {logoutIcon}
                    <p>Logout</p>
                </div>
                {chevronRight}
            </div>
        </div>
    )
}
