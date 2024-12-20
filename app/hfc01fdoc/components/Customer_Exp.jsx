import React from 'react'

import FlipKart from './FlipAmazon';

function Customer_Exp() {

    const before = [{
        before_title: 'कम टेस्टोस्टेरोन हॉर्मोन और मानसिक तनाव',
        before_image: '/main/hft01doc_images/1before.webp'
    },

    {
        before_title: 'कमजोर नसें तथा ढीला लिंग ',
        before_image: '/main/hft01doc_images/2before.webp'
    },

    {
        before_title: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        before_image: '/main/hft01doc_images/3before.webp'
    },

    {
        before_title: 'पतला वीर्य तथा धात संबधित यौन समस्याएं ',
        before_image: '/main/hft01doc_images/4before.webp'
    }]

    const after = [{
        after_title: 'टेस्टोस्टेरोन का उच्चतम स्तर ',
        after_image: '/main/hft01doc_images/1after.webp'
    },
    {
        after_title: 'मजबूत नसों के साथ फौलादी लिंग',
        after_image: '/main/hft01doc_images/2after.webp'
    },
    {
        after_title: 'कम से कम 30-45 मिनट लगातार सेक्स',
        after_image: '/main/hft01doc_images/3after.webp'
    },
    {
        after_title: 'गाढा वीर्य, सभी यौन समस्याओं से राहत ',
        after_image: '/main/hft01doc_images/4after.webp'
    }
    ]

    return (
        <section>
            <div className="bg-[url('/main/hft01doc_images/second_background.webp')] bg-cover">
                <div className="w-full max-w-7xl text-center mx-auto">

                    <div className="fontPoppins text-[#1e4389] sm:text-4xl text-2xl font-extrabold sm:py-10 py-3">
                        Horse Fire Capsule <span className="fontNoto">के अद्भुत लाभ जो ग्राहक अनुभव करते है!</span>
                    </div>

                    <div className="w-full max-w-5xl text-center mx-auto">

                        <div className="grid grid-cols-2 gap-4 sm:gap-0  items-center sm:mx-0 mx-3 ">
                            <div className="fontNoto shaddow_herbs font-extrabold sm:text-4xl pt-3 text-2xl text-red-600 bg-white rounded-xl w-3/4 sm:w-1/2 mx-auto mb-1">
                                पहले
                            </div>
                            <div className="fontNoto shaddow_herbs font-extrabold sm:text-4xl pt-3 text-2xl text-green-600 bg-white rounded-xl w-3/4 sm:w-1/2 mx-auto mb-1">
                                बाद में
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-0  items-center sm:mx-0 mx-3 mt-3">

                            <div className="">
                                {before.map((e, key) => {
                                    return <div className="sm:my-5" key={key}>
                                        <img src={e.before_image} alt="pic" className="sm:w-3/4 w-80 mx-auto rounded-md b_f_shaddow" loading="lazy" />
                                        <div className="fontNoto font-extrabold sm:text-2xl text-md py-3">{e.before_title}</div>
                                    </div>
                                })}
                            </div>


                            <div className="">
                                {after.map((e, key) => {
                                    return <div className="sm:my-5" key={key}>
                                        <img src={e.after_image} alt="pic" className="sm:w-3/4 w-80 mx-auto rounded-md b_f_shaddow" loading="lazy" />
                                        <div className="fontNoto font-extrabold sm:text-2xl text-md py-3">{e.after_title}</div>
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>




                </div>
            </div>
            <FlipKart />

            <div className="bg-[url('/main/hft01doc_images/tab_background.webp')] bg-cover">
                <div className="w-full max-w-7xl text-center mx-auto py-3">
                    <img
                        src="/main/hft01doc_images/product_box.webp"
                        alt="product_box"
                        className="mx-auto w-64 sm:w-80 sm:pt-5 pt-3"
                        fetchPriority='high'
                        loading='eager' />

                    <div className="">
                        <p className="text-white text-center  fontNoto text-[1.3rem] md:text-2xl py-3 sm:px-4 px-2">
                            <span className="fontPoppins">Horse Fire Capsule</span>  का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 कैप्सूल सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                        </p>
                    </div>

                    <div className="pb-5 cursor-pointer">
                        <div className='sm:w-1/4 w-52 mx-auto fontPoppins bg-white rounded-xl font-semibold sm:text-2xl text-black py-2 '>
                            <a href="#form">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer_Exp