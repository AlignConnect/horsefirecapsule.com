import React from 'react'

function Effects() {

    const No_side_effects = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 ' key={key}>
                <img src="/main/hft01doc_images/right.png" className='md:w-10 w-8 py-1' alt='no_side_effects_icon' />
                <div className='fontPoppins md:text-xl text-md  text-[#1e4389] py-1 '>{e.no_side_effects_content}</div>
            </div >

        })
    }

    return (
        <section>
            <div className="bg-[url('/main/hft01doc_images/second_background.webp')] bg-cover">
                <div className="w-full max-w-7xl text-center mx-auto">
                    <div className="grid sm:grid-cols-2 items-center sm:py-5 py-3">

                        <div className="">
                            <p className="text-black text-justify fontNoto text-[1.2rem] md:text-2xl py-3 px-2">
                                ये सभी कामोत्तेजक जड़ीबूटियां वैज्ञानिक रूप से प्रमाणित है और <span className="fontPoppins">Horsefire Capsule</span> भी आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित उत्पाद है।
                            </p>

                            <div className="px-2 text-left">
                                {
                                    No_side_effects([
                                        {
                                            no_side_effects_content: "Natural wellness supplement for sex stamina"
                                        },
                                        {
                                            no_side_effects_content: "Non-hormonal formula with 0% side-effects"
                                        },
                                        {
                                            no_side_effects_content: "100% Help to Maximize sextime duration"
                                        },
                                        {
                                            no_side_effects_content: "Better Absorption"
                                        },
                                        {
                                            no_side_effects_content: "100% Benefits & Satisfaction"
                                        }
                                    ])
                                }
                            </div>

                        </div>

                        <div className="">
                            <img
                                src="/main/hft01doc_images/doctor_third.webp"
                                alt="doctor_third"
                                className="sm:w-96 w-80 pt-3  mx-auto sm:block hidden"
                                fetchPriority='high'
                                loading='eager' />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Effects