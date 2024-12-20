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




const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfc1best")

    }, [])


    return (
        <section>

            <Header />

            <Sex_issue />

            <Graph />

            <Form />


            <CustomerReview />

            <Footer />

            <FooterP />

        </section>
    )
}

export default page