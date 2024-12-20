import React from "react";
// import Image from "next/image";
import JadibootiComp from "./JadibootiComp";
import { Kalam, Noto_Serif_Devanagari } from "next/font/google";
import dynamic from "next/dynamic";



const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const kalam = Kalam({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700']
});


const Section4 = () => {
  return (

    <section className={noto.className}>
      <section className="relative z-10 bg-pink-50">
        <div className="max-w-5xl m-auto py-10 px-3">
          <h1
            className="text-center bg-gradient-to-t from-red-400
           to-red-800 text-transparent bg-clip-text pt-10 pb-2  font-bold text-3xl md:text-7xl"
          >
            Horse Fire Capsule क्यों <br /> है इतना असरदार ?
          </h1>
          <h2 className={`${kalam.className} leading-[4rem] text-5xl font-black text-center py-8 bg-gradient-to-r from-emerald-900 to-green-600 bg-clip-text text-transparent`}>
            दुर्लभः पावरफुल जड़ीबूटियां
          </h2>
          <p className="text-center md:w-1/2 m-auto  text-xl">
            "अगर एक जड़ीबूटी से लाभ मिल सकता है तो संयोजित फॉर्मूले के इस्तेमाल से
            लाभ कितना बढ़ सकता है, आपकी उम्मीद से भी ज्यादा !"
          </p>

          <div className="flex justify-center items-center ">
            <JadibootiComp />
          </div>
        </div>

        <div className='max-w-xl mx-auto'>
          <YoutubeVideo />
        </div>




        <div className="absolute top-20 m-auto inset-x-0 -z-10 blur-[5rem] bg-rose-400 w-80 h-80 opacity-30"></div>

        <div className="absolute top-0 md:top-20 md:w-auto w-[200px]  -z-10 opacity-80">
          <img src="/main/hf069x_images/leaf.png" alt="yuy" className="-scale-x-100" loading="lazy" />
        </div>
        <div className="absolute bottom-0 md:w-auto w-[200px]  right-0 -z-10 opacity-80">
          <img src="/main/hf069x_images/leaf.png" alt="errew" loading="lazy" />
        </div>
      </section>
    </section>

  );
};

export default Section4;
