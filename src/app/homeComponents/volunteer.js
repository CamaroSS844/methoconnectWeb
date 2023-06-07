import styles from '../page.module.css'
import Image from 'next/image'

const VolunteerComp = () => {
    return ( 
        <section className={styles.compOne}>
        <div className={styles.compOnepOne}>
          <h1>
            Volunteer Scheduling
          </h1>
          <p >Schedule people for roles in every ministry in your church.</p>
        </div>
        <div className={styles.compOnepTwo}>
        <Image
          className={styles.slide1}
          src='/calendar.jpg'
          alt="Next.js Logo"
          width={300}
          height={600}
          priority
        />
          <div style={{width: '30%'}}>
            <ul className={styles.ulist}>
              <li > <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li ><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li ><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li ><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li ><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
            </ul>
          </div>
        </div>
      </section>
     );
}

export const localStylesHome = {
  list : {
    padding: '8%'
  }
}
 
export default VolunteerComp;