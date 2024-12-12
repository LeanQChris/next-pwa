import React from 'react'
import ContactCards from './components/contact-cards'
import ContactForm from './components/contact-form'

export default function ContactUs() {
    return (
        <div className='py-4 px-6 space-y-4'>
            <ContactCards />
            <ContactForm />
        </div>
    )
}
