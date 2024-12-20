import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderFast = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'))

const Hard = () => {
    return (
        <section className={noto.className}>
            <section className='w-full md:w-[650px] mx-auto'>
                <section className='relative min-h-[400px] md:min-h-[600px] -z-[10]'>
                    <div className='absolute bg-black w-full '>
                        <div className='absolute border-2 border-yellow-400 rounded-full w-[90%] pt-7 pb-3 m-5 text-center mx-auto transform translate-x-[-50%] left-[50%]'>
                            <h1 className='text-3xl md:text-4xl text-white font-bold'>लिंग साइज है बेहद अहम</h1>
                        </div>
                        <img src="/main/hfcbeta_images/mandata.webp" alt="sdsd" loading='lazy' />
                    </div>
                </section>
                <div className="bg-black p-3">

                    <div className="bg-white z-[10] text-[19px] p-3 italic rounded-xl">
                        जनरल ऑफ सेक्शुअल मेडिसिन की स्टडी के मुताबिक ज्यादातर महिलाओं के लिए लिंग की साइज मायने रखती है। इस स्टडी के मुताबिक जो महिलाएं वजाइनल ऑर्गेजम की चाहत रखती हैं उन्हें लंबे लिंग से यह जल्दी मिल जाता है।
                    </div>

                    <div className="text-white text-[19px] py-3 italic">
                        इस स्टडी के को-ऑथर स्टुअर्ट ब्रॉडी जो कि <span className="text-yellow-300 text-2xl">यूनिवर्सिटी ऑफ द वेस्ट ऑफ स्कॉटलैंड</span> में मनोवैज्ञानिक हैं, उन्होंने कहा कि लिंग  <span className="text-yellow-300 text-2xl">लंबा होने की वजह से उत्तेजना</span>  को बढ़ाने में मदद मिलती है। इन्होंने बताया कि लिंग का आकार बड़ा होने <span className="text-yellow-300 text-2xl">
                            से सेक्स ज्यादा बेहतर होता है।
                        </span>
                    </div>


                    <div className="w-full">
                        <img src="/main/hfcbeta_images/fourinch.webp" alt="asdas" loading="lazy" className="w-full md:w-2/3 mx-auto" />
                    </div>

                    <div className="bg-[#e4efa1] font-semibold z-[10] text-[19px] p-3 my-4 italic rounded-xl">
                        जिन पुरुषों के पेनिस की लंबाई 4 इंच से कम होती है। उनके लिंग को छोटा माना जाता है। ऐसे पुरुषों को पेनिस को लंबा करने की आवश्यकता होती है। अगर वह नहीं करते हैं तो आगे चलकर उनकी सेक्शुअल लाइफ में दिक्कत आ सकती है।
                    </div>

                    <OrderFast />

                </div>

            </section>
        </section>

    )
}

export default Hard