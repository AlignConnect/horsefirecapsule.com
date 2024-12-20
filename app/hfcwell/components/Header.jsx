import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});



const Header = () => {
    return (
        <section>
            <div className="py-3 bg-red-500"></div>

            <div className="relative">
                <img src="/main/hfcwell_images/topbg-min.jpg" alt="pic" className='w-full' width='100%' height='100%' fetchPriority='high' />
                <div className="absolute mt-5 sm:mt-6 w-full h-full text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-bold mx-3 sm:mx-10 text-[7.5vw] sm:text-[3.2rem] leading-tight sm:leading-snug">
                        इस तरह पाएं मोटा लिंग एवं अद्भुत सेक्स क्षमता, <span className="text-red-700">तड़प उठेगी आपकी पार्टनर</span> !
                    </h1>
                </div>
            </div>

            <div className="border-2 border-white border-dashed m-3 sm:m-5">
                <p className="p-3 sm:p-5 leading-tight sm:leading-relaxed text-justify italic">क्या आप भी सेक्स के दौरान मेंटली प्रेशर महसूस करते है? दरअसल, होता ये है कि जो पुरुष सेक्स में हर बार फेल होता है उसे अपने सेक्स प्रदर्शन को लेकर चिंताएं होती है। पुरुषों को डर होता है की पहली मीटिंग में ही गर्लफ्रेंड या सुहागरात पर बीवी के सामने बेइज्जती न हो जाए। क्योंकि सभी को पता है फर्स्ट इम्प्रेशन इज द लास्ट इम्प्रेशन ! चूँकि, एक महिला को सेक्स से संतुष्ट करने के लिए सिर्फ शरीर में ही नहीं बल्कि लिंग में दम होना आवश्यक होता है, परन्तु इन समस्याओं की वजह से ज्यादात्तर पुरुष इसमें नाकाम है-</p>
            </div>
            <div className="bg-zinc-300">
                <FlipAmazon />
            </div>


        </section>
    )
}

export default Header