/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles'

import { urlFor } from '../lib/client';

const Clients = ({ client: { image } }) => {
    return (
        <div className={ `flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5` }>
            <img src={ urlFor(image) } alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
    )
}

export default Clients