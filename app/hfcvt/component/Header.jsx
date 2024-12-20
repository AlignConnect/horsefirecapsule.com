import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Header = () => {
    return (
        <section className={noto.className}>


            <div className='w-full bg-[url("/main/hfcalpha_images/topback.webp")] bg-cover  bg-no-repeat pt-[30px] md:pt-[100px]'>
                <div className='w-full md:w-[70rem] mx-auto grid grid-cols-2 items-center text-white '>

                    <div className="block md:hidden text-center col-span-2">
                        <h1 className='font-bold text-3xl'>HORSE FIRE</h1>
                        <h1 className='text-3xl tracking-[25px]'>CAPSULE</h1>
                    </div>


                    <div className='col-span-2 md:col-span-1 order-2 md:order-1 text-center md:text-start'>

                        <div className="hidden md:block">
                            <h1 className='font-bold text-7xl'>HORSE FIRE</h1>
                            <h1 className='text-5xl tracking-[25px]'>CAPSULE</h1>
                        </div>

                        <div className="py-[30px]">
                            <img src="/main/hfcalpha_images/noproduct.png" alt="nodatafoud" loading="lazy" width={250} className="mx-auto md:mx-0" />
                        </div>



                        <h2 className="text-[#d24a44] text-3xl font-bold  md:pt-[15px] md:pb-[13px]">
                            सेक्स पावर बढ़ाएं,
                        </h2>

                        <h2 className="text-[#e5ac13] text-3xl md:text-5xl font-bold md:w-[70%] leading-[60px]">
                            पाएं असली पावरफुल मर्द का टैग
                        </h2>


                    </div>


                    <div className='col-span-2 md:col-span-1 imdata order-1 md:order-2'>
                        <img src="/main/hfcalpha_images/firstp.webp" alt="nodata" loading='eager' width='100%' height='100%' className="min-h-[250px]" />
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Header