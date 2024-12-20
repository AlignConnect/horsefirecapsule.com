import dynamic from 'next/dynamic';
import React from 'react'
import { FaRegCircle } from "react-icons/fa";

const Ama = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'), {
    loading: () => <p>loader</p>
});

function Requirement() {
    return (
        <div>
            <div className="bg-[url('/main/hfc21_images/sec_3_background.webp')] bg-cover" >
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-12 items-center py-4 md:py-8">
                        <div className="col-span-6 px-3">
                            <div className="fontPoppins text-xl md:text-3xl text-white py-4 ">
                                <FaRegCircle className='text-red-600 inline-block ' /> Know About us
                            </div>
                            <div className="fontNoto text-4xl md:text-6xl font-extrabold py-2 text-yellow-400">
                                आपकी जरूरत!
                            </div>
                            <p className='fontNoto text-[1.2rem] py-3 text-justify text-white'>
                                शीघ्रपतन मिटाकर देर तक सेक्स करने और एक जंबो लिंग चाहत रखने वाले भारतीय पुरुषों की चाहत को <span className="fontPoppins">Horsefire Capsule</span> पूरा करता है। 17 पावरफुल एवं शोधित भारतीय और अफ्रीकन जड़ीबूटियों और भस्मों के मिश्रण से तैयार <span className="fontPoppins">Horsefire Capsule</span> से लाखों भारतीय पुरुष अफ्रीकन की तरह एक्स्ट्रा साइज लिंग और दमदार सेक्स पावर पा चुके है और यह अभियान अभी जारी है।
                            </p>
                        </div>
                        <div className="col-span-6">
                            <img
                                className='w-80 md:w-96 pt-3 mx-auto'
                                src={"/main/hfc21_images/sec_3_product.webp"}
                                alt='sec_3_product'
                                fetchPriority='high'
                            />
                        </div>
                    </div>
                </div>

                <div className='py-3'>
                    <Ama />
                </div>

            </div>
        </div>
    )
}

export default Requirement