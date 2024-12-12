import { SearchInput } from '@/components/ui/input'
import React from 'react'
import AssetsLists from './components/list'

export default function ManageAssets() {
    return (
        <div className='px-6 space-y-6'>
            <SearchInput />
            <AssetsLists />
        </div>
    )
}
