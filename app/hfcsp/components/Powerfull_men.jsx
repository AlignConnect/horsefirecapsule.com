import dynamic from 'next/dynamic'

const Ama = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'), {
    loading: () => <p>loader</p>
})

function Powerfull_men() {

    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center' key={key}>
                <img src={"/main/hfc21_images/right_icon.png"} className='w-7' alt='Benifits_images' />
                <div className='fontNoto pt-2 md:text-2xl text-xl font-semibold px-2  text-white'>{e.benefit_title}</div>
            </div >
        })
    }

    return (
        <section>


            <div className="bg-black py-3 ">
                <Ama />

                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 items-center">

                        <div className="col-span-6 md:order-none order-2">
                            <img
                                className='w-80 md:w-full pt-3 mx-auto'
                                src={"/main/hfc21_images/second_couple.webp"}
                                alt='second_couple'
                                fetchPriority='high'
                            />
                        </div>
                        <div className="col-span-6 px-3">
                            <p className='fontNoto text-[1.2rem] py-1 text-justify text-white italic'><span className="fontPoppins">Horsefire Capsule</span>  भारत का श्रेष्ठ सेक्सुअल वेलनेस प्रोडक्ट है। भारतीय पुरुष इसके इस्तेमाल से लिंग आकार, सेक्स स्टैमिना और सेक्स अवधि बढ़ाकर यौन अनुभव बेहतर बना रहे है।</p>
                            <div className="fontNoto text-4xl md:text-4xl text-yellow-400 font-extrabold py-2">
                                एक असली पावरफुल मर्द की पहचान
                            </div>

                            <div className=''>
                                {
                                    Benefits([
                                        {
                                            benefit_title: "लम्बा-मोटा और सुडौल लिंग"
                                        },
                                        {
                                            benefit_title: "लम्बी से अवधि, पूर्ण उत्तेजित"
                                        },
                                        {
                                            benefit_title: "घंटो सेक्स करने की काबिलियत"
                                        },
                                        {
                                            benefit_title: "दमदार स्टैमिना और भरपूर जोश"
                                        },
                                        {
                                            benefit_title: "स्खलन बाद पुनः तुरंत लिंग इरेक्शन"
                                        }
                                    ])
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <Ama />
                </div>

            </div>
        </section>
    )
}

export default Powerfull_men