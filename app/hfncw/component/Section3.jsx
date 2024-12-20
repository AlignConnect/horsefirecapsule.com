import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import './my.css'
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Section3 = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto p-3">

                <div className="flex justify-center items-center gap-3 my-3 font-bold">
                    <img src="/main/hf91w_images/p2copy.webp" alt="asdasd" loading="lazy" width={35} />
                    <p className="flex justify-center items-center text-xl md:text-2xl pt-2">
                        हॉर्सफायर के  <span className="text-[#ff0000]"> &nbsp;संतुष्ट ग्राहक की माने</span>
                    </p>
                    <img src="/main/hf91w_images/pcopy.webp" alt="asdasd" loading="lazy" width={35} />
                </div>

                <div className="grid grid-cols-12 mx-auto gap-3">


                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[13px] md:text-[17px] font-bold">SURESH SINGH</p>
                            <div>
                                <img src="/main/hf91w_images/r2.webp" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#02c4ff] w-full min-h-[113px] flex items-center justify-center">
                            <p className="text-center p-1 font-bold text-[13px] md:text-[16px] italic">
                                It's really amazing product for sex stamina and penis enlargement.
                            </p>
                        </div>
                    </div>



                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[13px] md:text-[17px] font-bold">AJAY GARG</p>
                            <div>
                                <img src="/main/hf91w_images/r1.webp" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#02c4ff] w-full min-h-[113px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Maine sex timing badhaane ka isase behatar product aaj tak nhi dekha..just buy this!

                            </p>
                        </div>
                    </div>




                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[13px] md:text-[17px] font-bold">SADIK KHAN</p>
                            <div>
                                <img src="/main/hf91w_images/r3.webp" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#02c4ff] w-full min-h-[50px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Kash mujhe iske bare me pahle pata chala hta to mere bahut sare paise bach jate jo dusare product par kharch hua.
                            </p>
                        </div>
                    </div>




                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[13px] md:text-[17px] font-bold">TOSIF ANSARI</p>
                            <div>
                                <img src="/main/hf91w_images/r4.webp" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#02c4ff] w-full min-h-[130px]  md:min-h-[110px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Best medicine in market for sex stamina and size...kamjor purush ise jarur try kren.
                            </p>
                        </div>
                    </div>


                </div>



                <section className="text-center bg-[#d4d0cd] mt-5 px-5">

                    <section className="mt-8 mb-5 bg-[#7f0709] inline-flex rounded-[50px]">
                        <p className={`${poppin.className} data-grendiant-text px-4 font-black text-2xl bg-[#7f0709]`}>PROUD TO BE</p>
                    </section>



                    <div className="md:w-[75%] ms-auto">
                        <div className="flex items-center gap-2 my-5">

                            <div>
                                <img src="/main/hf91w_images/b1.webp" alt="ertyuiop" className="w-[30px]" />
                            </div>
                            <p className="text-lg font-bold">
                                भारत का #1 सेक्स वर्धक विक्रेता
                            </p>

                        </div>
                        <div className="flex items-center gap-2 my-5">

                            <div>
                                <img src="/main/hf91w_images/b2.webp" alt="ertyuiop" className="w-[30px]" />
                            </div>

                            <p className="text-lg font-bold">
                                10 लाख से ज्यादा संतुष्ट ग्राहक
                            </p>

                        </div>
                        <div className="flex items-unset md:items-center gap-2 mt-5">

                            <div>
                                <img src="/main/hf91w_images/b3.webp" alt="ertyuiop" className="w-[35px] md:w-[30px]" />
                            </div>
                            <p className="text-lg font-bold text-start">
                                यौनवर्धक श्रेणी में फ्लिपकार्ट पर #1 ट्रेंडिंग विक्रेता
                            </p>

                        </div>

                    </div>
                </section>
                <div className="font-semibold bg-[#d4d0cd] px-4 py-5 text-center">
                    <p>
                        हॉर्सफायर कैप्सूल वे पुरुष अवश्य आजमाए जिनके लिंग में ढीलापन है, या फिर फर्स्ट राउंड सेक्स के बाद लिंग में इरेक्शन नहीं मिलती है। अगर कोई पुरुष 2  मिनट या उससे भी कम समय में स्खलित हो जाता है यानि वीर्य डिस्चार्ज हो जाता है तो मात्र 30 दिनों तक यानी एक पैक नियमित गुनगने दूध के साथ सेवन करके अंतर खुद देख लें। अगला पैक आप खुद आर्डर करेंगे साथ ही 3-4 महीने नियमित सेवन करने पर आपकी यौन कमजोरी जड़ से खत्म हो जाएगी और आपको किसी भी यौनवर्धक दवा की जरुरत नहीं पड़ेगी।
                    </p>
                    <h1 className="pt-4 border-b-4 inline-flex border-[#680e11] text-2xl text-center">अंतर साफ है, चुनना बाकी है !</h1>
                </div>
            </section>
        </section>
    )
}

export default Section3