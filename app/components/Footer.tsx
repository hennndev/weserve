"use client"
import React from 'react'
import Image from 'next/image'
import { SlGlobe } from "react-icons/sl"
import { VscMail } from "react-icons/vsc"
import logoImage from '@/app/assets/icons/logo.svg'
import { IoCallOutline } from "react-icons/io5"
import { PiVideo } from "react-icons/pi"
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='relative h-[695px] bg-[#070C29] pt-[330px] pb-[50px] px-[75px] space-y-[50px]'>
        <section className='flex justify-between'>
            <section className='flex flex-col space-y-[30px] w-[300px]'>
                <section className='flexx space-x-[6px]'>
                    <div className="relative w-[40px] h-[40px]">
                        <Image src={logoImage} fill alt="logoImage" className='w-full h-full'/>
                    </div>
                    <h1 className='text-white text-[28px] font-bold text-primary'>weserve.</h1>
                </section>  
                <p className='text-[16px] leading-[28px] font-medium text-[#8D90A8] hover:text-secondary'>We host your empire business today using the latest technologies.</p>
                <section className='flexx space-x-[14px]'>
                    <div className='bg-white rounded-[100px] p-[10px]'>
                        <VscMail className='text-secondary w-[24px] h-[24px]'/>
                    </div>
                    <div className='bg-white rounded-[100px] p-[10px]'>
                        <SlGlobe className='text-secondary w-[24px] h-[24px]'/>
                    </div>
                    <div className='bg-white rounded-[100px] p-[10px]'>
                        <IoCallOutline className='text-secondary w-[24px] h-[24px]'/>
                    </div>
                    <div className='bg-white rounded-[100px] p-[10px]'>
                        <PiVideo className='text-secondary w-[24px] h-[24px]'/>
                    </div>
                </section>
            </section>

            <section className='flex flex-col space-y-[30px]'>
                <h3 className='text-[18px] font-bold text-white'>Products</h3>
                <section className='flex flex-col space-y-[16px]'>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Powerful Reports</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Blockchain</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Auto-Backup</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Data Science</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Auto-Scaling Up</Link>
                </section>
            </section>
            <section className='flex flex-col space-y-[30px]'>
                <h3 className='text-[18px] font-bold text-white'>Resources</h3>
                <section className='flex flex-col space-y-[16px]'>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Support 24/7</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Help Center</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>How-to Instructions</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Blog & Tips</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>About Us</Link>
                </section>
            </section>
            <section className='flex flex-col space-y-[30px]'>
                <h3 className='text-[18px] font-bold text-white'>Company</h3>
                <section className='flex flex-col space-y-[16px]'>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Privacy And Policy</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Term And Conditions</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Investor Relations</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Join With Us</Link>
                    <Link href="#" className='text-[16px] font-medium text-[#8D90A8] hover:text-secondary'>Our Statistics</Link>
                </section>
            </section>
        </section>
        <section>
            <p className='text-[16px] text-[#8D90A8] font-medium text-center'>All Rights Reserved • Copyright Weserve by Hennndev 2024</p>
        </section>
    </footer>
  )
}

export default Footer