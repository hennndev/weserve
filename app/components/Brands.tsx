"use client"
import React from 'react'
import brandLogo1 from '@/app/assets/images/brand1.png'
import brandLogo2 from '@/app/assets/images/brand2.png'
import brandLogo3 from '@/app/assets/images/brand3.png'
import brandLogo4 from '@/app/assets/images/brand4.png'
import brandLogo5 from '@/app/assets/images/brand5.png'
import Image from 'next/image'

const Brands = () => {
    return (
        <section className='container flex-center space-x-[50px]'>
            <div className='relative w-[140px] h-[34px]'>
                <Image src={brandLogo1} fill alt='brand-logo-1' priority className='w-full h-full object-contain'/>
            </div>
            <div className='relative w-[154px] h-[34px]'>
                <Image src={brandLogo2} fill alt='brand-logo-2' priority className='w-full h-full object-contain'/>
            </div>
            <div className='relative w-[138px] h-[34px]'>
                <Image src={brandLogo3} fill alt='brand-logo-3' priority className='w-full h-full object-contain'/>
            </div>
            <div className='relative w-[141px] h-[34px]'>
                <Image src={brandLogo4} fill alt='brand-logo-4' priority className='w-full h-full object-contain'/>
            </div>
            <div className='relative w-[141px] h-[34px]'>
                <Image src={brandLogo5} fill alt='brand-logo-5' priority className='w-full h-full object-contain'/>
            </div>
        </section>
    )
}

export default Brands