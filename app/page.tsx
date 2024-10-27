import React from 'react'
import Hero from '@/app/components/Hero'
import Brands from '@/app/components/Brands'
import Choices from '@/app/components/Choices'
import Showcase from '@/app/components/Showcase'
import EcosystemInfo from '@/app/components/EcosystemInfo'
import FAQ from '@/app/components/FAQ'

const page = () => {
    return (
        <section className='space-y-[100px]'>
            <Hero/>
            <Brands/>
            <Choices/>
            <EcosystemInfo/>
            <Showcase/>
            <FAQ/>
        </section>
    )
}

export default page