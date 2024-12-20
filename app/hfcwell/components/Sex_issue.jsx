import dynamic from 'next/dynamic'
import Image from 'next/image';
import React from 'react'
import { TfiHandPointDown } from "react-icons/tfi";


const YoutubeVideo = dynamic(() => import('./YoutubeVideo'))


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const SubTitle = dynamic(() => import('./SubTitle'), {
    loading: () => <p>loader</p>
});

const Sex_issue = () => {





    return (
        <section>
            <SubTitle title='"समस्याएं" जिनकी वजह से लगता है "नामर्दी" का टैग' />


            <div className="relative">
                <div className="relative z-10 py-5 sm:py-10 px-3 ">


                    <div className="grid grid-cols-12 text-[1.1rem] sm:text-[1.15rem] text-center gap-5 sm:gap-0">
                        <div className="col-span-6 sm:col-span-3 order-2 sm:order-1">
                            <div className="grid justify-between h-full gap-5 sm:gap-0">
                                <div className="">
                                    <img src="/main/hfcwell_images/img6.webp" alt="pic" width='100%' height='100%' className='w-full' loading='lazy' />
                                    <p className="mt-2">शीघ्रपतन- 2 मिनट या 2 झटके में वीर्यपात </p>
                                </div>
                                <div className="">
                                    <img src="/main/hfcwell_images/img6.webp" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2">छोटा लिंग- G-Spot को उत्तेजित करने में नाकाम</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-6  order-1 sm:order-2">
                            <img src="/main/hfcwell_images/sad.webp" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />

                        </div>
                        <div className="col-span-6 sm:col-span-3  order-3">
                            <div className="grid justify-between h-full gap-5 sm:gap-0">
                                <div className="">
                                    <img src="/main/hfcwell_images/img6.webp" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2">ढीला लिंग- मजबूत सेक्स प्रदर्शन करने में असमर्थ</p>
                                </div>
                                <div className="">
                                    <img src="/main/hfcwell_images/img6.webp" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2">लो एनर्जी- कुछ झटको में ही सांस फूलना, थक जाना</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="pBorderSection p-3 pb-0 mt-5 leading-snug sm:leading-normal">
                        <div className="pBorderSideSection lDiv"></div>
                        <div className="pBorderSideSection rDiv"></div>
                            <p className="">बात सेक्स को एन्जॉय करने की हो तो, स्त्रीभोग का सुख वही पुरुष लूट सकता है, जो निरोग है, बलवान है, वीर्यवान और जिनके लिंग में दम है। जो रोगी है, बलहीन है, वीर्यक्षीण है, कमजोर लिंग वाला है,वह स्त्री-भोग का आनन्द नहीं उठा सकता। क्यों कि जो खुद को स्वस्थ रखेगा मैं सक्षम नहीं वो दूसरे को क्या सुख देगा !</p>
                            <p className="mt-5">परन्तु, अब हर पुरुष बड़े और मोटे लिंग के साथ घंटो तक नॉनस्टॉप सेक्स करके उठा पाएगा सेक्स का असली मजा गारंटीड! क्योंकि आ गया है यौन कमजोरी का सबसे असरदार इलाज "हॉर्सफायर टेबलेट" यह भारत का सबसे ज्यादा बिकने वाला लिंगवर्धक और यौनवर्धक उत्पाद है। "हॉर्सफायर टेबलेट" का सेक्स कमजोरी पर रिजल्ट एक्यूरेसी 100% है। अपने सकारात्मक प्रभाव और दुष्प्रभावमुक्त होने की वजह से हॉर्सफायर टेबलेट भारतीय पुरुषों में अत्यंत लोकप्रिय बन गया है। </p>
                    </div>

                </div>
                <Image fill src="/main/hfcwell_images/back-min.jpg" alt="pic" loading='lazy' />

            </div>


        </section>
    )
}

export default Sex_issue