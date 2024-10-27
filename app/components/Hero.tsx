"use client"
import React from 'react'
import Image from 'next/image'
import { SlGlobe } from "react-icons/sl"
import { VscVmActive } from "react-icons/vsc"
import { RiCloudWindyLine } from "react-icons/ri"
import heroImage from '@/app/assets/images/hero-image.png'
import { HiOutlinePresentationChartBar } from "react-icons/hi2"



const Hero = () => {
    return (
        <section className="container mt-[100px]">
            <section className='flex-between'>
                <section className='w-[574px] flex flex-col space-y-[40px]'>
                    <div className='bg-white w-max rounded-[100px] px-[16px] py-[8px] flexx space-x-[6px]'>
                        <SlGlobe className='w-[24px] h-[24px]'/>
                        <p className='text-[16px] font-semibold'>We host more than 120,000 websites</p>
                    </div>

                    <div className='flex flex-col space-y-[10px]'>
                        <h1 className='text-[70px] font-bold text-primary leading-[100%] tracking-tight'>Grow Online Business Faster</h1>
                        <p className='w-[432px] font-medium text-[16px] leading-[32px] text-[#5D5D7C]'>We provide a variety of servers to grow your users
                        acquisition much user-friendly and boosting up sales.</p>
                    </div>

                    <div className='flexx space-x-[20px]'>
                        <button className='bg-secondary text-white rounded-[100px] px-[40px] py-[16px] text-[18px] font-bold'>Try Free Trial</button>
                        <button className='flexx space-x-[6px] bg-transparent cursor-pointer outline-none'>
                            <VscVmActive className='w-[24px] h-[24px] text-secondary'/>
                            <p className='text-secondary text-[16px] font-semibold'>Schedula a Demo</p>
                        </button>
                    </div>
                </section>
                
                <section className='relative w-[500px]'>
                    <div className='absolute -top-12 -left-12 z-50 bg-white rounded-[26px] flexx space-x-[20px] p-[20px]'>
                        <RiCloudWindyLine className='text-secondary w-[46px] h-[46px]'/>
                        <div className='flex flex-col space-y-[2px]'>
                            <p className='text-[20px] font-bold text-primary'>Super Reliable</p>
                            <p className='text-[16px] font-medium text-[#5D5D7C]'>24/7 Always Active</p>
                        </div>
                    </div>
                    <div className='relative w-[400px] h-[497px]'>
                        <Image src={heroImage} fill alt="hero" className='w-full h-full'/>
                    </div>

                    <button className='absolute bg-secondary top-10 right-14 rounded-[100px] p-[20px] flex-center'>
                        <SlGlobe className='text-white w-[46px] h-[46px]'/>
                    </button>

                    <div className='absolute bottom-10 right-14 bg-white w-[160px] h-[180px] p-[20px] space-y-[20px] rounded-[26px] flex-evenly flex-col'>
                        <HiOutlinePresentationChartBar className='w-[46px] h-[46px] text-secondary'/>
                        <div className='flex flex-col space-y-[2px]'>
                            <p className='text-primary text-[30px] font-bold'>+490%</p>
                            <p className='text-[#5D5D7C] text-[16px] font-medium'>Engagements</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Hero