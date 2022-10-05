import React from 'react'
import { Banner, styles, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA } from '../components'

import { client } from '../lib/client'

const Home = ({ banner }) => {
  return (
    <div>
      <div className={ `bg-primary ${styles.flexStart}` }>
        <div className={ `${styles.boxWidth}` }>

          { console.log(banner) }

          <Banner banner={ banner.length && banner[0] } />

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

// This gets called on every request
export async function getStaticProps() {

  const query = '*[_type == "firstbanner"]';

  // Fetch data from external API
  const banner = await client.fetch(query)


  // Pass data to the page via props '"const data = await res.json()" jsaickjfai'
  return { props: { banner } }
};

export default Home