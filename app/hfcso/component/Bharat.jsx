import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Bharat = () => {
  return (
    <section className={`${noto.className} w-full md:w-[650px] mx-auto`}>

      <div className="bg-[#f3f4f6]">
        <h1 className="text-2xl p-4 font-bold"> <span className="text-[#ee3501]">इसलिए अपने भारत में बना Horse Fire Capsule</span>  <span className="text-green-700">अपने भारतीय भाइयों के लिए !</span> </h1>

        <h2 className="text-xl px-4 ">एक स्टडी के मुताबिक दुनियाभर के ज्यादातर लोग अपने लिंग की साइज को लेकर असंतुष्ट रहते हैं जिसका सबसे बड़ा हिस्सा भारतीय पुरुष है। </h2>


        <div className="w-full">
          <img src="/main/hfcbeta_images/penissize.webp" alt="asdasd" loading="lazy" className="w-[90%] mx-auto" />
        </div>

        <p className="text-xl p-4">
          अगर आपके लिंग में तनाव नहीं है या नसों में सिकुड़न है तो आपको लिंग बढ़ाने के शॉर्टकट तरीके छोड़कर स्थायी परिणाम देने वाला Horse Fire Capsule अपनाना पड़ेगा, क्योंकि लंबे समय तक अगर आपने ध्यान नहीं दिया तो आपके वैवाहिक जीवन पर बुरा असर पड़ सकता है।
        </p>

        <div className="w-full min-h-[250px]">
          <img src="/main/hfcbeta_images/box_pro.webp" alt="asdasd" loading="lazy" className="w-[80%] mx-auto py-4" />
        </div>
      </div>






      <section className="p-4 bg-black text-white">

        <h1 className="font-bold text-3xl text-center">हॉर्सफायर के नियमित <br /> इस्तेमाल का प्रभाव</h1>

        <div className="flex items-center justify-center gap-4 min-h-[350px] pb-[50px] sty-border">

          <div>
            <h1 className="text-xl">ढीला छोटा लिंग</h1>
            <div className="w-[140px] h-[180px] -rotate-[7deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/1a.webp" alt="dasasd" loading="lazy" className="h-full w-full" />
            </div>
          </div>

          <div className="transform translate-y-[30%]">
            <h1 className="text-xl">सख्त फौलादी लिंग</h1>
            <div className="w-[140px] h-[180px] rotate-[4deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/1b.webp" alt="dasasd" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 min-h-[350px] pb-[50px] sty-border">

          <div>
            <h1 className="text-xl">कम सेक्स अवधि </h1>
            <div className="w-[140px] h-[180px] -rotate-[7deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/2a.webp" alt="dasasd" loading="lazy" className="h-full w-full" />
            </div>
          </div>

          <div className="transform translate-y-[30%]">
            <h1 className="text-md">लगातार 45 मिनट सेक्स</h1>
            <div className="w-[140px] h-[180px] rotate-[4deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/2b.webp" alt="dasasd" loading="lazy" />
            </div>
          </div>

        </div>

        <div className="flex items-center justify-center gap-4 min-h-[350px] pb-[50px] sty-border">

          <div>
            <h1 className="text-xl"> कम ऊर्जा सुस्त शरीर  </h1>
            <div className="w-[140px] h-[180px] -rotate-[7deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/3a.webp" alt="dasasd" loading="lazy" className="h-full w-full" />
            </div>
          </div>

          <div className="transform translate-y-[30%]">
            <h1 className="text-xl">  जोशीला और एक्टिव </h1>
            <div className="w-[140px] h-[180px] rotate-[4deg] border border-white border-[14px]">
              <img src="/main/hfcbeta_images/3b.webp" alt="dasasd" loading="lazy" />
            </div>
          </div>
        </div>

      </section>





    </section>
  )
}

export default Bharat