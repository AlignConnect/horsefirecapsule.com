"use client";
import React, { useEffect } from 'react'
import './components/Home.css'
import dynamic from 'next/dynamic';



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header loading</p>
});


const Content = dynamic(() => import('./components/content'), {
    loading: () => <p> loading</p>
});

const No_one = dynamic(() => import('./components/No_one'), {
    loading: () => <p> loading</p>
});


const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p> loading</p>
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

        localStorage.setItem("PATH_KEY", "/hfcstory1")

    }, [])

    return (
        <section className=''>


            <Header />

            <Content />

            <No_one />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterP />

        </section>
    )
}

export default page