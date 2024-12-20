import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
function Section1() {


    const list2 = [
        {
            image: '/main/hfcgwhiz_images/gif1.webp',
            title: 'बड़े लिंग वाले पुरुषों को ज्यादा पसंद करती है।'
        },
        {
            image: '/main/hfcgwhiz_images/gif2.webp',
            title: 'महिलाएं कम से कम 30 मिनट सेक्स चाहती है।'
        },
        {
            image: '/main/hfcgwhiz_images/gif3.webp',
            title: 'बड़े- मोटे लिंग से ऑर्गेज्म जल्दी मिल जाता है।'
        },
        {
            image: '/main/hfcgwhiz_images/gif4.webp',
            title: 'शरीर में स्टैमिना हो सेक्स के दौरान थके नहीं।'
        },
    ]

    return (
        <div className='w-full '>
            <div className="relative">
                <div className="relative z-10 text-white font-bold text-[5vw] sm:text-5xl pe-3 pt-4 sm:pt-5 sm:pb-1 pb-2 w-10/12 sm:w-11/12 ms-auto  text-end">
                    यौन सक्रीय महिलाओं पर सर्वे में हुआ सबसे बड़ा खुलासा !
                </div>
                <Image fill src='/main/hfcgwhiz_images/img12.webp' loading='lazy' alt='pic'/>
            </div>

            <div className="sm:p-10 px-3 py-5  text-white text-[4.2vw] sm:text-2xl font-bold ">
                {list2.map((e, key) => {
                    return <div className={`grid grid-cols-2 items-center`} key={key}>

                        <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className='border-4 border-black' />
                        <p className={`bg-red-600 p-3 sm:p-4 pb-1 ${key % 2 !== 0 ? " order-first me-2 sm:me-7 rightSide" : "text-end ms-2 sm:ms-7 leftSide"}`}>{e.title}</p>
                    </div>

                })}

            </div>
        </div>
    )
}

export default Section1