import dynamic from 'next/dynamic';
import React from 'react'



const FlipAmazon = dynamic(() => import('../components/FlipAmazon'), {
    loading: () => <p>Loading</p>
});

const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))


const No_one = () => {


    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='md:p-6 p-2 benifits_shaddow rounded-md hover:bg-slate-100' key={key}>
                <img src={e.benefit_img} className='md:w-20 w-14 mx-auto img_shaddow bg-slate-100 rounded-full p-2 mt-2 md:mt-0' alt='benifits_images' />
                <div className='fontNoto md:text-2xl text-xl text-blue-500 font-extrabold pt-5 pb-1 text-center'>{e.benefit_title}</div>
                <div className='fontNoto md:text-xl text-[0.9rem] font-semibold text-gray-500 text-center'>{e.benefit_content}</div>
            </div >
        })
    }


    return (
        <section>

            <div className="bg-white">

                <div className="w-full max-w-6xl mx-auto">


                    <div className='max-w-2xl mx-auto'>
                        <YoutubeVideo />
                    </div>

                    <div className="text-black fontNoto font-extrabold text-3xl md:text-5xl sm:py-10 py-5 px-2">
                        हॉर्सफायर कैप्सूल: भारत का <span className='text-blue-500 fontPoppins'>No.1 </span>सेक्सवर्धक
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols-2 items-center justify-center md:gap-7 gap-2 mx-2 pb-5'>
                        {
                            Benefits([
                                {
                                    benefit_img: "/main/hfcstory1_images/f4.webp",
                                    benefit_title: "लिंग साइज बढ़ाए",
                                    benefit_content: "छोटे लिंग को 8-9 इंच लम्बा-मोटा फौलादी बनाए"
                                },
                                {
                                    benefit_img: "/main/hfcstory1_images/f1.webp",
                                    benefit_title: "लिंग को कड़क बनाये",
                                    benefit_content: "स्खलन पश्चात ढीले लिंग को रॉड सा कड़क बनाए"
                                },
                                {
                                    benefit_img: "/main/hfcstory1_images/f2.webp",
                                    benefit_title: "+1-2 घंटे टाइमिंग",
                                    benefit_content: "टाइमिंग के निम्नतम स्तर को उच्चतम स्तर पर ले जाये"
                                },
                                {
                                    benefit_img: "/main/hfcstory1_images/f3.webp",
                                    benefit_title: "एनर्जी, पावर बढ़ाए",
                                    benefit_content: "कमजोरी मिटाये शरीर एक्टिव व जोशीला बनाए"
                                },

                            ])
                        }
                    </div>



                </div>



                <FlipAmazon />
                <div className="header_background mt-3">

                    <div className="w-full max-w-6xl mx-auto">

                        <p className="text-black text-justify fontNoto text-[1.1rem] md:text-xl sm:pt-5 pt-5 pb-3 px-2">
                            प्रोडक्ट 4 दिनों के अंदर पूरी सुरक्षित डिलीवर हो गयी। मैं सोच रही थी जैसा दुसरो को फायदा मिला है उससे थोड़ा कम फायदा भी मेरे पति को मिल जाए तो सेक्स में थोड़ा मजा बढ़ जाए। मैंने उनको इस्तेमाल के लिए दिया और परिणाम देखने के लिए बेचैन हो रही थी पर बेहतर अनुभव के लिए 1 सप्ताह का इंतजार करना था। आखिर वो दिन आ ही गया मेरे पति का लंड बिल्कुल बदल गया था साइज में थोड़ी बृद्धि पर सख्ती में भरपूर सुधार हुआ था। उनका लौड़ा भी मुझे पाने के लिए बेताब हुए जा रहा था जिसका उभार पैंट के ऊपर से ही साफ दिखाई दे रहा था।
                        </p>

                    </div>

                </div>



                <div className="bg-white">

                    <div className="w-full max-w-6xl mx-auto">


                        <div className="text-black fontNoto font-extrabold text-3xl md:text-5xl sm:pt-10 pt-6 px-2">
                            पहली बार मिली सेक्स में संतुष्टि
                        </div>


                        <p className="text-black text-justify fontNoto text-[1.1rem] md:text-xl sm:py-4 py-2 px-2">
                            डिनर के बाद बेड पर जाते ही दोनों एक-दूसरे पर टूट पड़े। मात्र एक सप्ताह में ही पहली बार हमारा सेक्स नॉनस्टॉप 15 मिनट से ज्यादा चला था। मैं अंदर ही अंदर ख़ुशी महसूस कर रही थी, क्योंकि ये तो बस शुरुआत थी। इसके बाद दिन प्रति दिन उनके प्रदर्शन में बृद्धि होने लगी।
                        </p>



                        <img src="/main/hfcstory1_images/lasy.jpg" alt="" className='md:w-4/6 w-full px-1 mx-auto rounded-md ' />

                        <FlipAmazon />


                    </div>

                </div>



                <div className="bg-gray-200 ">

                    <div className="w-full max-w-6xl mx-auto mt-5">


                        <div className="grid md:grid-cols-2 items-center justify-center md:gap-8 gap-4 px-2 pt-5 md:pt-7">


                            <div className="">
                                <img src="/main/hfcstory1_images/model.webp" alt="" className='md:w-5/6 w-5/6 mx-auto' />
                            </div>

                            <div className="">

                                <div className="text-black fontNoto font-extrabold text-[1.7rem] md:text-4xl sm:pt-10 pt-6 px-2">
                                    <span className='text-red-600'>Horsefire </span>से होने वाले लाभ
                                </div>


                                <ul className='text-black text-justify fontNoto text-[1.2rem] md:text-xl sm:py-3 py-2 px-5 font-semibold list-disc'>
                                    <li>15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि</li>
                                    <li>लिंग के लम्बाई और मोटाई में वृद्धि</li>
                                    <li>जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि</li>
                                    <li>कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल</li>
                                </ul>

                                <p className="text-black text-justify fontNoto text-[1.1rem] md:text-xl sm:py-3 py-2 px-2">
                                    मेरे पति भी इस अविश्वसनीय प्रभाव से हैरान थे। मात्र 15 दिनों में उनका लिंग लम्बा और मोटा भी दिखने लगा था, सेक्स अवधि में भी जोरदार वृद्धि हो गयी। अगले सेक्स में उन्होंने मुझे 4 बार झाड़ दिए, फिर भी उनका लिंग और चोदने के लिए तैयार था। अब उनका लिंग मजबूत हो गया है। हर शॉट में मेरी चीख निकल जाती है पर मुझे वो मजा मिलता है जो मैं हमेशा से चाहती थी।
                                </p>



                            </div>
                        </div>


                        <p className="text-black text-center fontNoto font-extrabold text-[1rem] md:text-3xl sm:py-10 py-5 px-2">
                            "देखें, ये पूरी समस्या शर्म की वजह से और बढ़ जाती है! अगर कोई भी पुरुष जल्दी डिस्चार्ज हो जाता है, लिंग में दम नहीं है तो उसे बिना हिचक के <span className='text-red-600'> Horsefire Capsule </span> अवश्य आजमानी चाहिए !"
                        </p>


                    </div>
                </div>


            </div>



        </section>
    )
}

export default No_one