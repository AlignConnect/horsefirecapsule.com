import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Header = () => {
    return (
        <section>

            <div className="">
                <div className="w-full max-w-3xl mx-auto">

                    <img src="/main/hfc1best_images/header.jpg" alt="" className='w-full' fetchPriority='high' />

                    <div className="bg-[url('/main/hfc1best_images/bg-second.jpg')] bg-cover">

                        <div className="bg-title-hfc1best text-center fontNoto text-black font-extrabold md:text-5xl text-[1.8rem] sm:pt-5 pt-2 px-1 w-[89%] mx-auto">
                            दमदार लिंग, शानदार सेक्स
                        </div>

                        <img src="/main/hfc1best_images/fst_p.webp" alt="" className='w-full sm:pt-20 pt-14 pl-5' fetchPriority='high' loading="lazy" />

                        <div className="text-center fontNoto text-red-600 font-extrabold md:text-6xl text-[1.8rem] px-1 py-2 mx-auto leading-tight">
                            बदले आपके <span className='text-white'>"सेक्स का अंदाज"</span>
                        </div>

                        <FlipAmazon />


                        <div className="">

                            <div className="">
                                <img src="/main/hfc1best_images/hand_product.webp" alt="" className='w-full' fetchPriority='high' loading="lazy" />
                            </div>

                            <div className="-mt-8 sm:-mt-14">
                                <img src="/main/hfc1best_images/second_img.webp" alt="" className='w-full' fetchPriority='high' loading="lazy" />
                            </div>

                        </div>


                    </div>

                </div>
            </div>


        </section>
    )
}

export default Header