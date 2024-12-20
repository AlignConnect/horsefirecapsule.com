import '../hf01a.css';

const Section1 = () => {

    return (
        <div className='w-full bg-gray-200 py-5 sm:py-10'>


            <div className="fontPoppins text-center">
                <h1 className="text-[13vw] px-3  sm:text-[10vw] font-bold  leading-none text-[#b3322c]  sm:hidden">HORSE FIRE</h1>
                <p className="tracking-[0.4em]  text-[5vw] sm:text-[2vw]  font-semibold  sm:hidden">Capsule</p>
            </div>

            <div className="grid grid-cols-12 items-center px-3 gap-5 sm:gap-0">
                <div className="hidden sm:block sm:col-span-2"></div>

                <div className="col-span-6">
                    <h1 className="text-[13vw] sm:text-[10vw] font-bold fontPoppins leading-none text-[#b3322c] hidden sm:block">HORSE FIRE</h1>

                    <p className="tracking-[0.4em] text-[5vw] sm:text-[2vw] fontPoppins font-semibold hidden sm:block">Capsule</p>

                    <p className="text-[6.5vw] sm:text-[3vw] font-bold mt-5 leading-tight"><span className="text-[#b3322c]">यौन कमजोर</span> पुरुषों की पहली पसंद</p>
                    <p className="text-gray-700 text-[3.4vw] sm:text-[1.3vw] mt-2 font-bold ">शीघ्रपतन, लिंग कमजोरी व शारीरिक<br /> कमजोरी दूर करने में उपयोगी!</p>
                </div>
                <img src="/main/hf01a_images/image9.webp" alt="pic" width='100%' height='100%' className='col-span-6 sm:col-span-4' fetchPriority='high' />
            </div>

            <div className="text-center mt-5">
                <a href="#form" className="bg-red-700 px-5 fontPoppins sm:px-36 text-white text-[5vw] sm:text-[3vw] py-1 md:py-2 rounded-xl font-bold">
                    ORDER NOW
                </a>
            </div>
        </div>
    )
}
export default Section1;