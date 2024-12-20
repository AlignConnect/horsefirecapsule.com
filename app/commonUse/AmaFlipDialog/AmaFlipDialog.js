import { useGlobalContext } from "@/app/statemanage/context";
import './Ama.css';
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect, useState } from "react";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const AmaFlipDialog = ({  type }) => {
    const { isPopupOpen, closePopup } = useGlobalContext();

    const [ChLink, setChLink] = useState({ checkout: "https://bit.ly/49SkDoX", close: 'https://bit.ly/3xNPplo',amazon:'https://amzn.to/4aQiFqg' })

    useEffect(() => {
      
    
      switch (type) {

        case "exo":
            setChLink({checkout: "https://bit.ly/49SkDoX", close: 'https://bit.ly/3xNPplo',amazon:'https://amzn.to/4aQiFqg'})
            break;
        case "ts":
            setChLink({checkout: "https://bit.ly/3ULdKQL", close: 'https://bit.ly/3K3oqVE',amazon:'https://amzn.to/3K6ttow'})
            break;
      
        default:
            setChLink({checkout: "https://bit.ly/49SkDoX", close: 'https://bit.ly/3xNPplo',amazon:'https://amzn.to/4aQiFqg'})
            break;
      }
      return () => {
        
      }
    }, [])
    



    return (
        <div>

            {isPopupOpen && (
                <div className={`${noto.className} overlay overflow-visible text-black`}>
                    <div className="bg-[white] px-2 rounded-xl w-[95%] md:w-[500px] ">


                        <section className="text-end px-3" style={{ fontFamily: "sans-serif" }}>
                            <button className="text-xl text-black" onClick={() => {
                                closePopup();
                                window.location.href = ChLink.close;
                            }}> x
                            </button>


                            <div className='text-center'>

                                <section className="w-full pyd-2">
                                    <a href={ChLink.checkout} style={{ textDecoration: 'none' }}><img src="/checkout_images/flippro.webp" alt="no" className="w-[90%] sm:w-full  mx-auto" /></a>
                                </section>

                                <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                    <div className='w-[3rem] md:w-[5rem]'  >
                                        <img src="/common_images/secure.png" alt="no" className="w-full" />
                                    </div>

                                    <div className='text-md'>
                                        Buy from Trusted Website
                                    </div>


                                </section>





                                <div className='text-md font-noto' >
                                    Flipkart से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={ChLink.checkout} style={{ textDecoration: 'none' }}><img src="/common_images/flipkart.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-md  mt-5 mb-2 font-noto' >
                                    Amazon से खरीदने के लिए निचे क्लिक करें
                                </div>
                                <div className="grid justify-center">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={ChLink.amazon} style={{ textDecoration: 'none' }}>
                                                <img src="/common_images/amazon.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>

                                <div className='font-noto bg-[#ffa800] pt-2 my-4 -mx-1 px-1 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                            </div>

                        </section>
                    </div>
                </div>
            )}



        </div>
    )
}

export default AmaFlipDialog;