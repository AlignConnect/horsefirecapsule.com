import React from "react";
import Image from "next/image";

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Section3 = () => {
  return (

    <section className={noto.className}>
      <section className="relative z-20 bg-yellow-50 py-12">
        <div className="max-w-5xl m-auto px-3">
          <h1
            className="text-center bg-gradient-to-t from-red-400
           to-red-800 text-transparent bg-clip-text  pb-2 font-oswald font-bold text-5xl md:text-7xl"
          >
            How It Works
          </h1>
          <div className="mt-7">
            <div className="w-3/4  border-2 border-yellow-400 font-bold text-2xl flex md:flex-row flex-col  items-center bg-yellow-400/40 rounded-lg backdrop-blur-xl p-3 ">
              <div className="w-24  md:w-48">
                <Image
                  src="/main/hf069x_images/steroids.png"
                  alt="sdsd"
                  width={0}
                  height={0}
                  className="w-[100%] h-[100%] shrink-0"
                  loading="lazy"
                />
              </div>
              <p className="ml-5">
                प्रत्येक कैप्सूल शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड
                का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है।
              </p>
            </div>
          </div>
          <div className="flex justify-end ">
            <div className=" w-3/4 mt-5 border-2 border-yellow-400  font-bold text-2xl flex  flex-col-reverse md:flex-row  items-center bg-yellow-400/40 rounded-lg backdrop-blur-xl p-3">
              <p className="ml-5">
                लिंग की तंग चमड़ी खुलती है और नसों में रक्त का तेजी से बहाव होता
                है, फलस्वरूप लिंग के कड़कपन में सुधार होता है।
              </p>
              <div className="w-24  md:w-48">
                <Image
                  src="/main/hf069x_images/penis.png"
                  alt="dffdfsdf"
                  width={0}
                  height={0}
                  className="w-[100%] h-[100%] shrink-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="">
              <div className=" w-3/4 mt-5 border-2 border-yellow-400  font-bold text-2xl flex md:flex-row flex-col  items-center bg-yellow-400/40 rounded-lg backdrop-blur-xl p-3 ">
                <div className="w-24  md:w-48">
                  <Image
                    src="/main/hf069x_images/neuron.png"
                    alt="ghggh"
                    width={0}
                    height={0}
                    className="w-[100%] h-[100%]  shrink-0"
                    loading="lazy"
                  />
                </div>
                <p className="ml-5">
                  इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है,
                  और शरीर को कमजोरी मुक्त कर देते है।
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end ">
            <div className=" w-3/4 border-2 border-yellow-400 flex-col-reverse mt-6  font-bold text-2xl flex md:flex-row   items-center  bg-yellow-400/40 rounded-lg backdrop-blur-xl  p-3">
              <p className="ml-5">
                जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है पुरुष बिना
                थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।
              </p>
              <div className="w-20  md:w-28">
                <Image
                  src="/main/hf069x_images/flash.png"
                  alt="erree"
                  width={0}
                  height={0}
                  className="w-[100%] h-[100%]  shrink-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute -z-20 bg-red-400 w-80  h-80 blur-[5rem] top-1/2 m-auto inset-x-0 opacity-25  "></div> */}
        <div className="absolute w-[5px] -z-10  left-1/2 h-[90%] md:h-[80%] top-28  md:top-36 bg-yellow-500">
        </div>
      </section>
    </section>

  );
};

export default Section3;
