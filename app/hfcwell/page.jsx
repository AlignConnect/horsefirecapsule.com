"use client"
import React, { useEffect } from 'react'
import './components/home.css'
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Sex_issue = dynamic(() => import('./components/Sex_issue'), {
    loading: () => <p>loader</p>
});


const Graph = dynamic(() => import('./components/Graph'), {
    loading: () => <p>loader</p>
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



import { Noto_Serif_Devanagari } from 'next/font/google';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfc1best")

    }, [])


    return (
        <div className="bg-zinc-100 ">
            <section className={`w-full max-w-2xl mx-auto bg-zinc-900 text-xl sm:text-2xl text-white sm:text-left text-justify ${noto.className}`}>

                <Header />

                <Sex_issue />

                <Graph />

                <Form />


                <CustomerReview />

                <Footer />

                <FooterP />

            </section>
        </div>
    )
}

export default page