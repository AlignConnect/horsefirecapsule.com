import Image from "next/image";

import { Kalam, Noto_Serif_Devanagari, Oswald } from "next/font/google";

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

const kalam = Kalam({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700']
});

const Section2 = () => {
  return (

    <section className={noto.className}>
      <section className="relative  bg-pink-50 py-7">
        <div className="max-w-5xl m-auto px-3 ">
          <h1
            className={`${oswald.className} text-center bg-gradient-to-t from-red-400
           to-red-800 text-transparent bg-clip-text  pb-2 font-oswald font-bold text-5xl md:text-7xl md:mt-0 mt-12`}
          >
            What Horse Fire Does ?
          </h1>

          <p className=" md:w-3/4 m-auto  text-xl font-medium indent-10 py-5">
            Horse Fire Capsule भारत का श्रेष्ठ सेक्सुअल वेलनेस प्रोडक्ट है। भारतीय
            पुरुष इसके इस्तेमाल से लिंग आकार, सेक्स स्टैमिना और सेक्स अवधि बढ़ाकर
            यौन अनुभव बेहतर बना रहे है। <span> Horse Fire Capsule</span> कस्टमर
            सटिस्फैक्शन पर कार्य करता है। इसके निर्माण पश्चात तमाम लैब रीसर्च इसे
            सिद्ध करते है और पुरुष इसके लाभ से संतुष्ट होते है।
          </p>

          <h2 className={`${kalam.className} text-5xl font-bold text-center py-5 leading-[4rem] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent`}>
            मजबूत लिंग, लम्बी अवधि, ज्यादा ऑर्गेज़्म
          </h2>

          <div className="flex items-center justify-center">
            <Image
              src="/main/hf069x_images/flasid.webp"
              width={0}
              height={0}
              alt="yuuy"
              className="w-60 -scale-x-100 flex-none"
            />
            <p className="md:text-7xl text-3xl font-bold  text-red-500 ">
              Before
            </p>
          </div>
          <div className="w-full h-[1px] bg-red-200 my-4 "> </div>
          <div className="flex items-center justify-center">
            <p className="md:text-7xl text-3xl font-bold text-red-500 ">After</p>
            <Image
              src="/main/hf069x_images/erect.webp"
              width={0}
              height={0}
              alt="df"
              className="md:w-1/2 w-[270px] -scale-x-100"
            />
          </div>
        </div>
        <div className="absolute md:w-96 h-96 top-20 m-auto inset-x-0 bg-rose-700 blur-[6rem] opacity-25"></div>
        <div className="absolute md:w-96 h-96 top-1/2 inset-x-20 m-auto bg-violet-500 blur-[6rem] opacity-25"></div>
      </section>
    </section>

  );
};

export default Section2;
