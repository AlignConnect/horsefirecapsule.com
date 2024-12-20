import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Usedto = () => {
    return (
        <section className={`${noto.className} w-full mx-auto md:w-[650px]`}>
            <h1 className='horse-hfc text-yellow-300 text-3xl pt-5 text-center font-bold'>HORSE FIRE CAPSULE</h1>
            <h1 className='text-3xl font-bold text-center horse-hfc'>उपयोगकर्ता का अनुभव</h1>

            <div className="w-full">
                <img src="/main/hfcbeta_images/customer.webp" alt="asdasd" loading="lazy" className="w-[320px] mx-auto" />
            </div>

            <div className="px-2">
                <p className="text-red-500 pt-10 pb-4  text-center text-2xl text-start">
                    <span className="font-bold">NOTE:</span> उपयोगकर्ता ने नाम और पता छुपाने का अनुरोध किया है
                </p>

                <p className="text-xl italic">
                    मेरे ढीले लिंग और शीघ्रपतन की समस्या से न तो मुझे कभी सेक्स का मजा मिला और ना ही मेरी गर्लफ्रेंड खुश हुई। वह कई बार मुझसे बोली की इसका इलाज कराओ वरना मैं तुम्हे छोड़ दूंगी। मैं सचमुच डर जाता था की वो बेवफाई न कर दें मैंने उपाय ढूंढना शुरू कर दिया शुरू में कई प्रोडक्ट आजमाए पर कोई खास लाभ नहीं मिला। फिर एक दिन हॉर्सफायर का एड देखा और आर्डर कर दिया। सच कहूँ तो यह मेरे उम्मीद से ज्यादा असरदार निकला और कमल कर दिया। कुछ सप्ताह में ही मेरा लिंग साइज और इरेक्शन जबरदस्त तरीके से बढ़ने लगा। शीघ्रपतन मिट गया सेक्स टाइमिंग में 15-20 मिनट की वृद्धि हो गयी। अब हम दोनों ने सेक्स का असली मजा लेना शुरू किया है वो एक बार भी दूर होने की बात नहीं करती है। धन्यवाद हॉर्सफायर !
                </p>
            </div>


            <section className="bg-[#0e1118] py-5 md:px-5">

                <h1 className="font-bold text-2xl text-white text-center">
                    "आप को भी लिंग के साइज और शीघ्रपतन को लेकर शर्माने की <span className="text-yellow-500"> बजाय अपनी बात हमारे सामने रखनी चाहिए"</span>
                </h1>

                <p className="text-xl text-white p-3">
                    क्योंकि हर एक व्यक्ति की समस्या अलग हो सकती है हाइट वजन रहन-सहन खानपकान अलग होता है भली भांति आपसे पूछताछ करके आपको कंसल्ट किया जाता है और आपके शारीरिक संरचना और उम्र के अनुकूल दवा तैयार किया जाता है।
                </p>

                <div>
                    <img src="/main/hfcbeta_images/box_pro.webp" alt="asdasdas" loading="lazy" className="w-[80%] mx-auto" />
                </div>

                <p className="text-4xl text-white py-10 text-center">
                    अभी ऑर्डर करें
                </p>

                <div className="w-[80%] mx-auto text-yellow-400 bg-black pt-5 pb-3 font-bold text-3xl text-center">
                    SAVE UP TO 50%
                </div>

                <h1 className="text-[#10e0fe] px-3 font-semibold py-6 text-3xl text-center">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !</h1>


            </section>



        </section>
    )
}

export default Usedto