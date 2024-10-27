"use client"
import React from 'react'
import Image from 'next/image'
import showcaseImage1 from '@/app/assets/images/showcase1.svg'
import showcaseImage2 from '@/app/assets/images/showcase2.svg'
import showcaseImage3 from '@/app/assets/images/showcase3.svg'
import showcaseImage4 from '@/app/assets/images/showcase4.svg'

const Showcase = () => {
    return (
        <section className='flex flex-col space-y-[30px]'>
            <section className='flex flex-col space-y-[30px]'>
                <h2 className='text-[46px] font-semibold leading-[100%] tracking-tight text-center text-primary'>Our Showcase</h2>
                <p className='w-[527px] mx-auto text-[16px] font-medium leading-[32px] text-[#5D5D7C] text-center'>They built amazing website to help more people around the world by using our recommendation services and products</p>
            </section>
            <section className='flex-center space-x-[40px]'>
                <div className='group relative w-[340px] h-[240px] border-4 border-transparent hover:border-secondary rounded-[16px]'>
                    <Image src={showcaseImage1} alt="showcase-image-1" fill className='w-full h-full'/>
                    <div className='hidden group-hover:flex absolute w-full h-full top-0 left-0 bottom-0 justify-center items-end pb-10'>
                        <button className='bg-secondary text-white px-[30px] py-[10px] rounded-[100px] text-[16px] font-semibold shadow-xl'>View Details</button>
                    </div>
                </div>
                <div className='group relative w-[340px] h-[240px] border-4 border-transparent hover:border-secondary rounded-[16px]'>
                    <Image src={showcaseImage2} alt="showcase-image-2" fill className='w-full h-full'/>
                    <div className='hidden group-hover:flex absolute w-full h-full top-0 left-0 bottom-0 justify-center items-end pb-10'>
                        <button className='bg-secondary text-white px-[30px] py-[10px] rounded-[100px] text-[16px] font-semibold shadow-xl'>View Details</button>
                    </div>
                </div>
                <div className='group relative w-[340px] h-[240px] border-4 border-transparent hover:border-secondary rounded-[16px]'>
                    <Image src={showcaseImage3} alt="showcase-image-3" fill className='w-full h-full'/>
                    <div className='hidden group-hover:flex absolute w-full h-full top-0 left-0 bottom-0 justify-center items-end pb-10'>
                        <button className='bg-secondary text-white px-[30px] py-[10px] rounded-[100px] text-[16px] font-semibold shadow-xl'>View Details</button>
                    </div>
                </div>
                <div className='group relative w-[340px] h-[240px] border-4 border-transparent hover:border-secondary rounded-[16px]'>
                    <Image src={showcaseImage4} alt="showcase-image-4" fill className='w-full h-full'/>
                    <div className='hidden group-hover:flex absolute w-full h-full top-0 left-0 bottom-0 justify-center items-end pb-10'>
                        <button className='bg-secondary text-white px-[30px] py-[10px] rounded-[100px] text-[16px] font-semibold shadow-xl'>View Details</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Showcase