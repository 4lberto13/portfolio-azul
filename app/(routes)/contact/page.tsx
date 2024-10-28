"use client"

import ContactForm from '@/components/ContactForm';
import { CoverParticles } from '@/components/CoverParticles';
import TransitionPage from '@/components/TransitionPage';

const TestimonialsPage = () => {
    return (
        <>
            <CoverParticles/>
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh'>
                <ContactForm/>
          </div>
        </>
    );
}

export default TestimonialsPage;