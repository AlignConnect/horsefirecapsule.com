import dynamic from 'next/dynamic';

const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

function HowItsWork() {

    const reviewList = [
        {
            image: '/main/hfcgwhiz_images/01.webp',
            title: 'Jay Shukhala',
            para: "It's really amazing product for sex stamina and penis enlargement."
        },
        {
            image: '/main/hfcgwhiz_images/02.webp',
            title: 'Shahil Sharma',
            para: 'Maine sex timing badhaane ka isase behatar product aaj tak nhi dekha..just buy this!'
        },
        {
            image: '/main/hfcgwhiz_images/03.webp',
            title: 'Denil Patel',
            para: 'Yes..it did what promised about stamina, erection, and performance.'
        },
        {
            image: '/main/hfcgwhiz_images/04.webp',
            title: 'Vaibhav Yadav',
            para: 'Best medicine in market for sex stamina and size...kamjor purush ise jarur try kren.'
        },
    ]

    return (

        <div className='w-full relative text-center text-white fontPoppins'>
            <div className="bg-gradient-to-b from-red-800 via-red-600 to-black p-4  font-bold text-xl sm:text-3xl">
                हॉर्सफायर के संतुष्ट ग्राहक की माने !
            </div>
            <div className=" py-5 sm:pt-10 sm:pb-5 text-center px-2 sm:px-5  text-[3.7vw] sm:text-xl">

                <div className="grid grid-cols-2 gap-2 sm:gap-20">
                    {reviewList.slice(0, 2).map((e, key) => {
                        return <div className={`bg-sky-500 rounded-full px-4 py-5 sm:px-8 sm:py-5 mt-8`} key={key}>
                            <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className="w-14 sm:w-20 rounded-full  mx-auto -mt-[35%] sm:-mt-[25%]" />
                            <p className="text-[4.5vw] sm:text-2xl mt-2 font-bold">{e.title}</p>
                            <p className="">{e.para}</p>

                        </div>
                    })}
                </div>

                <img src='/main/hfcgwhiz_images/img1.webp' alt="pic" width='100%' height='100%' loading='lazy' className="mt-3 sm:mt-5 w-8/12 mx-auto" />

                <div className="grid grid-cols-2 gap-2 sm:gap-20">
                    {reviewList.slice(2, 4).map((e, key) => {
                        return <div className={`bg-sky-500 rounded-full px-4 py-5 sm:px-8 sm:py-5 mt-10 sm:mt-12`} key={key}>
                            <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className="w-14 sm:w-20 rounded-full  mx-auto -mt-[35%] sm:-mt-[25%]" />
                            <p className="text-[4.5vw] sm:text-2xl mt-2 font-bold">{e.title}</p>
                            <p className="">{e.para}</p>

                        </div>
                    })}
                </div>

            </div>

            <OrderBtn/>
        </div>
    )
}

export default HowItsWork