import React from 'react'
import { Banner, styles, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA } from '../components'

const Home = () => {
  return (
    <div>
      <div className={ `bg-primary ${styles.flexStart}` }>
        <div className={ `${styles.boxWidth}` }>
          <Banner />
        </div>
      </div>


      <div className={ `bg-primary ${styles.paddingX} ${styles.flexCenter}` }>

        <div className={ `${styles.boxWidth}` }>

          <Stats />

          <Business />

          <Billing />

          <CardDeal />

          <Testimonials />

          <Clients />

          <CTA />

        </div>

      </div>

    </div>
  )
}

export default Home