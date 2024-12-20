"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Sex_weakness = dynamic(() => import('./components/Sex_weakness'), {
    loading: () => <p>loading</p>
});



const Slider_hfc = dynamic(() => import('./components/Slider_hfc'), {
    loading: () => <p>loading</p>
});



const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loading</p>
});



const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loading</p>
});


const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfcx1f")

    }, [])

    return (
        <div className='bg-black'>

            <Header />

            <Sex_weakness />

            <Slider_hfc />

            <Form />


            <CustomerReview />

            <Footer />

            <FooterP />

        </div>
    )
}

export default page