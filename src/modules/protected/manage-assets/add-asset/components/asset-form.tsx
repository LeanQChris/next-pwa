import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function AssetForm({ isUpdate = false }: { isUpdate?: boolean }) {
    return (
        <form className='space-y-4'>
            <Input placeholder='Plant Number' />
            <Input placeholder='Equipment Type' />
            <Input placeholder='Make' />
            <Input placeholder='Model' />
            <Input placeholder='Sub Model' />
            <Input placeholder='Year' />
            <Input placeholder='Engine' />
            <Input placeholder='Vin/Serial' />
            <Input placeholder='Rego' />
            <Input placeholder='Upload Image' type='file' />
            <Textarea placeholder='Short Description' />
            <Button className='w-full bg-orange-500 text-white'>Add</Button>
        </form>
    )
}
