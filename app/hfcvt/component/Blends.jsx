import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FlipAmazondata = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'), {
    loading: () => <p>loader</p>
})

const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))


const Blends = () => {
    return (

        <section className={noto.className}>
            <section className='bg-[url(/main/hfcalpha_images/back7.webp)] bg-no-repeat bg-cover'>

                <section className='grid grid-cols-12 w-[95%] md:w-[60%] mx-auto items-center pt-[70px] md:pt-[70px] md:pb-[20px]'>

                    <div className='col-span-12 md:col-span-6 mt-[60px] '>
                        <img src="/main/hfcalpha_images/bottlec.webp" alt="nopdata" loading='lazy' width={"80%"} className='w-[99%] min-h-[250px] mx-auto' />
                    </div>

                    <div className='col-span-12 md:col-span-6'>

                        <div className='relative md:min-h-[100px]'>
                            <div className='bg-[#fde916] inline px-[60px] pt-3 font-bold text-2xl md:text-4xl relative top-[-370px] md:top-0 z-[10]'>BLEND OF</div>
                            <div className='text-xl md:text-2xl text-white bg-[#dd2e2b]  px-[40px] pb-[10px] pt-[20px] inline-block relative transform translate-x-[50%] top-[-415px] md:top-[-35px] right-[20%] translate-y-[50%] z-[9]'>POWERFULL HERBS</div>
                        </div>

                        <p className='text-xl md:text-2xl font-semibold py-2 -mt-14 md:mt-5 text-start'>
                            <span className='text-red-600'>17 जड़ीबूटियों और भस्मो से बने "Horse Fire Capsule"</span> से भारतीय पुरुषों का 3.5-4 इन्च छोटा और ढीला लिंग 8-9 इंच लम्बा और मोटा बन जाता है। जोश और स्टैमिना में अद्भुत बृद्धि होती है, हर वक़्त सेक्स की इच्छा जागृत रहती है।
                        </p>

                        <p className='text-xl md:text-2xl font-semibold py-2 text-start'>
                            औजार की   <span className='text-red-600'>कड़कपन में ऐसा बदलाव आ जाता है</span> कि हर शॉट में महिला पार्टनर की चीख निकल जाए। टाइमिंग कई गुना बढ़ जाता है और सेक्स लगातार घंटो तक चलता ही रहता है।
                        </p>

                    </div>

                </section>

                <FlipAmazondata />


            </section>


            <section className="bg-[url('/main/hfcalpha_images/back4.webp')] pt-[40px] md:pt-[80px] pb-[20px]">

                <div className="text-center py-[20px]">

                    <h1 className="text-[#fde916] bg-[#dd2e2b] inline text-2xl md:text-4xl pt-3 px-5 pb-0 mb-0 md:px-[40px] font-bold">Horse Fire Capsule</h1>
                    <h1 className="text-4xl py-4 text-white font-bold">का कमाल</h1>

                </div>



                <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] mx-auto  gap-8">

                    <div>
                        <div>
                            <img src="/main/hfcalpha_images/f1.webp" alt="erreer" loading="eager" className="rounded-full border-white border-2 w-[150px] md:w-[230px] min-h-[100px]" />
                        </div>

                        <div className="text-2xl md:text-3xl text-center font-semibold py-3">
                            <h1 className="text-[#ffcc00]">लम्बा और</h1>
                            <h1 className="text-white">फौलादी लिंग</h1>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="/main/hfcalpha_images/f2.webp" alt="erreer" loading="eager" className="rounded-full border-white border-2 w-[150px] md:w-[230px] min-h-[100px]" />
                        </div>
                        <div className="text-2xl md:text-3xl text-center font-semibold py-3">
                            <h1 className="text-[#ffcc00]">लॉन्ग लास्टिंग</h1>
                            <h1 className="text-white">सेक्स टाइमिंग</h1>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="/main/hfcalpha_images/f3.webp" alt="erreer" loading="eager" className="rounded-full border-white border-2 w-[150px] md:w-[230px] min-h-[100px]" />
                        </div>

                        <div className="text-2xl md:text-3xl text-center font-semibold py-3">
                            <h1 className="text-[#ffcc00]">उठायें सेक्स का </h1>
                            <h1 className="text-white">असली मजा </h1>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="/main/hfcalpha_images/f4.webp" alt="erreer" loading='eager' className="rounded-full border-white border-2 w-[150px] md:w-[230px] min-h-[100px]" />
                        </div>

                        <div className="text-2xl md:text-3xl text-center font-semibold py-3">
                            <h1 className="text-[#ffcc00]">बार-बार सेक्स</h1>
                            <h1 className="text-white">की चाहत</h1>
                        </div>
                    </div>



                </div>

                <FlipAmazondata />

            </section>


            <div className="bg-white">
                <div className='max-w-xl mx-auto'>
                    <YoutubeVideo />
                </div>
            </div>



            <section className="md:py-[30px] bg-[url('/main/hfcalpha_images/back5.webp')]">

                <div className="text-center font-semibold py-5">
                    <h1 className="text-5xl text-white">ग्राहक को मिले </h1>
                    <h1 className="text-5xl text-[#fde916]">संतोषजनक परिमाण </h1>
                </div>

                <section className="w-full md:w-[60%] px-1 mx-auto grid grid-cols-2 gap-5">
                    <div className="mx-auto mt-5 flex flex-col md:flex-row items-center rounded-xl overflow-hidden col-span-2 md:col-span-1">
                        <div className="w-full md:w-[50%] h-full">
                            <img src="/main/hfcalpha_images/m1.jpg" alt="asdrt" loading="lazy" className="w-full h-full min-h-[350px]" />
                        </div>
                        <div className="bg-[#1c9ac3] w-full md:w-[50%] h-full p-3">
                            <h2 className="bg-white text-2xl font-bold rounded-full pt-3 text-center">दीपांकर 26 साल </h2>
                            <p className="text-white text-xl py-4">
                                पहले मेरी पार्टनर को मेरे लिंग का असर ही नहीं होता था लेकिन Horse Fire Capsule खाने से अब मेरी लम्बाई और मोटाई में बृद्धि हो गयी है। अब आधा लिंग घुसाते ही वो सिसकारियां भरने लगती है। अब पूरा लेने से मना करती है और मुझे पीछे की तरफ धकेलती है। अब वो हर बार पानी-पानी हो जाती है, और संतुष्ट भी है।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-5 flex flex-col md:flex-row items-center rounded-xl overflow-hidden col-span-2 md:col-span-1">
                        <div className="w-full md:w-[50%] h-full">
                            <img src="/main/hfcalpha_images/m2.jpg" alt="asdrt" loading="lazy" className="w-full h-full min-h-[350px]" />
                        </div>
                        <div className="bg-[#1c9ac3] w-full md:w-[50%] h-full p-3">
                            <h2 className="bg-white text-2xl font-bold rounded-full pt-3 text-center">सम्राट 29 साल  </h2>
                            <p className="text-white text-xl py-4">
                                सचमुच, Horse Fire Capsule बेहतरीन यौन शक्तिवर्धक और लिंगवर्धक दवा है। यह सेक्स पावर को कई गुना बढ़ा देता है साथ ही लिंग साइज में भी सुधार करता है। इसके इस्तेमाल से मेरी शीघ्रपतन की कमजोरी जड़ से मिट गयी और लाइफ में सेक्स का मजा बढ़ गया है।
                            </p>
                        </div>
                    </div>




                </section>

                <div className="pt-[10px] md:pt-[40px] pb-[10px]">
                    <FlipAmazondata />
                </div>

            </section>




        </section>

    )
}

export default Blends