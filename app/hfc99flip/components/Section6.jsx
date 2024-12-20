import React from "react";
import PageForm from "./PageForm";

import { Noto_Serif_Devanagari, Oswald } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700']
});

const Section6 = () => {
  return (

    <section className={noto.className}>
      <section className="bg-web22 bg-cover bg-center py-10">
        <div className="max-w-4xl m-auto px-3">
          <h1 className="text-5xl font-bold text-center py-5 leading-[3rem] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            एक्सपर्ट्स से मुफ्त परामर्श पाने के लिए फॉर्म भरें !
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className={`${oswald.className} text-5xl font-bold`}>
              <img src="/main/hf069x_images/certificate.png" alt="ddf" loading="lazy" />
              <div className="mt-6">
                <h1 className="">GET BIGGER</h1>
                <h1 className="md:text-9xl text-8xl text-red-700">LONGER</h1>
                <h1 className="md:text-9xl text-8xl text-red-700">HARDER</h1>
                <h1>ERECTION</h1>
              </div>
            </div>
            <PageForm />
          </div>
        </div>
      </section>
    </section>

  );
};

export default Section6;
