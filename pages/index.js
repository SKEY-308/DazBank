import React from 'react'
import { Banner, styles, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA } from '../components'

import { client } from '../lib/client'
import { stats } from '../components/constant'

const Home = ({ banner, bsbanner, billbanner }) => {
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

          <Stats stats={ stats } />

          <Business bsbanner={ bsbanner.length && bsbanner[0] } />
          { console.log(bsbanner) }

          <Billing billbanner={ billbanner.length && billbanner[0] } />
          { console.log(billbanner) }

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
  const bquery = '*[_type == "bfeatures"]';
  const bilquery = '*[_type == "tbanner"]';

  // Fetch data from external API
  const banner = await client.fetch(query)
  const bsbanner = await client.fetch(bquery)
  const billbanner = await client.fetch(bilquery)


  // Pass data to the page via props '"const data = await res.json()" jsaickjfai'
  return { props: { banner, bsbanner, billbanner } }
};

export default Home