import dynamic from 'next/dynamic'
import React from 'react'



const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
})


const Graph = () => {
    return (
        <section>


            <div className="w-full max-w-3xl mx-auto">

                <div className="bg-[url('/main/hfc1best_images/bg-second.jpg')] bg-cover">

                    <div className="text-center fontNoto text-red-600 font-extrabold md:text-5xl text-[2rem] sm:pt-7 pb-2 pt-4 mx-auto">
                        लिंग<span className='text-white'> बृद्धि ग्राफ-</span>
                    </div>

                    <img src="/main/hfc1best_images/graph.jpg" alt="" className='w-full' fetchPriority='high' loading="lazy" />

                </div>


                <div className="relative">

                    <img src="/main/hfc1best_images/hfc_water.jpg" alt="" className='w-full relative ' fetchPriority='high' loading="lazy" />

                    <div className="absolute sm:top-20 top-4 left-0 right-0">
                        <p className='fontNoto text-center font-semibold text-[0.9rem] md:text-3xl text-white px-2 sm:px-4 py-3 '>
                            <span className='text-yellow-400 font-semibold'>Horsefire Capsule</span>  प्रथम दिन से ही समस्या रिकवरी पर काम करता है। यह लिंग के कॉर्पस केवरोसोम में रक्त प्रवाह बढ़ाता है और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना सुनिश्चित होता है।
                        </p>
                        <p className='fontNoto text-center  font-semibold text-[0.9rem] md:text-3xl text-white px-2 sm:px-4 py-2'>
                            अगर कोई भी पुरुष जल्दी डिस्चार्ज हो जाता है, लिंग में दम नहीं है तो उसे बिना हिचक के <span className='text-yellow-400 font-semibold'>Horsefire</span> अवश्य आजमानी चाहिए!

                        </p>
                    </div>
                </div>



                <div className='bg-black'>

                    <div className="text-[#17df43] fontPoppins font-extrabold text-2xl sm:text-3xl text-center">
                        WHY TRUST US?
                    </div>

                    <div className="text-white  fontNoto font-extrabold text-xl sm:text-2xl text-center py-2 px-2">
                        भारतीय पुरुष भरोसा करते है क्योंकि हम देते है-
                    </div>

                    <img src="/main/hfc1best_images/icon.webp" alt="" className='w-full sm:w-3/4 mx-auto px-3 py-2' fetchPriority='high' loading="lazy" />

                    <img src="/main/hfc1best_images/proud.webp" alt="" className='w-full py-4' fetchPriority='high' loading="lazy" />


                    < FlipAmazon />

                    <div className="">

                        <div className="py-2">
                            <div className="text-yellow-500  fontNoto font-extrabold text-3xl sm:text-5xl text-center py-2 px-2">
                                हमारा लक्ष्य
                            </div>

                            <p className='fontNoto text-center text-[1rem] md:text-2xl text-white px-3 py-2 '>
                                "हम चाहते है सभी पुरुष फौलादी लिंग और दमदार सेक्स प्रदर्शन से बीवी/प्रेमिका को संतुष्ट रखे, ताकि वैवाहिक जीवन या लव रिलेशनशिप में रोमांच रहे। यौन असंतुष्टि की वजह से रिश्ते में कड़वाहट और दरार न आये!"
                            </p>
                        </div>

                        <img src="/main/hfc1best_images/couple.png" alt="" className='w-full' fetchPriority='high' loading="lazy" />
                    </div>


                    <div className="bg-gray-200">

                        <div className="text-red-600  fontNoto font-extrabold text-3xl sm:text-5xl text-center pt-5 px-2">
                            हॉर्सफायर उपलब्ध है
                        </div>

                        <p className='fontNoto text-center text-[1rem] md:text-2xl text-black px-2 py-2 '>
                            "Amazon, Flipkart और  आपके 1 सिंगल कॉल पर यानि कॉल पर एक्सपर्ट से अपनी समस्या बताये और सभी जानकारी के साथ प्रोडक्ट आर्डर करें।"
                        </p>

                        <img src="/main/hfc1best_images/fire.jpg" alt="" className='w-full' fetchPriority='high' loading="lazy" />

                        <div className="bg-black">
                            < FlipAmazon />
                        </div>

                    </div>


                </div>


            </div>


        </section>
    )
}

export default Graph