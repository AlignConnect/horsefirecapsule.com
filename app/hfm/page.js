"use client";
import dynamic from 'next/dynamic';
import './components/Home.css'
import { useEffect } from 'react';

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});


const Details = dynamic(() => import('./components/Details'), {
    loading: () => <p>loader</p>
});

const Reason = dynamic(() => import('./components/Reason'), {
    loading: () => <p>loader</p>
});

const SexSolution = dynamic(() => import('./components/SexSolution'), {
    loading: () => <p>loader</p>
});

const HowItWorks = dynamic(() => import('./components/HowItWorks'), {
    loading: () => <p>loader</p>
});

const Percentage = dynamic(() => import('./components/Percentage'), {
    loading: () => <p>loader</p>
});

const ChangeLife = dynamic(() => import('./components/ChangeLife'), {
    loading: () => <p>loader</p>
});

const Question_Answer = dynamic(() => import('./components/Question_Answer'), {
    loading: () => <p>loader</p>
});

const Sevan_kare = dynamic(() => import('./components/Sevan_kare'), {
    loading: () => <p>loader</p>
});


const LimitedOffer = dynamic(() => import('./components/LimitedOffer'), {
    loading: () => <p>loader</p>
});


const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>Footer</p>
});


const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>Footer Popup</p>
});


const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))



function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfm")

    }, [])



    return (
        <div className='bg-black'>
            <div className='bg-white w-full max-w-3xl mx-auto'>

                <Header />

                <FlipAmazon />


                <Details />

                <FlipAmazon />


                <Reason />



                <SexSolution />

                <div className='max-w-xl mx-auto'>
                    <YoutubeVideo />
                </div>


                <FlipAmazon />


                <LimitedOffer />


                <HowItWorks />

                <FlipAmazon />


                <Percentage />
                <FlipAmazon />

                <LimitedOffer />



                <ChangeLife />


                <FlipAmazon />


                <Question_Answer />

                <FlipAmazon />
                <Sevan_kare />



                <LimitedOffer />

                <FlipAmazon />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />


            </div>
        </div>
    )
}

export default page