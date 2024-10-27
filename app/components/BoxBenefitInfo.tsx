"use client"
import React from 'react'
import { SlGlobe } from 'react-icons/sl'
import { TfiCrown } from "react-icons/tfi"
import { HiOutlinePresentationChartBar } from "react-icons/hi2"
import { VscVmActive, VscCode, VscLayersActive, VscExpandAll, VscRobot } from 'react-icons/vsc'

const BoxBenefitInfo = () => {
    return (
        <section className='relative z-50 p-[50px] container w-full bg-secondary h-[465px] rounded-[40px] !-mb-[200px]'>
            <section className='flex-center space-x-[60px]'>
                <section className='w-[478px] flex flex-col space-y-[40px]'>
                    <div className='bg-white w-max rounded-[100px] px-[16px] py-[8px] flexx space-x-[6px]'>
                        <SlGlobe className='w-[24px] h-[24px]'/>
                        <p className='text-[16px] font-semibold'>We host more than 120,000 websites</p>
                    </div>
                    <section className='flex flex-col space-y-[10px]'>
                        <h2 className='text-[46px] font-semibold text-white leading-[100%] tracking-tight'>
                            Start Growing Today
                        </h2>
                        <p className='text-[16px] font-medium leading-[32px] text-white'>We provide a variety of servers to grow your users
                        acquisition much user-friendly and boosting up sales.</p>
                    </section>

                    <section className='flexx space-x-[20px]'>
                        <button className='px-[40px] py-[16px] bg-[#FFD15A] text-primary rounded-[100px] text-[18px] font-bold'>
                            Explore More
                        </button>
                        <button className='flexx space-x-[6px] bg-transparent cursor-pointer outline-none'>
                            <VscVmActive className='w-[24px] h-[24px] text-white'/>
                            <p className='text-white text-[16px] font-semibold'>Schedula a Demo</p>
                        </button>
                    </section>
                </section>
                <section className='grid grid-cols-3 gap-[20px]'>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <VscCode className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Web Crawl</p>
                    </section>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <HiOutlinePresentationChartBar className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Fast Report</p>
                    </section>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <VscLayersActive className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Anti-DDos</p>
                    </section>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <VscExpandAll className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Auto Scale</p>
                    </section>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <VscRobot className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Ai Perform</p>
                    </section>
                    <section className='w-[150px] rounded-[26px] bg-white py-[40px] flex-center flex-col space-y-[20px]'>
                        <TfiCrown className='text-secondary w-[46px] h-[46px]'/>
                        <p className='text-[18px] font-bold'>Top Plugin+</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default BoxBenefitInfo