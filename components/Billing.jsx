/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from "./styles";
import images from './images'

import { urlFor } from '../lib/client';

const Billing = ({ billbanner }) => {
    const { content, image } = billbanner

    return (
        <section id="Products" className={ layout.sectionReverse }>

            <div className={ layout.sectionImgReverse }>

                <img src={ urlFor(image) } alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */ }
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */ }
            </div>

            <div className={ layout.sectionInfo }>
                <h2 className={ styles.heading2 }>
                    Easily control your <br className="sm:block hidden" /> billing &
                    invoicing
                </h2>
                <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
                    { content }
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={ images.apple } alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
                    <img src={ images.google } alt="google_play" className="w-[128.86px] h-[42.05px] object-contain cursor-pointer" />
                </div>
            </div>

        </section>
    )

}

export default Billing