"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const SexProblemHeader = dynamic(() => import('./components/SexProblemHeader'), {
    loading: () => <p>loader</p>
});

const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const Hearbs = dynamic(() => import('./components/Hearbs'), {
    loading: () => <p>loader</p>
});

const HowItsWork = dynamic(() => import('./components/HowItsWork'), {
    loading: () => <p>loader</p>
});


const WhyChoose = dynamic(() => import('./components/WhyChoose'), {
    loading: () => <p>loader</p>
});

const Sevan_kese_kare = dynamic(() => import('./components/Sevan_kese_kare'), {
    loading: () => <p>loader</p>
});



const Tab_Exp = dynamic(() => import('./components/Tab_Exp'), {
    loading: () => <p>loader</p>
});



const Review = dynamic(() => import('@/app/hf01a/components/CustomerReview'), {
    loading: () => <p>loader</p>
});


const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const Flip = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))


function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hf99n")

    }, [])

    return (
        <div className=''>

            <Header />

            <SexProblemHeader />

            <Flip />

            <Section1 />

            <Hearbs />

            <HowItsWork />

            <div className='max-w-xl mx-auto'>
                <YoutubeVideo />
            </div>

            <WhyChoose />
            <Flip />

            <Sevan_kese_kare />

            <Flip />

            <Tab_Exp />

            <div className='w-full md:w-[768px] mx-auto'>
                <Review />
            </div>

            <Footer />

            <FooterP />



        </div >
    )
}

export default page