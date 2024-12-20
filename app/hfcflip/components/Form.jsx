"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>Load</p>
})

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error));
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefirecapsule.com/HFCFLIP")
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFB ?? "Horsefirecapsule.com/hfcflip");

            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_hfcadu = searchParams.get("hfcadu");
            const searchParamss_hfcmybid = searchParams.get("hfcmybid");


            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_hfcadu && formdata.append("hfcadu", searchParamss_hfcadu);
            searchParamss_hfcmybid && formdata.append("hfcmybid", searchParamss_hfcmybid);

              // tfhfc
              const searchParamss_tfhfc = searchParams.get("tfhfc");
              searchParamss_tfhfc && formdata.append('tfhfc', searchParamss_tfhfc);

            try {
                const form = await fetch(`https://horsefirecapsule.com/submitdata.php`, { body: formdata, method: "POST" });
                const data = await form.json();

                // const blogWebId = data.blogWebId ?? null;

                if (data.ok) {
                    setLoading(false);

                    openPopup();


                    // let destination = decodeURI(data.destination);
                    // let name = destination.split("?name=")[1].split("&")[0];
                    // let phone = destination.split("&phone=")[1].split("&")[0];
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`;
                }
                setLoading(false);
                openPopup();

                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false);
                openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }
    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <Load />
            }

            <AmaFlipDialog  type="exo"/>

            <div
                style={{
                    backgroundImage: `url(/main/hfc21_images/form_background.webp)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto py-6 md:py-14 px-3">

                    <h1 className="fontSumana text-[1.3rem] md:text-[2.4rem] text-yellow-400 text-center font-bold mb-6 md:mb-9 ">बस पहला कदम बढ़ाए एक्सपर्ट से संपर्क करें बाकि सब कुछ आसान हो जायेगा </h1>
                    <div className="grid grid-cols-12 m-0 gap-1 items-center">
                        <div className="col-span-12 md:col-span-6 text-white text-center">
                            <img
                                className='w-80 md:w-3/4 mx-auto'
                                src="/main/hfc21_images/certificate.webp"
                                alt='certificate'
                            />
                            <h1 className="text-2xl fontSumana font-extrabold md:text-4xl py-4 md:py-8"><span className="text-red-600">कॉल पर विशेषज्ञ डॉक्टरों से</span><br /> मुफ्त सलाह के लिए फॉर्म भरें !</h1>
                            <div className="fontPoppins text-xl  font-bold  text-red-600 bg-white px-3 py-0 rounded-full inline-block my-2">
                                <MdOutlineSupportAgent className="inline text-5xl  " /> We Are Available Now
                            </div>

                        </div>
                        <div className="col-span-12 md:col-span-6" id='form'>
                            <div className=" " id='formcallhide'>
                                <div className="mx-auto font-poppin  bg-white px-4 py-6 border rounded-lg ">
                                    <div>
                                        <div className="text-center mb-12">
                                            <h1 className="text-center text-4xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                        </div>
                                        <form className="space-y-3">
                                            {CustomerDataValue?.map((data, key) => {
                                                return <div className="flex flex-col my-6" key={key}>
                                                    <label className="font-semibold text-sm py-1">{data.label}</label>
                                                    <div className="relative">
                                                        <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                        {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                    </div>
                                                </div>
                                            })}
                                            <div className="flex justify-center items-center pt-4 ">
                                                <button onClick={handleFormSubmit} type="button" className="bg-red-800 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-xl  text-white">
                                                    SUBMIT
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;
