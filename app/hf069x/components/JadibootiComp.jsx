import Image from "next/image";

const JadibootiComp = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-center items-center mt-7 ">
        <div>
          <div className="relative w-[150px]">
            <Image
              src="/main/hf069x_images/shila.webp"
              width={0}
              height={0}
              className="w-full  shrink-0"
              loading="lazy"
              alt="sdsd"
            />
            <div className="absolute  -top-2  mix-blend-screen hue-rotate-90 ">
              <img src="/main/hf069x_images/fire3.webp" className="blur-[2px]" loading="lazy" alt="ddf" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left ml-3">
          <p className=" text-4xl font-black font-kalam">Shilajit</p>
          <p className="md:w-1/2 text-center md:text-left  mt-2 text-xl font-semibold  ">
            पुरुषों की प्रजनन क्षमता बढ़ती है साथ ही सेक्स के दौरान महसूस होने
            वाली कमजोरी दूर होती है. यह पुरुषों में टेस्टोस्टेरोन के लेवल को भी
            बढ़ाता है
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center mt-7 ">
        <div>
          <div className="relative  w-[150px]">
            <Image
              src="/main/hf069x_images/ashwa.webp"
              width={0}
              height={0}
              loading="lazy"
              alt="df"
              className="w-full shrink-0"
            />
            <div className="absolute  -top-4  mix-blend-screen hue-rotate-90 ">
              <img src="/main/hf069x_images/fire3.webp" className="blur-[2px]" width={200} loading="lazy" alt="dd" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left ml-3">
          <p className=" text-4xl font-black font-kalam">Ashwagandha</p>
          <p className="md:w-1/2 text-center md:text-left  mt-2 text-xl font-semibold  ">
            अश्वगंधा एनर्जी को बढ़ा सकती है। सामान्य स्वास्थ्य में सुधार और थकान
            को कम करके, यह हेल्दी सेक्स ड्राइव में मदद करती है।
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center mt-7 ">
        <div>
          <div className="relative w-[160px]">
            <Image
              src="/main/hf069x_images/gok.webp"
              width={0}
              height={0}
              loading="lazy"
              alt="dfd"
              className="w-full shrink-0"
            />
            <div className="absolute left-2 top-0  mix-blend-screen hue-rotate-90 ">
              <img src="/main/hf069x_images/fire3.webp" className="blur-[2px]" width={150} loading="lazy" alt="dfdd" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left ml-3">
          <p className=" text-4xl font-black font-kalam">Gokshura</p>
          <p className="md:w-1/2 text-center md:text-left  mt-2 text-xl font-semibold  ">
            गोखरू व्यक्ति को शारीरिक रूप से फिट रखने में मदद करता है। इससे शरीर
            मजबूत होता है, यौन शक्ति में इजाफा होता है और स्पर्म की गुणवत्ता
            बढ़ती है ।
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center mt-7 ">
        <div>
          <div className="relative w-[150px] ">
            <Image
              src="/main/hf069x_images/kesar.webp"
              width={0}
              height={0}
              loading="lazy"
              alt="df"
              className="w-full  shrink-0"
            />

            <div className="absolute  top-0  mix-blend-screen hue-rotate-90 ">
              <img src="/main/hf069x_images/fire3.webp" className="blur-[2px]" width={200} loading="lazy" alt="dfdf" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left ml-3">
          <p className=" text-4xl font-black font-kalam">Kesar</p>
          <p className="md:w-1/2 text-center md:text-left  mt-2 text-xl font-semibold  ">
            केसर आपकी कामेच्छा को बढ़ाने में मदद करता है। केसर में कामोत्तेजक
            (aphrodisiac) गुण हो सकते हैं। यह इरेक्टाइल डिसफंक्शन के लिए
            फायदेमंद है।
          </p>
        </div>
      </div>
      <p className="text-center text-2xl mt-4 md:text-3xl font-bold text-rose-700  ">
        ...और भी कई दुर्लभः जड़ीबूटियाँ मिश्रित है
      </p>

    </div>
  );
};

export default JadibootiComp;
