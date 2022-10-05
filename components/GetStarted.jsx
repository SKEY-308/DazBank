import styles from './styles'
import images from './images'
// images.arrow_up

import Image from 'next/image';


const GetStarted = () => (
    <div className={ `${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer` }>

        <div className={ `${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full` }>

            <div className={ `${styles.flexStart} flex-row` }>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">

                    <span className="text-gradient">Get</span>

                </p>

                <Image src={ images.arrow_up } alt="arrow-up" width="23px" height="23px" className="object-contain" />

            </div>

            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">

                <span className="text-gradient">Started</span>

            </p>

        </div>
    </div>
);

export default GetStarted;