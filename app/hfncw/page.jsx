"use client"
import dynamic from "next/dynamic"
import { useEffect } from "react";

const Header = dynamic(() => import('./component/Header'));
const Section1 = dynamic(() => import('./component/Section1'));
const Section2 = dynamic(() => import('./component/Section2'));
const Section3 = dynamic(() => import('./component/Section3'));
const Section4 = dynamic(() => import('./component/Section4'));
const Form = dynamic(() => import('./component/Form'));
const Reviewdata = dynamic(() => import('./component/CustomerReview'));
const Ordernow = dynamic(() => import('./component/OrderNow'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));
const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))

const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfncw")
    }, [])


    return (
        <section>

            <Header />
            <Ordernow />
            <Section1 />

            <Section2 />


            <div className='max-w-xl mx-auto'>
                <YoutubeVideo />
            </div>

            <Section3 />
            <Ordernow />

            <Section4 />

            <Form />
            <Reviewdata />
            <Footer />
            <FooterPop />

        </section>)
}

export default page