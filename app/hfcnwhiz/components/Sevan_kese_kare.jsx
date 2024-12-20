import React from 'react'

function Sevan_kese_kare() {

    const paraList = ["#1 यौन श्रेणी में विक्रेता", "10 दिनों की मनी बैक गारंटी", "COD यानि डिलीवरी पर भुगतान", "प्रीपेड आर्डर पर 10% अतिरिक्त बचत", "Flipkart, Amazon पर उपलब्ध"]


    return (
        <div className='w-full bg-white  py-5 sm:py-10  '>

            <h1 className="uppercase text-3xl leading-tight font-black mb-5 text-center sm:hidden px-3 ">Why Men Trust Horse Fire</h1>

            <div className='grid grid-cols-12 gap-2 sm:gap-5 items-center sm:items-end ps-2 pe-3 sm:px-5'>
                <img src='/main/hfcgwhiz_images/img4.webp' alt="pic" width='100%' height='100%' loading='lazy' className='col-span-4' />
                <div className="col-span-8 ">
                    <h1 className="uppercase text-[2rem] leading-tight font-black mb-8 hidden sm:block">Why Men Trust Horse Fire</h1>
                    <div className="space-y-5 sm:text-2xl text-white   ">
                        {paraList.map((e, key) => {
                            return <p className="bg-red-600 rounded-tr-xl px-2 sm:px-5 sm:pt-3 pt-2" key={key}>{e}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sevan_kese_kare