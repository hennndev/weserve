"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/app/assets/icons/logo.svg'
import { IoBagHandleOutline, IoChevronDown } from "react-icons/io5";

const Header = () => {
    return (
        <header className='container mt-5'>
            <section className='flex-between'>
                <section className="flexx space-x-[6px]">
                    <div className='relative w-[40px] h-[40px]'>
                        <Image src={logoImage} fill alt='logo' className='w-full h-full'/>
                    </div>
                    <h1 className='text-[28px] font-bold text-primary'>weserve.</h1>
                </section>
                
                <section className='flexx space-x-[30px]'>
                    <Link href="#" className='text-[16px] font-medium outline-none hover:text-secondary'>Products</Link>
                    <div className='flexx space-x-[4px] cursor-pointer'>
                        <p className='text-[16px] font-medium'>Services</p>
                        <IoChevronDown className='w-[18px] h-[18px] mt-[1px]'/>
                    </div>
                    <Link href="#" className='text-[16px] font-medium outline-none hover:text-secondary'>Pricing</Link>
                    <Link href="#" className='text-[16px] font-medium outline-none hover:text-secondary'>Testimonials</Link>
                    <Link href="#" className='text-[16px] font-medium outline-none hover:text-secondary'>Blog</Link>
                </section>

                <section className='flexx space-x-[10px]'>
                    <div className='relative bg-white p-[10px] rounded-full'>
                        <IoBagHandleOutline className='text-primary w-[24px] h-[24px]'/>
                        <div className='absolute top-4 right-2 animate-pulse bg-red-color w-[8px] h-[8px] rounded-full'></div>
                    </div>
                    <button className='bg-primary text-white rounded-[100px] px-[30px] py-[10px] text-[16px] font-semibold'>Sign In</button>
                </section>
            </section>
        </header>
    )
}

export default Header