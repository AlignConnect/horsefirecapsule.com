import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Servedata = () => {
    return (
        <section className={`${noto.className} w-full md:w-[650px] mx-auto`}>

            <section className="bg-[#dcdcdc] text-3xl py-4 text-center font-bold">
                <h1 className="text-3xl">सर्वे के अनुसार महिलाएं</h1>
                <h1 className="text-[#109391]">और क्या चाहती है?</h1>

                <div>
                    <img src="/main/hfcbeta_images/nakedcp.webp" alt="asdasd" loading="lazy" />
                </div>


                <ul className="w-[360px] mx-auto py-7 text-xl">
                    <li className="flex items-center my-3 text-2xl gap-3 px-3"> <img src="/main/hfcbeta_images/tickxx.png" alt="asdasd" width={40} /><span className="text-[#0f9391]">अपने पुरुष पार्टनर</span> में दमखम</li>
                    <li className="flex items-center my-3 text-2xl gap-3 px-3"> <img src="/main/hfcbeta_images/tickxx.png" alt="asdasd" width={40} /> <span className="text-[#0f9391]"> सख्त और कठोर</span> लिंग </li>
                    <li className="flex items-center my-3 text-2xl gap-3 px-3"> <img src="/main/hfcbeta_images/tickxx.png" alt="asdasd" width={40} /> <span className="text-[#0f9391]">30 से 45 मिनट</span>  लगातार सेक्स</li>
                    <li className="flex items-center my-3 text-2xl gap-3 px-3"> <img src="/main/hfcbeta_images/tickxx.png" alt="asdasd" width={40} /> <span className="text-[#0f9391]">अच्छा सेक्स</span>  और ऑर्गज़्म</li>
                </ul>


            </section>


            <div className="p-5 bg-black">

                <div className="w-full">
                    <img src="/main/hfcbeta_images/pro1.webp" alt="sdfdfs" className="w-full md:w-3/4 mx-auto" />
                </div>


                <p className="text-white font-bold py-5 text-xl">
                    अगर पार्टनर ये सब चाहती है पर आप इस काबिल नहीं तो लाजमी है आप उसे कभी खुश नहीं रख सकते। <span className="text-yellow-400">
                        अगर आप ये सब काबिलियत चाहते है तो आपको कोई टेम्परेरी सलूशन नहीं बल्कि "हॉर्सफायर कैप्सूल"</span>  जैसा स्थायी सलूशन चाहिए।
                </p>

                <p className="bg-[#59d736] p-3 rounded-xl text-xl">
                    <span className="font-bold">  इसमें अश्वगंधा, शिलाजीत, कौचा, गोखरू,</span> और केसर जैसी 17 कामवर्धक एवं कामोत्तेजक गुणों से भरपूर बेशकीमती  <span className="font-bold"> जड़ीबूटियों और भस्मों की शक्ति मौजूद है।</span>
                </p>

                <p className="text-white text-xl py-3">
                    Horse Fire Capsule के ये सभी पावरफुल हर्ब्स यौन शक्ति बढ़ाने के लिए वैज्ञानिक रूप से स्वीकृत है। इतना ही नहीं Horse Fire Capsule यौन कमजोर पुरुषों की पहली पसंद बन गया है क्योंकि इसे बेस्ट सेक्सोलॉजिस्ट्स द्वारा प्रतावित किया जाता है।
                </p>


            </div>


        </section>
    )
}

export default Servedata