import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section5 = () => {
  return (

    <section className={noto.className}>
      <section className="relative bg-slate-100 py-7  px-3">
        <div className="max-w-5xl m-auto">
          <h1
            className="text-center bg-gradient-to-t from-red-400
           to-red-800 text-transparent bg-clip-text py-10 pb-2  font-bold text-5xl md:text-7xl md:mt-0 "
          >
            Horse Fire- हर कैप्सूल में दिलाएं अद्भुत अनुभव
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/main/hf069x_images/couple3a.png" alt="tyty" width={600} loading="lazy" />
            <h1 className="text-3xl font-bold  leading-[3rem] text-center md:text-start md:indent-20 text-rose-600 border-white md:p-6 p-2 rounded-xl backdrop-blur-2xl ">
              अगर आप शीघ्रपतन, लिंग में ढ़ीलापन, छोटा-टेढ़ा लिंग शरीर में सेक्स
              स्टैमिना की कमी या किसी भी यौन कमजोरी से परेशन है तो आपको एक बार
              Horse Fire कैप्सूल अवश्य आजमाना चाहिए !
            </h1>
          </div>
        </div>

        <div className="absolute bg-blue-400 w-80  h-80 top-0  right-3 blur-[5rem] opacity-20 "></div>
      </section>
    </section>

  );
};

export default Section5;
