import React from 'react'
import { FaRegCircle } from 'react-icons/fa6'

function Trusted_brand() {


    let trusted_brand_benifit = [
        'Amazon तथा Flipkart जैसी विश्वसनीय प्लेटफार्म पर उपलब्ध',
        'T&C के साथ 10 दिनों की मनी बैक गारंटी सुविधा उपलब्ध',
        '1 कॉल में प्रोडक्ट बुकिंग, फ़ास्ट डिलीवरी व COD उपलब्ध',
        'ऑफिसियल वेबसाइट के साथ भारत का श्रेष्ठ यौन वर्धक विक्रेता'
    ]

    return (
        <section>
            <div>
                <div className="bg-[url('/main/hfc21_images/sec_3_background.webp')] bg-cover" >
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-12 items-center py-4 md:py-8">
                            <div className="col-span-6">
                                <img
                                    className='w-2/3 md:w-72 pt-3 mx-auto'
                                    src={"/main/hfc21_images/pro1_trust.webp"}
                                    alt='pro1_trust'
                                    fetchPriority='high'
                                />
                            </div>
                            <div className="col-span-6 px-3">
                                <div className="fontPoppins text-xl md:text-3xl text-white py-4 ">
                                    <FaRegCircle className='text-red-600 inline-block ' /> Why Should Trust
                                </div>
                                <div className="fontNoto text-4xl md:text-6xl text-yellow-400 font-extrabold py-3">
                                    भरोसे की वजह
                                </div>

                                <div className="">
                                    <ul className='list-disc ms-5 sm:ms-0 marker:text-red-500'>
                                        {
                                            trusted_brand_benifit.map((e, key) => {
                                                return <li key={key} className='fontNoto text-white md:text-2xl text-xl py-3 text-justify'>{e}</li>
                                            })
                                        }
                                    </ul>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-red-800">
                <div className="w-full max-w-6xl mx-auto py-5">
                    <div className="fontNoto text-4xl md:text-6xl text-center text-white font-extrabold py-1 md:py-5">
                        स्पेशल सुविधा
                    </div>

                    <p className='fontNoto text-[1.2rem] md:text-2xl py-3 text-center text-white px-2'>कोई भी दवा प्रत्येक व्यक्ति की बॉडी पर अलग- अलग तरीके से रियेक्ट करता है। इसलिए हमारे एक्सपर्ट्स प्रत्येक पुरुष के बॉडी, हाइट, उम्र तथा वर्तमान स्वास्थ्य का आंकलन कर उनके लिए स्पेशल पैक तैयार करते है। जिससे पुरुष को 100% लाभ मिलता है। शीघ्रपतन की समस्या मिटती है, लिंग साइज बढ़ता है, यौन प्रदर्शन में सुधार होता है।</p>
                </div>
            </div>
        </section>
    )
}

export default Trusted_brand;