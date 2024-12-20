import axios from "axios"
import Joi from "joi"
export class CheckoutFile {

    constructor() { }


    static getCheckOutData = async ({ APP_API_URL, get_next_key, get_next_url }) => {


        const url = process.env.NEXT_APP_API_URL + 'product/fetch_with_api_key?api_key=' + get_next_key


        const res = await fetch(url, {
            headers: {
                web_site_url: get_next_url
            }
        })

        if (!res.ok) {
            throw new Error("Interal Server Error Please Try out After some Time")
        }

        return await res.json()


    }



    //this is for joi validation

    static joiValidator = (formdata) => {
        const schema = Joi.object({
            name: Joi.string().trim().required(),
            phone: Joi.string().regex(/^[6-9]\d{9}$/).required().messages({ 'string.regex': 'Please Fill Correct Value' }),
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            pincode: Joi.number().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            address: Joi.string()
        })

        const { error, value } = schema.validate(formdata, {
            allowUnknown: false,
            abortEarly: true,
            stripUnknown: false
        })

        if (error) {
            throw error.message
        }
        return value
    }


    // this is for generate pincode ,city and state

    static PincodeValidation = async (pincodevalue) => {

        const url = "https://api.postalpincode.in/pincode/" + Number(pincodevalue)
        const pinCode = await fetch(url).then((v) => v).then(response => response.json()).catch(err => err)
        // console.log(pinCode[0].PostOffice[0].State)
        return {
            pincode: pincodevalue,
            state: pinCode[0].PostOffice[0].State,
            city: pinCode[0].PostOffice[0].District
        }
    }





    //this is for create order in brahmikalp 




    static createOrder = async (formdata) => {
        console.log(formdata)
        const orderData = {

            customer_name: formdata.name,
            customer_phone: String(formdata.phone),
            customer_email: formdata.email,
            customer_address: formdata.address,
            pincode: String(formdata.pincode),
            state: formdata.state,
            city: formdata.city,
            postOffice: null,
            product: formdata.id,
            product_name: formdata.product_name,
            price: formdata.price,
            discount: formdata.discount,
            totalPrice: formdata.price - formdata.discount,
            payment_mode: formdata.online ? "online" : "cod",
            form_id: null
        }


        try {

            const { get_next_url, get_next_key } = handleCheckApiKey();

            const url = process.env.NEXT_APP_API_URL + 'order/create?api_key=' + get_next_key;

            const response = await axios.post(url, orderData, {
                headers: {
                    "Content-Type": "application/json",
                    web_site_url: get_next_url
                }
            })

            console.log(response)
            return response

        } catch (error) {
            throw error.message
        }
    }


    static PaymentInitial = (paymentdata, setalertVerify) => {

        console.log(paymentdata)

        const options = {

            key: paymentdata.razorpay_key_id,
            amount: paymentdata.amount,
            name: paymentdata.product_name,
            description: "X - Transaction",
            image: window.location.origin + paymentdata.img,
            order_id: paymentdata.id,
            notes: { "merchant_order_id": "SGI-" + paymentdata.OrderId },
            prefill: {
                name: paymentdata.customer_name,
                email: paymentdata.customer_email,
                contact: paymentdata.customer_phone
            }, handler: async (response) => {

                response["receipt"] = paymentdata.receipt

                try {
                    const { get_next_url, get_next_key } = handleCheckApiKey()

                    const { data } = await axios.post(`${process.env.NEXT_APP_API_URL}order/verify?api_key=${get_next_key}`, response, { headers: { "web_site_url": get_next_url } })

                    if (data.message === "Payment verified successfully") {

                        //  setalertVerify((e) => ({ open: true, message: "Payment Success" }))
                        return alert("PAYMENT SUCCESS")
                    } else {
                        // return setalertVerify((e) => ({ open: true, message: "Payment Failed" }))
                        return alert("PAYMENT FAILED")
                    }

                } catch (error) {
                    // return setalertVerify((e) => ({ open: true, message: "Something Went Wrong" }))
                    return alert("PAYMENT CATCH FAILED")
                }
            }, theme: {
                color: "#3399cc"
            }
        }

        const rzp1 = new window.Razorpay(options);

        rzp1.on('payment.failed', function (response) {
            options.handler(response)
        });
        rzp1.open()
    }



}



