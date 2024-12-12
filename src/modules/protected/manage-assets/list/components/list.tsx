import { chevronRight } from '@/components/icons/svg-icons'
import React from 'react'

export default function AssetsLists() {
    return (
        <div>{
            Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className='bg-white rounded-lg shadow-md p-4 mb-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='space-y-1'>
                                <div className='flex gap-4 items-center'>
                                    <p>Order no. #1234</p>
                                    <div className='rounded text-white bg-orange-500 px-1 text-sm'>Delievered</div>
                                </div>
                                <p className='text-gray-500'>4 assets</p>
                            </div>
                        </div>
                        {chevronRight}
                    </div>
                </div>
            ))
        }</div>
    )
}
