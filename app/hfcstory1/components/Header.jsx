import React from 'react'

const Header = () => {
    return (
        <section className='header_background'>

            <div className="w-full max-w-7xl mx-auto">

                <div className="flex items-center justify-between py-5 px-2">


                    <div className="fontPoppins md:text-xl text-md font-semibold text-black">
                        <span className='text-red-600'>Secret</span> Health <span className='text-red-600'>Story</span>
                    </div>

                    <div className="fontPoppins md:text-xl text-[0.8rem] font-semibold text-black border border-black md:p-2 p-1">
                        <a href="#form">GET APPOINTMENT</a>
                    </div>

                </div>


                <div className="grid md:grid-cols-2 items-center justify-center gap-3 px-3 pt-7 md:pt-5">

                    <div className="">

                        <div className="fontNoto md:text-5xl text-[1.5rem] md:leading-normal font-extrabold">
                            कमजोर पति और मेरी अनियंत्रित वासना की दास्तान जाने कैसे मिला यौनसुख!
                        </div>



                        <div className="bg-white fontPoppins w-32 text-center mx-0 md:text-md text-sm py-1 rounded-sm my-2 font-semibold">
                            Age:-31
                        </div>



                    </div>

                    <div className="">
                        <img src="/main/hfcstory1_images/header_girl.webp" alt="" className='w-5/6 md:w-4/5 mx-auto' />
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Header