import MobileHeader from '@/components/ui/headers/mobile.header'
import ContactUs from '@/modules/protected/contact-us/contact-us'
import React from 'react'

export default function ContactusPage() {

    return (
        <div>
            <MobileHeader title='Contact us' />
            <ContactUs />
        </div>
    )
}
