"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        let checkcolumn = localStorage.getItem('PATH_KEY');

        switch (checkcolumn) {

            case "/":
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
            case "/hfh":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFH,
                    key: process.env.NEXT_APP_API_KEY_HFH
                });

            case "/hft":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT,
                    key: process.env.NEXT_APP_API_KEY_HFT
                });

            case "/hfo":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFO,
                    key: process.env.NEXT_APP_API_KEY_HFO
                });

            case "/hxt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HXT,
                    key: process.env.NEXT_APP_API_KEY_HXT
                });

            case "/hfu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFU,
                    key: process.env.NEXT_APP_API_KEY_HFU
                });



            case "/hfd":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFD,
                    key: process.env.NEXT_APP_API_KEY_HFD
                });


            case "/hflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFLIP
                });

            case "/hfq":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFQ,
                    key: process.env.NEXT_APP_API_KEY_HFQ
                });

            case "/hfkrt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKRT,
                    key: process.env.NEXT_APP_API_KEY_HFKRT
                });


            case "/hfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKT,
                    key: process.env.NEXT_APP_API_KEY_HFKT
                });

            case "/hfkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKART,
                    key: process.env.NEXT_APP_API_KEY_HFKART
                });

            case "/hkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HKART,
                    key: process.env.NEXT_APP_API_KEY_HKART
                });

            case "/hfp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFP,
                    key: process.env.NEXT_APP_API_KEY_HFP
                });

            case "/hfb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFB,
                    key: process.env.NEXT_APP_API_KEY_HFB
                });

            case "/bhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHF,
                    key: process.env.NEXT_APP_API_KEY_BHF
                });

            case "/bhfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHFKT,
                    key: process.env.NEXT_APP_API_KEY_BHFKT
                });


            case "/hfs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFS,
                    key: process.env.NEXT_APP_API_KEY_HFS
                });


            case "/ahf":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHF,
                    key: process.env.NEXT_APP_API_KEY_AHF
                });

            case "/ahfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHFKT,
                    key: process.env.NEXT_APP_API_KEY_AHFKT
                });

            case "/hfe":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFE,
                    key: process.env.NEXT_APP_API_KEY_HFE
                });

            case "/hfk":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFK,
                    key: process.env.NEXT_APP_API_KEY_HFK
                });

            case "/hfm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFM,
                    key: process.env.NEXT_APP_API_KEY_HFM
                });

            case "/cjhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_CJHF,
                    key: process.env.NEXT_APP_API_KEY_CJHF
                });

            // HF01A

            case "/hf01a":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF01A,
                    key: process.env.NEXT_APP_API_KEY_HF01A
                });

            // HF069X

            case "/hf069x":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF069X,
                    key: process.env.NEXT_APP_API_KEY_HF069X
                });

            // HFCFLIP

            case "/hfcflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFCFLIP
                });

            case "/hfcalpha":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCALPHA,
                    key: process.env.NEXT_APP_API_KEY_HFCALPHA
                });

            case "/hfcbeta":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCBETA,
                    key: process.env.NEXT_APP_API_KEY_HFCBETA
                });


            case "/hf71c":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF71C,
                    key: process.env.NEXT_APP_API_KEY_HF71C,
                })

            case "/hf99c":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99C,
                    key: process.env.NEXT_APP_API_KEY_HF99C,
                })

            case "/hfcvt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCVT,
                    key: process.env.NEXT_APP_API_KEY_HFCVT,
                })

            case "/hfcso":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCSO,
                    key: process.env.NEXT_APP_API_KEY_HFCSO,
                })

            case "/hfcsp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCSP,
                    key: process.env.NEXT_APP_API_KEY_HFCSP,
                })

            case "/hfcopt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCOPT,
                    key: process.env.NEXT_APP_API_KEY_HFCOPT,
                })

            case "/hf99n":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99N,
                    key: process.env.NEXT_APP_API_KEY_HF99N,
                })

            case "/hf69h":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF69H,
                    key: process.env.NEXT_APP_API_KEY_HF69H,
                })

            case "/hfc69f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFC69F,
                    key: process.env.NEXT_APP_API_KEY_HFC69F,
                })

            case "/hfc01fdoc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFC01FDOC,
                    key: process.env.NEXT_APP_API_KEY_HFC01FDOC,
                })



            case "/hfchcp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCHCP,
                    key: process.env.NEXT_APP_API_KEY_HFCHCP,
                })

            case "/hfccat":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCCAT,
                    key: process.env.NEXT_APP_API_KEY_HFCCAT,
                })

            case "/hfcwb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCWB,
                    key: process.env.NEXT_APP_API_KEY_HFCWB,
                })

            case "/hfcpile":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCPILE,
                    key: process.env.NEXT_APP_API_KEY_HFCPILE,
                })

            case "/hfclum":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCLUM,
                    key: process.env.NEXT_APP_API_KEY_HFCLUM,
                })

            case "/hfcopsm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCOPSM,
                    key: process.env.NEXT_APP_API_KEY_HFCOPSM,
                })

            case "/hfcgwhiz":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCGWHIZ,
                    key: process.env.NEXT_APP_API_KEY_HFCGWHIZ,
                })

            case "/hfcnwhiz":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCNWHIZ,
                    key: process.env.NEXT_APP_API_KEY_HFCNWHIZ,
                })

            case "/hfncw":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFNCW,
                    key: process.env.NEXT_APP_API_KEY_HFNCW
                });

            case "/hfncf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFNCF,
                    key: process.env.NEXT_APP_API_KEY_HFNCF
                });

            case "/hfc99flip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFC99FLIP,
                    key: process.env.NEXT_APP_API_KEY_HFC99FLIP
                });

            case "/hfcstory1":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCSTORY1,
                    key: process.env.NEXT_APP_API_KEY_HFCSTORY1
                });

            case "/hfcx1f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCX1F,
                    key: process.env.NEXT_APP_API_KEY_HFCX1F
                });

            case "/hfc1best":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFC1BEST,
                    key: process.env.NEXT_APP_API_KEY_HFC1BEST
                });


            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>



            {callDetail.callStatus ? <BottomPopupCall /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;