import dynamic from 'next/dynamic';
import React from 'react'



const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


const Header = () => {
    return (
        <section className='bg-black'>

            <div className="w-full max-w-4xl mx-auto ">


                <div className="flex items-center justify-between gap-3 py-5 px-1">

                    <div className="">
                        <a href="#form"><img src="/main/hfcx1f_images/who.png" alt="" className='w-3/4 md:w-16 mx-auto' /></a>
                    </div>

                    <div className="">
                        <img src="/main/hfcx1f_images/logo.png" alt="" className='w-5/6 md:w-full mx-auto' />
                    </div>

                    <div className="">
                        <a href="#form"><img src="/main/hfcx1f_images/fleg.png" alt="" className='w-3/4 md:w-16 mx-auto' /></a>
                    </div>

                </div>


                <div className="fontArya text-white md:text-4xl text-2xl text-center md:py-5 py-2">
                    जाने कैसे होती है सेक्स कमजोरी<br /> और <span className='text-yellow-400'>मर्दानगी कैसे बढ़ाएं?</span>
                </div>

                <img src="/main/hfcx1f_images/couple1.png" alt="" className='w-full px-2' />

                <p className='fontNoto text-justify text-md md:text-xl text-white px-2 py-3 '>
                    एक पुरुष को "मर्द" सुनने में जितना अच्छा लगता है "नामर्द" उतना ही बुरा लगता है। खासकर, जब यह उसकी महिला पार्टनर बोले। जी हाँ, अगर आप सेक्स में कमजोर है, लिंग में दम नहीं है या वीर्य बहुत जल्दी निकल जाता है तो सेक्स अधूरा रह जाता है। बार-बार इस प्रकार के सेक्स प्रदर्शन की वजह से आप की बीवी या गर्लफ्रेंड सेक्स के असली सुख को नहीं भोग पाती है। ऐसे में कई बार महिलाये "नामर्द" जैसे अशब्द बोल बेवश पुरुष की खिल्ली उड़ा देती है।
                </p>




                <p className='fontNoto text-justify text-md md:text-xl text-white px-2 py-3 '>
                    एक्सपर्ट्स मानते है की महिला को ऑर्गेज्म न मिलने से उनके मानसिक व शारीरिक हेल्थ पर प्रभाव पड़ता है। खुशहाली वाले हॉर्मोन रिलीज नहीं होते और अवसाद, तनाव बढ़ाने वाला कार्टिसोल हॉर्मोन ज्यादा मात्रा में रिलीज़ होता है और महिला चिड़चिड़ी हो जाती है, साथ ही अन्य शारीरिक व मानसिक रोगों से घिर जाती है।
                </p>

                <hr className='mb-4' />

                <FlipAmazon />


            </div>


        </section>
    )
}

export default Header