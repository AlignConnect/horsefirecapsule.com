"use client";
import { CustomerDataValidator } from "@/app/commonUse/FormDataValidation";
import { useGlobalContext } from "@/app/statemanage/context";
import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
  loading: () => <p>loader</p>
});

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
  loading: () => <p>sfdfs</p>
});


const PageForm = () => {

  const searchParams = useSearchParams();

  const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();


  const handleChange = async (e) => {
    console.log(e.target.name, e.target.value)
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
      formdata.append("post", "Horsefirecapsule.com/HF069X")
      formdata.append("ip", check ? check : "");
      formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
      formdata.append("blog_url", process.env.NEXT_APP_URL_HFB ?? "Horsefirecapsule.com/hf069x");

      // let tracker = searchParams.get("krt-tracker");
      const searchParamss_krt = searchParams.get("krt");
      const searchParamss_krttracker = searchParams.get("krttracker");

      searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
      searchParamss_krt && formdata.append("conversions", searchParamss_krt);

        // tfhfc
        const searchParamss_tfhfc = searchParams.get("tfhfc");
        searchParamss_tfhfc && formdata.append('tfhfc', searchParamss_tfhfc);

      try {
        const form = await fetch(`https://horsefirecapsule.com/submitdata.php`, { body: formdata, method: "POST" });
        const data = await form.json();

        const blogWebId = data.blogWebId ?? null;
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
    <section>
      {
        loading && <FormLoader />
      }

      <AmaFlipDialog  type="exo"/>

      <div className="w-full border-2 bg-white/60 backdrop-blur-2xl border-red-600 rounded-xl mt-8 md:ml-10 py-10 px-3" id="form">

        <h1 className="text-center text-3xl font-bold">Contact</h1>
        <form action="" className="px-3md:px-10" onSubmit={handleFormSubmit}>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="text-xl font-bold">
              नाम लिखिए
            </label>
            <input
              className="text-xl border p-3 rounded-lg focus:none outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="name"
              placeholder="आपका नाम लिखिए"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="phonenumber" className="text-xl font-bold">
              फोन नंबर लिखिए
            </label>
            <input
              className="text-xl border p-3 rounded-lg focus:none outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="phone"
              placeholder="आपका फ़ोन नंबर लिखिए "
              onChange={handleChange}
              minLength={10}
              maxLength={10}
            />
          </div>
          <div className="text-center mt-7">
            <button className="bg-red-600 hover:bg-red-500 duration-200 w-full md:w-1/2 font-bold text-2xl text-white rounded-full py-3 font-poppin">
              Submit
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-5">
          <img src="/main/hf069x_images/security.webp" alt="tyty" width={200} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default PageForm;
