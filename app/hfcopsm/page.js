"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>load</p>
});

const Section2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>load</p>
});

const Section3 = dynamic(() => import('./components/Section3'), {
    loading: () => <p>load</p>
});

const Section4 = dynamic(() => import('./components/Section4'), {
    loading: () => <p>load</p>
});

const Section5 = dynamic(() => import('./components/Section5'), {
    loading: () => <p>load</p>
});

const Section6 = dynamic(() => import('./components/Section6'), {
    loading: () => <p>load</p>
});

const Section6Sub = dynamic(() => import('./components/Section6Sub'), {
    loading: () => <p>load</p>
});

const Section7 = dynamic(() => import('./components/Section7'), {
    loading: () => <p>load</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>load</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
})

const FooterPoput = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});

const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfcopsm");
    }, []);



    return (

        <div className='w-full fontNoto overflow-hidden'>

            <div className='w-full bg-white text-black mb-[4rem] sm:mb-0'>



                <Section1 />

                <Section2 />
                <div className='mb-5 mt-3'>
                    <OrderBtn />
                </div>


                <Section3 />

                <Section4 />

                <div className=' mb-1 mt-3'>
                    <OrderBtn />
                </div>

                <Section5 />

                <div className='mt-2 mb-5'>
                    <OrderBtn />
                </div>

                <Section6 />

                <div className='mt-2 mb-5'>
                    <OrderBtn />
                </div>

                <Section6Sub />

              


                <Section7 />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPoput />
            </div>

        </div>

    )
}
export default page;