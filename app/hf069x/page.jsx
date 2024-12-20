"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
// import Section3 from "./components/Section3";
// import Section2 from "./components/Section2";
// import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";

// import Section1 from "./components/Section1";
// import Section6 from "./components/Section6";
// import Section7_review from "./components/Section7_review";

const DynamicSection1 = dynamic(() => import("./components/Section1"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection2 = dynamic(() => import("./components/Section2"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection3 = dynamic(() => import("./components/Section3"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection4 = dynamic(() => import("./components/Section4"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection5 = dynamic(() => import("./components/Section5"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection6 = dynamic(() => import("./components/Section6"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection7 = dynamic(() => import("./components/CustomerReview"), {
    loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>asd</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>asd</p>
});

const Orderxc = dynamic(() => import("./components/FlipAmazon"), {
    loading: () => <p>asd</p>
});

export default function Home() {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hf069x");

    }, [])


    return (
        <main className=" bg-gray-100 w-full overflow-hidden">
            <DynamicSection1 />

            {/* <Orderxc /> */}

            <DynamicSection2 />

            <Orderxc />

            <DynamicSection3 />

            <Orderxc />

            <DynamicSection4 />

            <Orderxc />

            <DynamicSection5 />
            <div className="relative bg-line md:bg-center bg-bottom bg-cover">
                <div className="md:max-w-5xl m-auto flex flex-col md:flex-row gap-y-6 justify-between text-red-700 uppercase items-center py-10">
                    <div className="flex flex-col text-center text-2xl  font-medium font-poppin">
                        <span className="text-3xl font-black text-zinc-900">20+ lakhs</span>
                        <span className="font-semibold">Happy customer</span>
                    </div>
                    <div className="flex flex-col text-center text-2xl font-medium font-poppin">
                        <span className="text-3xl font-black text-zinc-900">10+ years</span>
                        <span className="font-semibold">Experiance</span>
                    </div>
                    <div className="flex flex-col text-center text-2xl font-medium font-poppin">
                        <span className="text-3xl font-black text-zinc-900">100% Positive</span>
                        <span className="font-semibold">Result</span>
                    </div>
                </div>
            </div>
            <DynamicSection6 />


            <DynamicSection7 />

            <Footer />
            <FooterPopup />
        </main>
    );
}
