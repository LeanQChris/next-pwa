import MobileHeader from '@/components/ui/headers/mobile.header'
import AddAsset from '@/modules/protected/manage-assets/add-asset/add-asset'
import React from 'react'

export default function AddAssetPage() {
    return (
        <div>
            <MobileHeader title='Add Assets' />
            <AddAsset />
        </div>
    )
}
