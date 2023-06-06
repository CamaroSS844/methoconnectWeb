import styles from '../page.module.css'
import Image from 'next/image'


const WorshipComp = () => {
    return ( 
        <section className={styles.compOne}>
        <h1>Worship Planning</h1>
        <p>Prepare your team for services with an organized, detailed plan.</p>
        <div>
          <div>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit dicta ipsam suscipit velit minima iusto non?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
      </section>
     );
}
 
export default WorshipComp;