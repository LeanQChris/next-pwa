import React from 'react'
import { contactUsContactNumberIcon, contactusEmailIcon, contactusLocationIcon } from '@/components/icons/svg-icons'

export default function ContactCards() {
    const contactInfo = [
        { title: "Contact Number", value: "012343364", icon: contactUsContactNumberIcon },
        { title: "Email Address", value: "company@gmail.com", icon: contactusEmailIcon },
        { title: "Location", value: "New South Wales (Sydney)", icon: contactusLocationIcon },
    ]
    return (
        <div className='space-y-4'>
            {
                contactInfo.map((info, index) => (
                    <div key={index} className='flex gap-4 py-4 px-6 rounded-md border-gray-200 border justify-between'>
                        <div>
                            <p className='text-[16px] font-semibold'>{info.title}</p>
                            <p className='text-[14px] text-gray-500'>{info.value}</p>
                        </div>
                        <div>{info.icon}</div>
                    </div>
                ))
            }
        </div>
    )
}
