import dynamic from 'next/dynamic'
import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const YoutubeFrame = dynamic(() => import('./YoutubeFrame'));

const YoutubeVideo = () => {
    return (

        <section className={noto.className}>

            <h1 className='text-center text-3xl md:text-4xl pt-4 pb-3 font-bold'>यौन रोग विशेषज्ञ द्वारा प्रस्तावित</h1>

            <Carousel showStatus={false} infiniteLoop={true} autoPlay={false} showThumbs={false} showArrows={true} >

                <div>
                    <YoutubeFrame vid={"xXqI0_fyfvM"} />
                </div>


                <div>
                    <YoutubeFrame vid={"7yPYMQTna5E"} />
                </div>

            </Carousel>
        </section>

    )
}

export default YoutubeVideo