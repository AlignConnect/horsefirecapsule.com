import dynamic from 'next/dynamic';
import Image from 'next/image'
const FlipAmazon = dynamic(() => import('@/app/hfcnwhiz/components/FlipAmazon'), {
    loading: () => <p>loader</p>
});
function Hearbs() {


    return (
        <div className='w-full relative'>
            <div className=" relative z-10 py-5 sm:py-10 text-[1.1rem] text-justify sm:text-xl px-3 sm:px-10 ">
                <img src="/main/hfcgwhiz_images/img13.webp" alt="pic" width='100%' height='100%' loading='lazy' />
                <p className="mt-5"><span className="text-red-500 font-bold">Horse Fire Capsule</span> कोई चमत्कार नहीं बल्कि आधुनिक विज्ञान और आयुर्वेद का उत्तम संयोजन है जो प्राकृतिक तरीके से लिंग की तंग कोशिकाओं को एक्टिव करता है। कॉर्पस केवरोसोम (Corpus cavernosum)  को रक्त से भर देता है। डैमेज ब्लड वेसेल्स की मरम्मत कर कमजोर लिंग को फौलादी आकार देता है।</p>

                <p className="mt-2"><span className="text-red-500 font-bold">Horse Fire Capsule</span> में मौजूद सभी जड़ीबूटियाँ और भस्म कामोत्तेजना बढ़ाने, सेक्स पावर बढ़ाने के साथ-साथ स्ट्रेस रिलीवर के तौर पर भी जानी जाती है। इसके नियमित सेवन से पुरुष कुछ ही दिनों में अपने जोश-स्टैमिना, सेक्स टाइमिंग और लिंग आकार में अद्भुत बृद्धि महसूस करते है। इस प्रकार पुरुष के आत्मविश्वास में बृद्धि होती है, परफॉरमेंस की चिंता मिटाकर बेहतर सेक्स प्रदर्शन कर पाते है।</p>
                <div className="mt-5">
                    <FlipAmazon />
                </div>
            </div>
            <Image src='/main/hfcgwhiz_images/img21.webp' fill loading='lazy' alt='pic' />
        </div>
    )
}

export default Hearbs