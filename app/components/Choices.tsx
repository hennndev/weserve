"use client"
import React from 'react'
import Link from 'next/link';
import { HiOutlinePresentationChartBar } from "react-icons/hi2"
import { VscLayersActive, VscSymbolMethod, VscExpandAll } from "react-icons/vsc"



const Choices = () => {
    return (
        <section className='container space-y-[30px]'>
            <h2 className='text-[46px] font-semibold text-primary leading-[100%] tracking-tight text-center'>Your Best Choices</h2>
            <section className='flexx space-x-[30px]'>
                <section className='bg-white pl-[24px] pr-[20px] py-[30px] rounded-[16px] flex flex-col space-y-[30px]'>
                    <VscLayersActive className='text-secondary w-[46px] h-[46px]'/>
                    <div className='flex flex-col space-y-[4px]'>
                        <h3 className='text-[22px] font-bold text-primary'>Extra Layers</h3>
                        <p className='text-[16px] leading-[28px] font-medium text-[#5D5D7C]'>Making your project more secure avoiding DDoS</p>
                    </div>
                    <Link href="#" className='text-secondary text-[16px] font-semibold'>Learn More</Link>
                </section>

                <section className='bg-white pl-[24px] pr-[20px] py-[30px] rounded-[16px] flex flex-col space-y-[30px]'>
                    <VscSymbolMethod className='text-secondary w-[46px] h-[46px]'/>
                    <div className='flex flex-col space-y-[4px]'>
                        <h3 className='text-[22px] font-bold text-primary'>Customizable</h3>
                        <p className='text-[16px] leading-[28px] font-medium text-[#5D5D7C]'>
                            Only install what yor business needs to grow
                        </p>
                    </div>
                    <Link href="#" className='text-secondary text-[16px] font-semibold'>Learn More</Link>
                </section>

                <section className='bg-primary pl-[24px] pr-[20px] py-[30px] rounded-[16px] flex flex-col space-y-[30px]'>
                    <HiOutlinePresentationChartBar className='text-white w-[46px] h-[46px]'/>
                    <div className='flex flex-col space-y-[4px]'>
                        <h3 className='text-[22px] font-bold text-white'>AI Automation</h3>
                        <p className='text-[16px] leading-[28px] font-medium text-[#8D90A8]'>
                            Decide to business flow based on latest reports
                        </p>
                    </div>
                    <Link href="#" className='text-secondary text-[16px] font-semibold'>Learn More</Link>
                </section>

                <section className='bg-white pl-[24px] pr-[20px] py-[30px] rounded-[16px] flex flex-col space-y-[30px]'>
                    <VscExpandAll className='text-secondary w-[46px] h-[46px]'/>
                    <div className='flex flex-col space-y-[4px]'>
                        <h3 className='text-[22px] font-bold text-primary'>Auto-Scaling</h3>
                        <p className='text-[16px] leading-[28px] font-medium text-[#5D5D7C]'>
                            Have a long weekend without worrying any loss
                        </p>
                    </div>
                    <Link href="#" className='text-secondary text-[16px] font-semibold'>Learn More</Link>
                </section>
            </section>
        </section>
    )
}

export default Choices