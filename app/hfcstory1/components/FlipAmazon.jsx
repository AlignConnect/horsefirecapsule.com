const FlipAmazon = () => {
    return (
        <section className='max-w-xl mx-auto'>
            <div className="p-0 bg-white w-100">

                <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSEFIRE CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-1 items-center justify-center gap-1 py-1">
                    <div className="">
                        <a href="https://bit.ly/4bb8PiG" className="w-full d-grid leading-none">
                            <img src="/common_images/bullriderGif.gif" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>
                    </div>
                    {/* <div className="">
                        <a href="https://amzn.to/4dQAY0t" className="w-full d-grid leading-none">
                            <img src="/common_images/amazongif.gif" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div> */}
                </div>


            </div>

        </section>
    )
}
export default FlipAmazon;