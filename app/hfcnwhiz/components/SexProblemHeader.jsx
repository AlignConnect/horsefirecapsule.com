import dynamic from "next/dynamic";
import Image from "next/image"

const FlipAmazon = dynamic(() => import('@/app/hfcnwhiz/components/FlipAmazon'), {
    loading: () => <p>loader</p>
});
function SexProblemHeader() {

    const list = [
        {
            image: '/main/hfcgwhiz_images/img3.webp',
            title: 'टेस्टोस्टेरोन का स्तर बढाए'
        },
        {
            image: '/main/hfcgwhiz_images/img18.webp',
            title: 'लिंग बड़ा व सख्त बनाए'
        },
        {
            image: '/main/hfcgwhiz_images/img19.webp',
            title: 'जोश जगाए, अवधि बढाए'
        }
    ]

    return (

        <div className="w-full text-[1.1rem] sm:text-xl text-justify relative z-10 bg-white -mt-1">
            <div className="py-5">
                <FlipAmazon />
            </div>

            <div className="bg-white pb-5 px-2 sm:px-5 ">
                <div className="flex flex-grow text-center font-bold text-[1.1rem] sm:text-2xl">
                    {list.map((e, key) => {
                        return <div key={key} className={`w-2/6 ${key == 0 && 'border-r-2'} ${key == 1 && 'border-x-2'} ${key == 2 && 'border-l-2'} border-black px-3 sm:px-10`}>
                            <img src={e.image} alt="pic" width='100%' height='100%' loading="lazy" className='sm:w-10/12 mx-auto' />
                            <p className="mt-3">{e.title}</p>
                        </div>
                    })}
                </div>

                <p className="mt-5 ">हॉर्सफायर कैप्सूल आज के पुरुषो की आवश्यकता है। प्राचीन आयुर्वेद और आधुनिक विज्ञान से तैयार हॉर्सफायर कैप्सूल उन पुरुषों के लिए अत्यंत उपयोगी है जो लिंग कमजोरी, शीघ्रपतन से पीड़ित है या फिर सेक्स के दौरान उत्तेजना और स्टैमिना की कमी महसूस करते है।</p>
            </div>

            <p className="bg-gray-300 py-5 px-4 sm:px-5 ">
                दरअसल, सर्वे में पाया गया की आज के समय में ज्यादातर पुरुष जवानी में ही लिंग की मजबूती खोते जा रहे है। रिसर्च में पता चला की इसके पीछे की वजह टेस्टस्टेरॉन हॉर्मोन की कमी है। टेस्टोस्टेरोन हॉर्मोन ब्लड वेसेल्स में नाइट्रिक ऑक्साइड की मात्रा बढ़ाता है जिससे लिंग में रक्त का बहाव तेजी से होता है। बेहतर रक्त संचार की वजह से लिंग में मनचाहा इरेक्शन मिलता है साथ ही छोटा और ढीला लिंग मजबूती के साथ सख्त होकर फौलाद का रूप ले लेता है।
            </p>
            <div className="my-5">
                <FlipAmazon />
            </div>

        </div>
    )
}

export default SexProblemHeader