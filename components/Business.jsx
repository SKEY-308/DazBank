/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from "./styles";

import { urlFor } from '../lib/client';

const Business = ({ bsbanner }) => {

    const { content, bfeat } = bsbanner


    return (
        <section id="Features" className={ layout.section }>

            <div className={ layout.sectionInfo }>

                <h2 className={ styles.heading2 }>
                    You do the business, <br className="sm:block hidden" /> we’ll handle
                    the money.
                </h2>

                <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
                    { content }
                </p>

                <button type="button" className={ `py-4 px-6 font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${`mt-10`}` }>
                    Get Started
                </button>

            </div>

            <div className={ `${layout.sectionImg} flex-col` }>

                { bfeat.map((feat, index) => (

                    <div
                        key={ index }
                        className={ `flex flex-row p-6 rounded-[20px]
                         ${index !== bfeat.length - 1 ? "mb-6" : "mb-0"} feature-card` }
                    >

                        <div className={ `w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue` }>
                            <img src={ urlFor(feat.icon) } alt="star" className="w-[50%] h-[50%] object-contain" />
                        </div>

                        <div className="flex-1 flex flex-col ml-3">
                            <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                                { feat.title }
                            </h4>
                            <p className="font-normal text-dimWhite text-[16px] leading-[24px]">
                                { feat.content }
                            </p>
                        </div>

                    </div>

                )) }
            </div>



        </section>
    )
}

export default Business