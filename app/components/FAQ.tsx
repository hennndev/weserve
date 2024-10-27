"use client"
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa"
import clsx from 'clsx'
import { VscMailRead } from "react-icons/vsc";




const FAQ = () => {

    const [isAccordion, setIsAccordion] = useState<null | string>(null)

    const handleIsAccordion = (accordionId: string) => {
        if(isAccordion === accordionId) {
            setIsAccordion(null)
        } else {
            setIsAccordion(accordionId)
        }
    }

    return (
        <section className='container space-y-[30px]'>
            <h2 className='text-[46px] font-semibold leading-[100%] tracking-tight text-center text-primary'>
                Frequently Asked Question
            </h2>
            <section className='flex justify-evenly space-x-[30px]'>
                <section className='w-[550px] h-auto space-y-[20px]'>

                    <section className='bg-white rounded-[16px] p-[20px] cursor-pointer'>
                        <section className={clsx('flex justify-between', isAccordion === "accordion1" ? "items-start" : "items-center")} onClick={() => handleIsAccordion("accordion1")}>
                            <section className='flex-1 flex items-start flex-col space-y-[20px]'>
                                <p className='text-[20px] font-bold'>Do we need to pay 6 months per item?</p>
                                <section className={clsx('items-start flex-col space-y-[20px]', isAccordion === "accordion1" ? "flex" : "hidden")}>
                                    <p className='text-[16px] leading-[32px] font-medium text-[#5D5D7C]'>Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                                    <button className='bg-transparent text-secondary text-[16px] font-semibold'>Learn More</button>
                                </section>
                            </section>
                            <div className={clsx('rounded-[100px] p-[10px]', isAccordion === 'accordion1' ? 'bg-primary' : 'bg-transparent')}>
                                {isAccordion === 'accordion1' ? (
                                    <FaChevronUp className='w-[18px] h-[18px] text-white'/>
                                ) : (
                                    <FaChevronDown className='w-[18px] h-[18px] text-primary'/>
                                )}
                            </div>
                        </section>
                    </section>

                    <section className='bg-white rounded-[16px] p-[20px] cursor-pointer'>
                        <section className={clsx('flex justify-between', isAccordion === "accordion2" ? "items-start" : "items-center")} onClick={() => handleIsAccordion("accordion2")}>
                            <section className='flex-1 flex items-start flex-col space-y-[20px]'>
                                <p className='text-[20px] font-bold'>Why do we need to use Kapp?</p>
                                <section className={clsx('items-start flex-col space-y-[20px]', isAccordion === "accordion2" ? "flex" : "hidden")}>
                                    <p className='text-[16px] leading-[32px] font-medium text-[#5D5D7C]'>Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                                    <button className='bg-transparent text-secondary text-[16px] font-semibold'>Learn More</button>
                                </section>
                            </section>
                            <div className={clsx('rounded-[100px] p-[10px]', isAccordion === 'accordion2' ? 'bg-primary' : 'bg-transparent')}>
                                {isAccordion === 'accordion2' ? (
                                    <FaChevronUp className='w-[18px] h-[18px] text-white'/>
                                ) : (
                                    <FaChevronDown className='w-[18px] h-[18px] text-primary'/>
                                )}
                            </div>
                        </section>
                    </section>

                    <section className='bg-white rounded-[16px] p-[20px] cursor-pointer'>
                        <section className={clsx('flex justify-between', isAccordion === "accordion3" ? "items-start" : "items-center")} onClick={() => handleIsAccordion("accordion3")}>
                            <section className='flex-1 flex items-start flex-col space-y-[20px]'>
                                <p className='text-[20px] font-bold'>How to migrate from other service?</p>
                                <section className={clsx('items-start flex-col space-y-[20px]', isAccordion === "accordion3" ? "flex" : "hidden")}>
                                    <p className='text-[16px] leading-[32px] font-medium text-[#5D5D7C]'>Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                                    <button className='bg-transparent text-secondary text-[16px] font-semibold'>Learn More</button>
                                </section>
                            </section>
                            <div className={clsx('rounded-[100px] p-[10px]', isAccordion === 'accordion3' ? 'bg-primary' : 'bg-transparent')}>
                                {isAccordion === 'accordion3' ? (
                                    <FaChevronUp className='w-[18px] h-[18px] text-white'/>
                                ) : (
                                    <FaChevronDown className='w-[18px] h-[18px] text-primary'/>
                                )}
                            </div>
                        </section>
                    </section>
                </section>

                
                <section className='w-[550px] h-auto space-y-[20px]'>
                    <section className='bg-white rounded-[16px] p-[20px] cursor-pointer'>
                        <section className={clsx('flex justify-between', isAccordion === "accordion4" ? "items-start" : "items-center")} onClick={() => handleIsAccordion("accordion4")}>
                            <section className='flex-1 flex items-start flex-col space-y-[20px]'>
                                <p className='text-[20px] font-bold'>What if data doesn't get stored?</p>
                                <section className={clsx('items-start flex-col space-y-[20px]', isAccordion === "accordion4" ? "flex" : "hidden")}>
                                    <p className='text-[16px] leading-[32px] font-medium text-[#5D5D7C]'>Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                                    <button className='bg-transparent text-secondary text-[16px] font-semibold'>Learn More</button>
                                </section>
                            </section>
                            <div className={clsx('rounded-[100px] p-[10px]', isAccordion === 'accordion4' ? 'bg-primary' : 'bg-transparent')}>
                                {isAccordion === 'accordion4' ? (
                                    <FaChevronUp className='w-[18px] h-[18px] text-white'/>
                                ) : (
                                    <FaChevronDown className='w-[18px] h-[18px] text-primary'/>
                                )}
                            </div>
                        </section>
                    </section>
                    <section className='bg-white rounded-[16px] p-[20px] cursor-pointer'>
                        <section className={clsx('flex justify-between', isAccordion === "accordion5" ? "items-start" : "items-center")} onClick={() => handleIsAccordion("accordion5")}>
                            <section className='flex-1 flex items-start flex-col space-y-[20px]'>
                                <p className='text-[20px] font-bold'>Can we guarantee no any loss at all</p>
                                <section className={clsx('items-start flex-col space-y-[20px]', isAccordion === "accordion5" ? "flex" : "hidden")}>
                                    <p className='text-[16px] leading-[32px] font-medium text-[#5D5D7C]'>Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                                    <button className='bg-transparent text-secondary text-[16px] font-semibold'>Learn More</button>
                                </section>
                            </section>
                            <div className={clsx('rounded-[100px] p-[10px]', isAccordion === 'accordion5' ? 'bg-primary' : 'bg-transparent')}>
                                {isAccordion === 'accordion5' ? (
                                    <FaChevronUp className='w-[18px] h-[18px] text-white'/>
                                ) : (
                                    <FaChevronDown className='w-[18px] h-[18px] text-primary'/>
                                )}
                            </div>
                        </section>
                    </section>


                    <section className='bg-primary rounded-[16px] p-[20px] cursor-pointer'>
                        <section className='flex-between'>
                            <div className="flexx space-x-[6px]">
                                <VscMailRead className='text-white w-[24px] h-[24px]'/>
                                <p className='text-[16px] font-semibold text-white'>Send e-mail to us for other questions</p>
                            </div>
                            <div className='rounded-[100px] p-[10px] bg-white'>
                                <FaChevronRight className='w-[18px] h-[18px] text-primary'/>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default FAQ