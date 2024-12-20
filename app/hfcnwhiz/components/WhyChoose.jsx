import dynamic from 'next/dynamic';
const FlipAmazon = dynamic(() => import('@/app/hfcnwhiz/components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

function WhyChoose() {

    const list6 = [
        {
            image: '/main/hfcgwhiz_images/img5.webp',
            name: 'छोटा और ढीला लिंग',
        },
        {
            image: '/main/hfcgwhiz_images/img9.webp',
            name: 'बड़ा और सख्त लिंग',
        },
        {
            image: '/main/hfcgwhiz_images/img6.webp',
            name: 'शीघ्रपतन, कम सेक्स अवधि',
        },
        {
            image: '/main/hfcgwhiz_images/img15.webp',
            name: 'नॉनस्टॉप +45 मिनट सेक्स',
        },
        {
            image: '/main/hfcgwhiz_images/img7.webp',
            name: 'सेक्स के दौरान थकान',
        },
        {
            image: '/main/hfcgwhiz_images/img10.webp',
            name: 'उच्च एनर्जी और स्टैमिना',
        },
        {
            image: '/main/hfcgwhiz_images/img8.webp',
            name: 'पानी जैसा पतला वीर्य',
        },
        {
            image: '/main/hfcgwhiz_images/img11.webp',
            name: 'गाढा और उर्वरक वीर्य',
        },

    ]

    return (
        <div className='w-full relative text-[1.15rem] sm:text-3xl'>
            <h1 className="text-center pt-3 pb-1 text-3xl sm:text-5xl font-extrabold ">अंतर साफ है, चुनना बाकी है !</h1>
            <div className='bg-black pb-5'>

                <div className=" text-white pb-5 sm:pb-10">
                    <div className="grid grid-cols-2 text-3xl sm:text-4xl font-bold bg-sky-500   text-center pt-4 sm:pt-5">
                        <div className=" ">पहले</div>
                        <div className="">बाद में</div>
                    </div>
                    <div className=" grid grid-cols-2 px-0 sm:px-5 mx-2 sm:mx-3 py-5 sm:py-10 text-[4.7vw] sm:text-2xl gap-2 sm:gap-10">
                        {list6.map((e, key) => {
                            return <div className="flex flex-grow gap-1 sm:gap-3 items-center" key={key}>
                                <img src={e.image} alt="pic" className="w-20 sm:w-56" width='100%' height='100%' loading='lazy' />
                                <p className="mt-3">{e.name}</p>
                            </div>
                        })}
                    </div>

                    <div className="bg-zinc-800 py-5 sm:px-5 px-3 text-center ">सोचना छोड़े ! दिन की सुने, सर्वश्रेष्ठ चुने और खुशहाली भरे सेक्स लाइफ की तरफ कदम बढ़ाये। हॉर्सफायर के इस्तेमाल से 10 लाख से ज्यादा खुशहाल पुरुषों में शामिल हो जाये और अपने महिला पार्टनर को वह सेक्स सुख दें जो वह हमेशा से चाहती है। </div>
                </div>
            </div>
                <FlipAmazon />
        </div>

    )
}

export default WhyChoose