//this function used to checkapi before the order create

export const handleCheckApiKey = () => {

    let get_next_url = "";
    let get_next_key = "";

    const apicheck = localStorage.getItem("PATH_KEY");

    console.log(apicheck)

    if (!apicheck) {
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
    } else {

        switch (apicheck) {
            case "/":
                get_next_url = process.env.NEXT_APP_URL;
                get_next_key = process.env.NEXT_APP_API_KEY;
                break;

            case "/hfo":
                get_next_url = process.env.NEXT_APP_URL_HFO;
                get_next_key = process.env.NEXT_APP_API_KEY_HFO;
                break;

            case "/hfu":
                get_next_url = process.env.NEXT_APP_URL_HFU;
                get_next_key = process.env.NEXT_APP_API_KEY_HFU;
                break;

            case "/hfd":
                get_next_url = process.env.NEXT_APP_URL_HFD;
                get_next_key = process.env.NEXT_APP_API_KEY_HFD;
                break;

            case "/hxt":
                get_next_url = process.env.NEXT_APP_URL_HXT;
                get_next_key = process.env.NEXT_APP_API_KEY_HXT;
                break;


            case "/hft":
                get_next_url = process.env.NEXT_APP_URL_HFT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFT;
                break;

            case "/hfq":
                get_next_url = process.env.NEXT_APP_URL_HFQ;
                get_next_key = process.env.NEXT_APP_API_KEY_HFQ;
                break;


            case "/hfh":
                get_next_url = process.env.NEXT_APP_URL_HFH;
                get_next_key = process.env.NEXT_APP_API_KEY_HFH;
                break;


            case "/hflip":
                get_next_url = process.env.NEXT_APP_URL_HFLIP;
                get_next_key = process.env.NEXT_APP_API_KEY_HFLIP;
                break;

            case "/hfkt":
                get_next_url = process.env.NEXT_APP_URL_HFKT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFKT;
                break;

            case "/hfkrt":
                get_next_url = process.env.NEXT_APP_URL_HFKRT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFKRT;
                break;

            case "/hfkart":
                get_next_url = process.env.NEXT_APP_URL_HFKART;
                get_next_key = process.env.NEXT_APP_API_KEY_HFKART;
                break;

            case "/hkart":
                get_next_url = process.env.NEXT_APP_URL_HKART;
                get_next_key = process.env.NEXT_APP_API_KEY_HKART;
                break;

            case "/hfp":
                get_next_url = process.env.NEXT_APP_URL_HFP;
                get_next_key = process.env.NEXT_APP_API_KEY_HFP;
                break;

            case "/hfb":
                get_next_url = process.env.NEXT_APP_URL_HFB;
                get_next_key = process.env.NEXT_APP_API_KEY_HFB;
                break;

            case "/bhf":
                get_next_url = process.env.NEXT_APP_URL_BHF;
                get_next_key = process.env.NEXT_APP_API_KEY_BHF;
                break;

            case "/bhfkt":
                get_next_url = process.env.NEXT_APP_URL_BHFKT;
                get_next_key = process.env.NEXT_APP_API_KEY_BHFKT;
                break;


            case "/hfs":
                get_next_url = process.env.NEXT_APP_URL_HFS;
                get_next_key = process.env.NEXT_APP_API_KEY_HFS;
                break;

            case "/ahf":
                get_next_url = process.env.NEXT_APP_URL_AHF;
                get_next_key = process.env.NEXT_APP_API_KEY_AHF;
                break;

            case "/ahfkt":
                get_next_url = process.env.NEXT_APP_URL_AHFKT;
                get_next_key = process.env.NEXT_APP_API_KEY_AHFKT;
                break;

            case "/hfe":
                get_next_url = process.env.NEXT_APP_URL_HFE;
                get_next_key = process.env.NEXT_APP_API_KEY_HFE;
                break;

            case "/hfk":
                get_next_url = process.env.NEXT_APP_URL_HFK;
                get_next_key = process.env.NEXT_APP_API_KEY_HFK;
                break;

            case "/hfm":
                get_next_url = process.env.NEXT_APP_URL_HFM;
                get_next_key = process.env.NEXT_APP_API_KEY_HFM;
                break;

            case "/cjhf":
                get_next_url = process.env.NEXT_APP_URL_CJHF;
                get_next_key = process.env.NEXT_APP_API_KEY_CJHF;
                break;

            case "/hf01a":
                get_next_url = process.env.NEXT_APP_URL_HF01A;
                get_next_key = process.env.NEXT_APP_API_KEY_HF01A;
                break;

            // HF069X
            case "/hf069x":
                get_next_url = process.env.NEXT_APP_URL_HF069X;
                get_next_key = process.env.NEXT_APP_API_KEY_HF069X;
                break;

            // HFCFLIP

            case "/hf069x":
                get_next_url = process.env.NEXT_APP_URL_HFCFLIP;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCFLIP;
                break;

            case "/hfcalpha":
                get_next_url = process.env.NEXT_APP_URL_HFCALPHA;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCALPHA;
                break;

            case "/hfcbeta":
                get_next_url = process.env.NEXT_APP_URL_HFCBETA;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCBETA;
                break;



            case "/hf71c":
                get_next_url = process.env.NEXT_APP_URL_HF71C;
                get_next_key = process.env.NEXT_APP_API_KEY_HF71C;
                break;

            case "/hf99c":
                get_next_url = process.env.NEXT_APP_URL_HF99C;
                get_next_key = process.env.NEXT_APP_API_KEY_HF99C;
                break;

            case "/hfcvt":
                get_next_url = process.env.NEXT_APP_URL_HFCVT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCVT;
                break;

            case "/hfcso":
                get_next_url = process.env.NEXT_APP_URL_HFCSO;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCSO;
                break;

            case "/hfcsp":
                get_next_url = process.env.NEXT_APP_URL_HFCSP;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCSP;
                break;

            case "/hfcopt":
                get_next_url = process.env.NEXT_APP_URL_HFCOPT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCOPT;
                break;


            case "/hfchcp":
                get_next_url = process.env.NEXT_APP_URL_HFCHCP;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCHCP;
                break;

            case "/hfccat":
                get_next_url = process.env.NEXT_APP_URL_HFCCAT;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCCAT;
                break;

            case "/hfcwb":
                get_next_url = process.env.NEXT_APP_URL_HFCWB;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCWB;
                break;

            case "/hfcpile":
                get_next_url = process.env.NEXT_APP_URL_HFCPILE;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCPILE;
                break;

            case "/hfclum":
                get_next_url = process.env.NEXT_APP_URL_HFCLUM;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCLUM;
                break;

            case "/hfcopsm":
                get_next_url = process.env.NEXT_APP_URL_HFCOPSM;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCOPSM;
                break;

            case "/hfcgwhiz":
                get_next_url = process.env.NEXT_APP_URL_HFCGWHIZ;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCGWHIZ;
                break;

            case "/hfcnwhiz":
                get_next_url = process.env.NEXT_APP_URL_HFCNWHIZ;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCNWHIZ;
                break;

            case "/hfncw":
                get_next_url = process.env.NEXT_APP_URL_HFNCW;
                get_next_key = process.env.NEXT_APP_API_KEY_HFNCW;
                break;

            case "/hfncf":
                get_next_url = process.env.NEXT_APP_URL_HFNCF;
                get_next_key = process.env.NEXT_APP_API_KEY_HFNCF;
                break;


            case "/hfcstory1":
                get_next_url = process.env.NEXT_APP_URL_HFCSTORY1;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCSTORY1;
                break;

            case "/hfcx1f":
                get_next_url = process.env.NEXT_APP_URL_HFCX1F;
                get_next_key = process.env.NEXT_APP_API_KEY_HFCX1F;
                break;


            case "/hfc1best":
                get_next_url = process.env.NEXT_APP_URL_HFC1BEST;
                get_next_key = process.env.NEXT_APP_API_KEY_HFC1BEST;
                break;

            default:
                get_next_url = process.env.NEXT_APP_URL;
                get_next_key = process.env.NEXT_APP_API_KEY;
                break;
        }


    }

    return { get_next_url, get_next_key };

}