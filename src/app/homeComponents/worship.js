import styles from '../page.module.css'
import Image from 'next/image'


const WorshipComp = () => {
    return ( 
        <section className={styles.compOne}>
        <div className={styles.compOnepOne}>
          <h1>Worship Planning</h1>
          <p>Prepare your team for services with an organized, detailed plan.</p>
          <div className={styles.compOnepTwo}>
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
            <Image
            className={styles.slide1}
            src='/login.jpg'
            alt="Next.js Logo"
            width={300}
            height={600}
            priority
          />
          </div>
        </div>
      </section>
     );
}


export default WorshipComp;