"use client"
import React from 'react'
import Image from 'next/image'
import { TfiCrown } from "react-icons/tfi"
import { RiCloudWindyLine } from "react-icons/ri"
import sectionImage from '@/app/assets/images/section-image.png'
import { HiOutlinePresentationChartBar } from 'react-icons/hi'
import { VscPulse, VscServer, VscVmActive, VscStarFull, VscCode } from "react-icons/vsc"



const EcosystemInfo = () => {
    return (
        <section className='container flex-between px-[70px]'>
            <section className='relative w-[500px]'>
                <div className='relative w-[400px] h-[497px]'>
                    <Image src={sectionImage} fill alt="section-image" className='w-full h-full rounded-b-[70px] rounded-r-[70px]'/>
                </div>
                <div className='absolute top-10 -left-16 bg-white h-[160px] p-[20px] space-y-[20px] rounded-[26px] flex-evenly flex-col'>
                    <HiOutlinePresentationChartBar className='w-[46px] h-[46px] text-secondary'/>
                    <div className='flex flex-col space-y-[2px]'>
                        <p className='text-primary text-[18px] font-bold'>5/5 Growth</p>
                        <div className="flexx space-x-[2px]">
                            {Array(5).fill('#').map((_, index) => (
                                <VscStarFull className='text-[#FF961A] w-[18px] h-[18px]' key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-12 right-10 bg-white rounded-[26px] flexx space-x-[20px] p-[20px]'>
                    <VscCode className='text-secondary w-[46px] h-[46px]'/>
                    <div className='flex flex-col space-y-[2px]'>
                        <p className='text-[20px] font-bold text-primary'>AI Automation</p>
                        <p className='text-[16px] font-medium text-[#5D5D7C]'>Working Faster</p>
                    </div>
                </div>
                <button className='absolute bg-secondary top-10 right-14 rounded-[100px] p-[20px] flex-center'>
                    <TfiCrown className='text-white w-[46px] h-[46px]'/>
                </button>
            </section>


            <section className='w-[500px] space-y-[40px]'>
                <section className='flex flex-col space-y-[10px]'>
                    <h2 className='text-[46px] font-semibold text-primary leading-[1.2] tracking-tight'>We Have Very Strong Ecosystem</h2>
                    <p className='text-[16px] leading-[36px] text-[#5D5D7C]'>
                        We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.
                    </p>
                </section>
                <section className='flex flex-col space-y-[20px]'>
                    <section className='flexx space-x-[16px] bg-white p-[20px] rounded-[16px]'>
                        <VscPulse className='text-secondary w-[46px] h-[46px]'/>
                        <div className='flex flex-col space-y-[2px]'>
                            <p className='text-primary text-[22px] leading-[24px] font-bold'>$880 Mio</p>
                            <p className='text-[16px] font-medium text-[#5D5D7C]'>Company budget saved</p>
                        </div>
                    </section>
                    <section className='flexx space-x-[16px] bg-white p-[20px] rounded-[16px]'>
                        <VscServer className='text-secondary w-[46px] h-[46px]'/>
                        <div className='flex flex-col space-y-[2px]'>
                            <p className='text-primary text-[22px] leading-[24px] font-bold'>450,392</p>
                            <p className='text-[16px] font-medium text-[#5D5D7C]'>All servers available</p>
                        </div>
                    </section>
                    <section className='flexx space-x-[16px] bg-white p-[20px] rounded-[16px]'>
                        <RiCloudWindyLine className='text-secondary w-[46px] h-[46px]'/>
                        <div className='flex flex-col space-y-[2px]'>
                            <p className='text-primary text-[22px] leading-[24px] font-bold'>189 Mio</p>
                            <p className='text-[16px] font-medium text-[#5D5D7C]'>Website are running good</p>
                        </div>
                    </section>
                </section>
                <section className='flexx space-x-[20px]'>
                    <button className='bg-secondary text-white rounded-[100px] px-[40px] py-[16px] text-[18px] font-bold'>
                        Explore More
                    </button>
                    <div className='flexx space-x-[6px] bg-transparent cursor-pointer'>
                        <VscVmActive className='w-[24px] h-[24px] text-secondary'/>
                        <p className='text-secondary text-[16px] font-semibold'>Schedula a Demo</p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default EcosystemInfo