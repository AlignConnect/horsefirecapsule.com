"use client";
import dynamic from "next/dynamic"
import { useEffect } from "react";
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Survey = dynamic(() => import('./components/Survey'), {
    loading: () => <p>loading</p>
});

const Extra_offer = dynamic(() => import('./components/Extra_offer'), {
    loading: () => <p>loading</p>
});

const Effects = dynamic(() => import('./components/Effects'), {
    loading: () => <p>loading</p>
});

const Herbs = dynamic(() => import('./components/Herbs'), {
    loading: () => <p>loading</p>
});

const Hft_medicine = dynamic(() => import('./components/Hft_medicine'), {
    loading: () => <p>loading</p>
});

const Customer_Exp = dynamic(() => import('./components/Customer_Exp'), {
    loading: () => <p>loading</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})

const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))


// const Order_now = dynamic(() => import('./components/Order_now'), {
//     loading: () => <p>loader</p>
// })


const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
const FlipKart = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>load</p>
});

function page() {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfcpile")

    }, [])

    return (
        <div>

            <Header />
            <Survey />
            <Extra_offer />
            <Herbs />
            <Effects />

            <div className='max-w-xl mx-auto'>
                <YoutubeVideo />
            </div>

            <Hft_medicine />
            <Customer_Exp />
            <Form />
            <CustomerReview />
            <Footer />
            <FooterPopup />

        </div>
    )
}

export default page