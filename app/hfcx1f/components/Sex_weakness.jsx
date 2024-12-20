import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


const Sex_weakness = () => {


    const benifits_hfc = [{
        title: '+1-2 घंटे टाइमिंग बढ़ाए',
        gif: '/main/hfcx1f_images/04.gif'
    },

    {
        title: 'लिंग साइज बढ़ाए',
        gif: '/main/hfcx1f_images/03.gif'
    },

    {
        title: 'लिंग को कड़क बनाये',
        gif: '/main/hfcx1f_images/01.gif'
    },

    {
        title: 'एनर्जी और पावर बढ़ाए',
        gif: '/main/hfcx1f_images/02.gif'
    }]



    return (
        <section className='bg-black'>

            <div className="w-full max-w-4xl mx-auto ">


                <img src="/main/hfcx1f_images/title.png" alt="" className='w-full md:w-3/4 mx-auto px-2 py-2' />


                <div className="grid grid-cols-12 items-center gap-2 py-2">

                    <div className=" md:col-span-6 col-span-8">
                        <p className='fontNoto text-md md:text-xl text-white px-2 py-3 '>
                            <span className='text-yellow-400 font-semibold'>लो टेस्टोस्टेरोन:</span> टेस्टोस्टेरोन पुरुष का सेक्सुअल हॉर्मोन होता है। इसकी कमी से लिंग में उचित रक्तस्राव नहीं होता है और लिंग ढीला और कमजोर हो जाता है। स्टैमिना और एनर्जी की कमी होती है और वीर्य का पतन समय से पूर्व ही हो जाता है।
                        </p>
                    </div>
                    <div className="md:col-span-6 col-span-4">
                        <img src="/main/hfcx1f_images/tst.png" alt="" className='w-full md:w-3/5 mx-auto pr-2' />

                    </div>

                </div>



                <div className="grid grid-cols-12 items-center gap-2 py-3">

                    <div className="md:col-span-6 col-span-5">
                        <img src="/main/hfcx1f_images/pns.png" alt="" className='w-full md:w-5/6 mx-auto pl-2' />

                    </div>
                    <div className="md:col-span-6 col-span-7">
                        <p className='fontNoto text-md md:text-xl text-white px-2 py-3 '>
                            <span className='text-yellow-400 font-semibold'>ढीले पेनाइल टिश्यूज: </span>यह शरीर आंतरिक भाग है जो सेक्स क्रिया में इन्वॉल्व होता है। ढीले पेनाइल टिस्यूज की वजह से वीर्य स्खलन पर कण्ट्रोल नहीं रहता और थोड़े से उत्तेजना में वीर्य डिस्चार्ज हो जाता है।
                        </p>
                    </div>

                </div>


                <img src="/main/hfcx1f_images/hfc.png" alt="" className='w-full py-2' />

                <FlipAmazon />


                <div className="grid grid-cols-2 items-center justify-center gap-2 mx-2 py-8">
                    {benifits_hfc.map((e, key) => {
                        return <div className="" key={key}>
                            <img src={e.gif} alt="pic" className="sm:w-3/4 w-80 mx-auto rounded-md" loading="lazy" />
                            <div className="fontNoto bg-yellow-300 rounded-md md:w-3/4 mx-auto text-center font-extrabold sm:text-2xl text-md md:pt-3 pt-2 my-2">
                                {e.title}
                            </div>
                        </div>
                    })}
                </div>


                <img src="/main/hfcx1f_images/product.webp" alt="" className='md:w-1/2 w-3/4 mx-auto py-2' />
                <FlipAmazon />




                <p className='fontNoto text-justify text-md md:text-xl text-white px-2 py-3 '>
                    <span className='text-yellow-400 font-semibold'>Horsefire Capsule</span> विश्व की श्रेष्ठ 17 जड़ी बूटियों का अनोखा मिश्रण है जो टेस्टोस्टेरोन एवं नाइट्रिक ऑक्साइड बढ़ाकर लिंग की नसों और लिंग के मुख्य भाग कॉर्पस कैवर्नोसम में रक्तसंचार बढ़ाने के लिए आयुष मंत्रालय के यौन वैज्ञानिको द्वारा सिद्ध है। कॉर्पस कैवर्नोसा और कॉर्पस स्पोंजियोसम प्रजनन को संभव बनाते हैं। इन स्पंजी ऊतकों में भरा रक्त आपके लिंग को संभोग के दौरान योनि में प्रवेश करने के लिए पर्याप्त कठोर बना देता है।
                </p>


                <p className='fontNoto text-justify text-md md:text-xl text-white px-2 py-3 '>
                    इसमें मौजूद घटक लिंग की लम्बाई और मोटाई के विकास में सहयोग करते है। पेनाइल टिश्यूज को मजबूत बनाकर वीर्य स्खलन पर कंट्रोल और आत्मविश्वास बढ़ाने में मदद करते है। इस प्रकार <span className='text-yellow-400 font-semibold'>Horsefire Capsule</span> के इस्तेमाल से पुरुष लिंग पाकर लम्बा संभोग करते है और बिस्तर में झंडे गाड़ते है।
                </p>


                <div className="title_clippath py-3">
                    <div className="bg-[#0a69cc] text-center text-white md:text-3xl text-2xl py-2 font-semibold ">
                        WE OFFER EXTRA FOR YOU!
                    </div>
                </div>


                <img src="/main/hfcx1f_images/offer.png" alt="" className='md:w-3/4 w-full mx-auto py-5 px-1' />


                <FlipAmazon />

                <div className="py-8">
                    <div className="relative ">
                        <div className="absolute left-0 right-0 -top-5 fontNoto text-black md:text-2xl text-xl bg-white w-32 font-extrabold mx-auto text-center pt-2 rounded-md ">
                            हमारा लक्ष्य
                        </div>
                        <div className=" fontNoto bg-[#0a69cc] text-center text-white py-2 font-semibold mx-3 rounded-md ">
                            <p className='fontNoto text-justify text-md md:text-xl text-white px-2 pt-6 '>
                                "हम चाहते है सभी पुरुष फौलादी लिंग और दमदार सेक्स प्रदर्शन से बीवी/प्रेमिका को संतुष्ट रखे, ताकि वैवाहिक जीवन या लव रिलेशनशिप में रोमांच रहे। यौन असंतुष्टि की वजह से रिश्ते में कड़वाहट और दरार न आये!
                            </p>
                        </div>
                    </div>
                </div>




                <div className=" py-1">
                    <div className="fontNoto bg-white text-center text-[#0a69cc] md:text-3xl text-2xl pt-3 font-extrabold ">
                        लिंग बृद्धि ग्राफ-
                    </div>
                </div>

                <img src="/main/hfcx1f_images/graph.png" alt="" className='w-full px-2 mx-auto pt-4' />


                <p className='fontNoto text-justify text-[0.7rem] -mt-5 md:-mt-9 md:text-[1.1rem] text-white px-2 py-2 '>
                    <span className='text-yellow-400 font-semibold'>नोट:</span> पुरुष स्वास्थ्य के आधार पर परिणाम भिन्न-भिन्न यानि कम या ज्यादा हो सकता है।
                </p>

                <FlipAmazon />
                <p className='bg-white fontNoto text-center text-md md:text-xl text-black px-2 py-3 '>

                    Horsefire Capsule प्रथम दिन से ही समस्या रिकवरी पर काम करता है। यह लिंग के कॉर्पस केवरोसोम में रक्त प्रवाह बढ़ाता है और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना सुनिश्चित होता है।
                </p>


                <div className=" py-3">
                    <div className="fontNoto  text-center text-yellow-400 md:text-3xl text-2xl pt-3 font-extrabold ">
                        संतुष्ट ग्राहक
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sex_weakness