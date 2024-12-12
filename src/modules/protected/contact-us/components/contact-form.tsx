import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function ContactForm() {
    return (
        <div className='py-4 px-6 border rounded-md space-y-4'>
            <h4 className='text-lg font-semibold'>Get in Touch</h4>
            <form className='space-y-4'>
                <Input placeholder='Enter Name' />
                <Input placeholder='Enter Email Address' />
                <Textarea placeholder='Enter Name' />
                <Button className='w-full bg-orange-500 text-white'>Submit</Button>
            </form>
        </div>
    )
}
