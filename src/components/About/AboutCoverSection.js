import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/car.webp"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="Parth" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left'>
            Pioneering Eco-Friendly Transport for a Greener Planet!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            At UrbanShifters, we are dedicated to transforming urban mobility for a sustainable future. Our vision is to create cities where transportation is not only convenient but also environmentally responsible. We have curated a platform that offers a seamless and eco-conscious alternative to conventional ride-hailing services.
</p>
        </div>
    </section>
  )
}

export default AboutCoverSection