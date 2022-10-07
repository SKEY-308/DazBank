import React from 'react'
import { Banner, styles, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA } from '../components'

import { client } from '../lib/client'
import { stats } from '../components/constant'

const Home = ({ banner, bsbanner, billbanner, testbanner, clientsbanner }) => {
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


          <section id="Clients" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative ` }>

            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">

              <h2 className={ styles.heading2 }>
                What People are <br className="sm:block hidden" /> saying about us
              </h2>

              <div className="w-full md:mt-0 mt-6">
                <p className={ `${styles.paragraph} text-left max-w-[450px]` }>
                  Everything you need to accept card payments and grow your business
                  anywhere on the planet.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
              { testbanner.map((feed) => (
                <Testimonials key={ feed._id } feed={ feed } />
              )) }

              { console.log(testbanner) }
            </div>

          </section>

          <section className={ `${styles.flexCenter} my-4` }>

            <div className={ `${styles.flexCenter} flex-wrap w-full` }>

              { clientsbanner.map((client) => (

                <Clients key={ client._id } client={ client } />

              )) }

            </div>

          </section>
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
  const testquery = '*[_type == "feedback"]';
  const clientsquery = '*[_type == "clients"]';

  // Fetch data from external API
  const banner = await client.fetch(query)
  const bsbanner = await client.fetch(bquery)
  const billbanner = await client.fetch(bilquery)
  const testbanner = await client.fetch(testquery)
  const clientsbanner = await client.fetch(clientsquery)


  // Pass data to the page via props '"const data = await res.json()" jsaickjfai'
  return { props: { banner, bsbanner, billbanner, testbanner, clientsbanner } }
};

export default Home