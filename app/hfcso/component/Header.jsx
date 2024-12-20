import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[650px] mx-auto bg-black text-center">



                <div className="w-full md:py-5 pt-3">
                    <img src="/main/hfcbeta_images/horse.webp" alt="asdasd" className="w-[85%] md:w-[50%] p-3 mx-auto" loading="eager" fetchPriority="high" />
                </div>

                {/* <div className="fontPoppins text-white text-md md:py-3">
                    Clinically tested and approved by known medical professionals
                </div> */}

                <div className="fontNoto md:text-3xl text-xl font-semibold text-[#50c9e3] md:py-2 pt-4 px-2">
                    17 शक्तिशाली जड़ी-बूटियों और भस्मों से तैयार किया गया असरदार और विश्वसनीय!
                </div>

                <div className="grid justify-center md:py-2">
                    <div className="flex items-center text-white py-1 gap-2">
                        <img src="/main/hfcbeta_images/power.png" alt="" className="w-7" />
                        <div className="fontPoppins font-semibold md:text-2xl">
                            INCREASES <span className="text-[#f72b2b]">POWER</span>
                        </div>
                    </div>
                    <div className="flex items-center text-white py-1 gap-2">
                        <img src="/main/hfcbeta_images/performance.png" alt="" className="w-7" />
                        <div className="fontPoppins font-semibold md:text-2xl">
                            IMPROVES <span className="text-[#f72b2b]">PERORMANCE</span>
                        </div>
                    </div>
                    <div className="flex items-center text-white py-1 gap-2">
                        <img src="/main/hfcbeta_images/stamina.png" alt="" className="w-7" />
                        <div className="fontPoppins font-semibold md:text-2xl">
                            BOOST <span className="text-[#f72b2b]">STAMINA</span>
                        </div>
                    </div>
                </div>



                <section className="">
                    <div className="w-full md:w-full mx-auto">
                        <img src="/main/hfcbeta_images/mantop.webp" alt="asdasd" loading="lazy" className="px-2" />
                    </div>



                </section>


            </section>
        </section>
    )
}

export default Header