
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Ordernow = dynamic(() => import('./OrderNow'));


const Section1 = () => {
    return (

        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto px-3">

                <p className='text-xl font-semibold'>
                    हॉर्सफायर कैप्सूल आज के पुरुषो की आवश्यकता है। प्राचीन आयुर्वेद और आधुनिक विज्ञान से तैयार हॉर्सफायर कैप्सूल उन पुरुषों के लिए अत्यंत उपयोगी है जो <span className="text-red-800"> लिंग कमजोरी, शीघ्रपतन से पीड़ित</span> है या फिर सेक्स के दौरान उत्तेजना और स्टैमिना की कमी महसूस करते है।
                </p>


                <div>

                    <img src="/main/hf91w_images/second.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />

                    <p className="my-3 text-lg">
                        दरअसल, सर्वे में पाया गया की आज के समय में ज्यादातर पुरुष जवानी में ही लिंग की मजबूती खोते जा रहे है। रिसर्च में पता चला की इसके पीछे की वजह टेस्टस्टेरॉन हॉर्मोन की कमी है। टेस्टोस्टेरोन हॉर्मोन ब्लड वेसेल्स में नाइट्रिक ऑक्साइड की मात्रा बढ़ाता है जिससे लिंग में रक्त का बहाव तेजी से होता है। बेहतर रक्त संचार की वजह से लिंग में मनचाहा इरेक्शन मिलता है साथ ही छोटा और ढीला लिंग मजबूती के साथ सख्त होकर फौलाद का रूप ले लेता है।
                    </p>

                    <Ordernow />

                    <div className="">
                        <img src="/main/hf91w_images/blackfirst.webp" alt="asd" loading='eager' fetchPriority="high" className="w-full" />
                    </div>

                </div>


            </section>

        </section>

    )
}

export default Section1