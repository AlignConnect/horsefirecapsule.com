import React from 'react'

function Header() {
    return (
        <section>
            <div className="bg-[url('/main/hfc21_images/header_background.webp')] bg-cover" >
                <div className=" w-full max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 items-center pt-5">
                        <div className="col-span-6 md:text-left text-center ">
                            <div className="fontPoppins text-white text-3xl md:text-5xl font-extrabold">
                                HORSE FIRE CAPSULE
                            </div>
                            <div className="fontKalnia text-green-600 text-xl md:text-2xl font-semibold">
                                Sex Performance Booster
                            </div>
                            <div className="fontSumana font-semibold text-white text-3xl md:text-5xl md:py-3 py-4">
                                सेक्स पॉवर बढ़ाएं और पायें
                                <div className="font-semibold text-red-600 text-[2.4rem] md:text-6xl md:py-4">
                                    पावरफुल मर्द का टैग
                                </div>
                            </div>

                            <p className='fontSumana text-white text-xl md:text-xl px-2 py-1'>
                                १७ शक्तिशाली जड़ीबूटियों और भस्मो से तैयार किया गया असरदार और विश्वसनीय
                            </p>
                            <div className="md:inline-block text-center md:my-7 my-5" >
                                <a className="bg-red-600 text-md md:text-xl  font-bold fontPoppins py-2 px-8 w-full rounded-xl text-white" href='#form'>
                                    ORDER NOW
                                </a>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <img
                                className='w-full pt-4'
                                src={"/main/hfc21_images/header_model.webp"}
                                alt='header_model'
                                fetchPriority='high'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header