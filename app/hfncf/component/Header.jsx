
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto">
                <img src="/main/hf91w_images/first.jpg" alt="asd" loading='eager' fetchPriority="high" className="w-full" />

                <div className="grid grid-cols-12 gap-5 p-5 items-center text-center">
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="/main/hf91w_images/c1.webp" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">टेस्टोस्टेरोन का स्तर बढाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="/main/hf91w_images/c2.webp" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">लिंग बड़ा व सख्त बनाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="/main/hf91w_images/c3.webp" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">जोश जगाए, अवधि बढाए </p>
                    </div>

                </div>

            </section>
        </section>
    )
}

export default Header