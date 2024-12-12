import { Button } from '@/components/ui/button'
import MobileHeader from '@/components/ui/headers/mobile.header'
import ManageAssets from '@/modules/protected/manage-assets/list/assets-lists'
import Link from 'next/link'
import React from 'react'

export default function ManageAssetPage() {
    return (
        <div className='relative'>
            <MobileHeader title='Assets List' />
            <ManageAssets />
            <div className='fixed bottom-0 w-full p-6 bg-white'>
                <Link href={"/manage-assets/add"}>
                    <Button className='w-full bg-orange-500 text-white'>Add Asset</Button>
                </Link>
            </div>
        </div >
    )
}
