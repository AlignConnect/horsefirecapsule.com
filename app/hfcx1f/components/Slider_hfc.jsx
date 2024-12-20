import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import dynamic from 'next/dynamic';
const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


const Slider_hfc = () => {


    var settings = {
        autoplaySpeed: 3000,
        initialSlide: 0,
        infinite: true,
        className: "center",
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // arrows: false,
        dots: true,
    };

    const list = [
        {
            image: '/main/hfcx1f_images/11.png',

            content_hfc: 'पहले मेरा लिंग छोटा था और सम्भोग अवधि भी काफी कम थी पर हॉर्सफायर कैप्सूल ने मेरे लिंग आकार और सेक्स प्रदर्शन को पूरी तरह से बदल दिया जो आप देख सकते है। इसे खाने से मेरी यौन कमजोरी पूरी तरह मिट गयी और सेक्सुअल लाइफ मजेदार हो गयी',

            name: 'JAYDIP GOHIL'
        },
        {
            image: '/main/hfcx1f_images/12.png',

            content_hfc: 'मैं एक लड़की के साथ काफी दिनों से रिलेशन में था, पर जब भी वो मीटिंग के लिए बुलाती तो मेरी फटती थी क्यूंकि मेरा लिंग कमजोर था पर इस के नियमित इस्तेमाल से मेरा लिंग फौलादी हो गया। अब मैं पुरे कॉन्फिडेंस के साथ मिलता हूँ और वो मेरे लिंग से खेलती है।',

            name: 'DIPESH KUMAR'
        }
    ]



    return (
        <section className='bg-black'>

            <div className="w-full max-w-4xl mx-auto ">


                <div className="md:hidden block">
                    <div className="mx-7">

                        <Slider {...settings} >
                            {
                                list.map((e, key) => {
                                    return <div className="bg-white rounded-md" key={key}>
                                        <div className="bg-white rounded-md my-3">
                                            <img src={e.image} alt="pic" className="w-[65%] mx-auto rounded-2xl" loading="lazy" />
                                            <div className="fontNoto text-justify text-md  text-black px-3 py-3">
                                                <p className='italic'>
                                                    {e.content_hfc}
                                                </p>
                                                <div className="fontPoppins text-end text-black text-xl font-extrabold">
                                                    {e.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </Slider>

                    </div>
                </div>



                <div className=" hidden md:block ">
                    <div className="grid grid-cols-2 gap-4">

                        {
                            list.map((e, key) => {
                                return <div className="" key={key}>


                                    <div className="bg-white rounded-md my-3">
                                        <img src={e.image} alt="pic" className="w-[65%] mx-auto rounded-2xl" loading="lazy" />
                                        <div className="fontNoto text-justify text-[1.1rem]  text-black px-3 py-3">
                                            <p className='italic'>
                                                {e.content_hfc}
                                            </p>
                                            <div className="fontPoppins text-end text-black text-xl font-extrabold">
                                                {e.name}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            })
                        }
                    </div>
                </div>



                <div className=" pt-14 pb-5">
                    <div className="relative ">
                        <div className="absolute left-0 right-0 -top-5 fontNoto text-black md:text-2xl text-xl bg-yellow-400 w-48 md:w-52 font-extrabold mx-auto text-center pt-2 rounded-md ">
                            डॉक्टर्स द्वारा प्रस्तावित
                        </div>
                        <div className=" fontNoto bg-black text-center text-white py-2 mx-3 rounded-md border border-solid border-yellow-300">
                            <p className='fontNoto text-center text-md md:text-xl text-white px-2 pt-6 '>
                                "Horsefire Capsule एक क्रन्तिकारी प्रभाव के साथ उपलब्ध है जिसका काम है पुरुष कमजोरी को भगाना ! इसे भारत के मशहूर सेक्सोलॉजिस्ट द्वारा सुझाया गया है, निचे वीडियो देखें!!"
                            </p>
                        </div>
                    </div>
                </div>


                <FlipAmazon />

                <div className='text-yellow-300'>
                    <YoutubeVideo />
                </div>



                <div className=" py-1">
                    <div className="fontNoto bg-yellow-300 text-center pt-2 font-extrabold ">
                        <p className='fontNoto text-center text-md md:text-2xl text-black px-2'>
                            देर न करें, आज ही <span className='fontPoppins text-red-600'>Horsefire Capsule</span> आजमाए और अपनी पार्टनर को वह सुख दें जिसकी वो हक़दार है !!
                        </p>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Slider_hfc