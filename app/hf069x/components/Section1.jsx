import Image from "next/image";
import '../page.css'
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Section1 = () => {
  return (

    <section className={noto.className}>
      <section className="relative max-w-5xl m-auto z-20 flex justify-center items-center flex-col px-2">
        <div className="flex flex-col justify-center items-center uppercase pt-7">
          <h1 className="font-black text-5xl md:text-7xl text-red-600">
            Horse fire
          </h1>
          <h1 className="font-black text-5xl md:text-7xl">Capsule</h1>
          <h2
            className="md:text-6xl text-4xl text-center font-black pb-14 py-5  bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent"
          >
            क्यों मर्द चाहते है हॉर्स फायर को इतना ?
          </h2>
        </div>
        <div className="relative flex justify-center items-center my-16 md:h-auto h-screen w-full">
          <Image
            src="/main/hf069x_images/hfc.png"
            width={0}
            height={0}
            className="w-64 mt-4"
            alt="aaa"
            loading="eager"
            fetchPriority="high"
          />

          <div className="floating absolute  left-0 md:left-12 -top-28 md:top-10 flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man6.png"
                width={0}
                height={0}
                alt="bbb"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Arun shetty</h1>
              <p className="text-sm">
                Good product, using past 4 months. Now, i feel less tired
              </p>
            </div>
          </div>

          <div className="floating absolute left-0 hidden  w-2/3 md:flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man4.png"
                width={0}
                height={0}
                alt="ccc"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Aniruddh shukla</h1>
              <p className="text-sm">
                2 week ho gye ise khate huye meri timing dheere dheere increase
                hone laga
              </p>
            </div>
          </div>

          <div className="floating absolute left-10 md:bottom-5 bottom-[-2rem] flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man1.png"
                width={0}
                height={0}
                alt="eee"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Lokesh lalvani</h1>
              <p className="text-sm">
                Best for ED problem Natural nd effective also
              </p>
            </div>
          </div>

          <div className="floating absolute flex  -z-10 right-12  md:right-20 md:top-10 -top-7 md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man5.png"
                width={0}
                height={0}
                alt="fff"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Akshay jha</h1>
              <p className="text-sm">Very effective must try👌</p>
            </div>
          </div>

          <div className="floating absolute flex md:right-10 right-2 md:top-auto top-28 w-3/4 md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man2.png"
                width={0}
                height={0}
                alt="ggg"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Afzal rehman</h1>
              <p className="text-sm">
                Helpful for increasing timing during bedtime
              </p>
            </div>
          </div>

          <div className="floating absolute  flex right-5 md:right-12 md:bottom-10 bottom-[-7.8rem] md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
            <div className="flex-none">
              <Image
                src="/main/hf069x_images/man3.png"
                width={0}
                height={0}
                alt="hhh"
                className="w-16 shrink-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Nirav mahant</h1>
              <p className="text-sm">Results are good safe and natural</p>
            </div>
          </div>
        </div>
        <div className="absolute -z-20  bg-yellow-400 w-80  h-80 blur-[5rem] opacity-10  "></div>
        <div className="absolute -z-10  bg-green-400 w-80 right-8 top-10  h-80 blur-[5rem] opacity-15  "></div>
        <div className="absolute -z-10  bg-violet-400 w-80 left-5 top-10  h-80 blur-[5rem] opacity-10  "></div>
        <div className="absolute -z-20 md:left-20  left-0 top-1/4">
          <Image
            src="/main/hf069x_images/stars.png"
            width={0}
            height={0}
            alt="jjj"
            className="w-36"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute -z-20 md:right-20 right-0  top-1/2">
          <Image
            src="/main/hf069x_images/stars.png"
            width={0}
            height={0}
            alt="kkk"
            className="w-36"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute -z-20 md:left-36  left-0 top-3/4">
          <Image
            src="/main/hf069x_images/stars.png"
            width={0}
            height={0}
            alt="lll"
            className="w-12"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>
    </section>

  );
};

export default Section1;
