import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='w-full relative '>
            <div className="relative z-10 pt-5 text-center text-white">
                <div className="fontPoppins uppercase text-[15.5vw] sm:text-8xl">
                    <p className="font-bold leading-none">Horse fire</p>
                    <p className="leading-none text-[10.5vw] sm:text-6xl tracking-[2.5vw] sm:tracking-[1rem]">Capsule</p>
                </div>
                <p className="inline-block bg-yellow-300 text-black text-xl my-5 sm:text-3xl px-5 pt-2 sm:pt-4 font-semibold ">यौन कमजोरी में उम्मीद से ज्यादा असरदार !</p>
                <p className="fontArya max-w-md mx-auto text-3xl">India's premium product to root out men's sexual problems</p>
                <img src="/main/hfcgwhiz_images/img17.webp" alt="pic" width='100%' height='100%' fetchPriority='high' />
            </div>
            <Image fill src="/main/hfcgwhiz_images/img22.webp" fetchPriority='high' alt='pic'/>
        </div>
    )
}

export default Header