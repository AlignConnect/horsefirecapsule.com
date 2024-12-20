import React from 'react'

const Prod = () => {

  const ListUB = [
    {
      image: '/main/hfcgwhiz_images/img20.webp',
      para: 'भारत का #1 सेक्स वर्धक विक्रेता'
    },
    {
      image: '/main/hfcgwhiz_images/img16.webp',
      para: '10 लाख से ज्यादा संतुष्ट ग्राहक'
    },
    {
      image: '/main/hfcgwhiz_images/img2.webp',
      para: 'यौनवर्धक श्रेणी में फ्लिपकार्ट पर #1 विक्रेता'
    },
  ]
  return (
    <div>
      <div className="pb-5 sm:pb-10  sm:px-10  text-[1.1rem] sm:text-xl  grid justify-center">
        <div className="">
          <div className="relative inline-block mt-5 fontPoppins mx-3" >
            <h1 className=" z-10 relative font-bold text-4xl sm:text-6xl leading-none uppercase">Proud to be</h1>
            <div className="absolute bottom-[0.3rem] sm:bottom-2  bg-yellow-400 h-1/3 left-[1%] w-[98%]"></div>
          </div>
        </div>

        <div className="text-white space-y-4 text-[5.05vw] sm:text-2xl font-semibold my-5 ps-2 flex flex-col">
          {ListUB.map((e, key) => {
            return <div className="flex flex-grow  items-center" key={key}>
              <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className="w-11 sm:w-14 rounded-full p-1 sm:p-2 border-white border-2 bg-sky-500 relative z-10" />
              <p className="bg-sky-500 pt-3 sm:ps-8 ps-6 pe-2 sm:pe-5 rounded-tr-lg -left-5 relative z-0">{e.para}</p>
            </div>
          })}
        </div>

        <div className="bg-[#e05400] pt-5 pb-1 sm:px-5 px-3 text-justify text-white rounded-xl mx-3">
          हॉर्सफायर कैप्सूल वे पुरुष अवश्य आजमाए जिनके लिंग में ढीलापन है, या फिर फर्स्ट राउंड सेक्स के बाद लिंग में इरेक्शन नहीं मिलती है। अगर कोई पुरुष 2  मिनट या उससे भी कम समय में स्खलित हो जाता है यानि वीर्य डिस्चार्ज हो जाता है तो मात्र 30 दिनों तक यानी एक पैक नियमित गुनगने दूध के साथ सेवन करके अंतर खुद देख लें। अगला पैक आप खुद आर्डर करेंगे साथ ही 3-4 महीने नियमित सेवन करने पर आपकी यौन कमजोरी जड़ से खत्म हो जाएगी और आपको किसी भी यौनवर्धक दवा की जरुरत नहीं पड़ेगी।
        </div>
      </div>
    </div>
  )
}

export default Prod