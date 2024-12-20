import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
const Ordernow = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section2 = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto px-3">

                <div className="grid grid-cols-12 mx-auto items-center my-5 gap-5">

                    <div className="col-span-6">

                        <div>
                            <img src="/main/hf91w_images/f2.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                        </div>

                        <p className="text-center text-md md:text-xl pt-3 font-bold">
                            बड़े लिंग वाले पुरुषों को ज्यादा पसंद करती है।
                        </p>

                    </div>
                    <div className="col-span-6">

                        <div>
                            <img src="/main/hf91w_images/f3.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                        </div>
                        <p className="text-center text-md md:text-xl pt-3 font-bold">
                            महिलाएं कम से कम 30 मिनट सेक्स चाहती है।
                        </p>

                    </div>
                    <div className="col-span-6">

                        <div>
                            <img src="/main/hf91w_images/f1.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                        </div>
                        <p className="text-center text-md md:text-xl pt-3 font-bold">
                            बड़े- मोटे लिंग से ऑर्गेज्म जल्दी मिल जाता है।
                        </p>

                    </div>
                    <div className="col-span-6">

                        <div>
                            <img src="/main/hf91w_images/f4.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                        </div>
                        <p className="text-center text-md md:text-xl pt-3 font-bold">
                            शरीर में स्टैमिना हो सेक्स के दौरान थके नहीं।
                        </p>
                    </div>
                </div>

                <Ordernow />

                <div className="bg-[#6a6b66] px-3 text-xl text-white">

                    <div className="w-[95%] mx-auto py-3">
                        <img src="/main/hf91w_images/pendata.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                    </div>

                    <p>
                        हॉर्सफायर कैप्सूल कोई चमत्कार नहीं बल्कि आधुनिक विज्ञान और आयुर्वेद का उत्तम संयोजन है जो प्राकृतिक तरीके से लिंग की <span className="text-black">तंग कोशिकाओं</span> को एक्टिव करता है। <span className="text-black">कॉर्पस केवरोसोम</span> (Corpus cavernosum)  को रक्त से भर देता है। डैमेज ब्लड वेसेल्स की मरम्मत कर कमजोर <span className="text-black">लिंग को फौलादी</span> आकार देता है।
                    </p>
                    <p>
                        हॉर्सफायर कैप्सूल में मौजूद सभी जड़ीबूटियाँ और भस्म <span className="test-black">कामोत्तेजना बढ़ाने</span>, सेक्स पावर बढ़ाने के साथ-साथ स्<span className="text-black">ट्रेस रिलीवर</span> के तौर पर भी जानी जाती है। इसके नियमित सेवन से पुरुष कुछ ही दिनों में अपने <span className="text-black">जोश-स्टैमिना, सेक्स टाइमिंग और लिंग आकार</span> में अद्भुत बृद्धि महसूस करते है। इस प्रकार पुरुष के आत्मविश्वास में बृद्धि होती है, परफॉरमेंस की चिंता मिटाकर बेहतर सेक्स प्रदर्शन कर पाते है।

                    </p>

                </div>

                <Ordernow />







            </section>
        </section>
    )
}

export default Section2