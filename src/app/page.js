import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Cards from './homeComponents/myCards'
import VolunteerComp from './homeComponents/volunteer'
import WorshipComp from './homeComponents/worship'
import MoreComp from './homeComponents/more'
import PricingComp from './homeComponents/pricing'
import Servicesdemo from './homeComponents/servicesDemo'

export default function Home() {
  return (
    <main className= {styles.main}>
      <div className={styles.landing}>
        <div>
          <h1><span className={styles.heading}>Metho</span><span style={{color: '#3EB6AF'}}>Connect</span></h1>
          <p><em>Connecting the church worldwide</em></p>
          <button>Sign up</button>
        </div>
        <Image
          className={styles.logo}
          src="/Section.svg"
          alt="Next.js Logo"
          width={400}
          height={400}
          priority
        />
      </div>
      <Cards />
      <VolunteerComp />
      <WorshipComp />
      <VolunteerComp />
      <section>
        <div>
          <p> music stand</p>
          <p> app store</p>
          <p> google play</p>
        </div>
        <div>
          Music Stand is an add-on mobile app to Services with tools to help musicians step through sheet music 
          with a foot pedal, save personalized notes, and more!
        </div>
      </section>
      <MoreComp />
      <PricingComp />
      <Servicesdemo />
    </main>
  )
}

