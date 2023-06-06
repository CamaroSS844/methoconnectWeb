import Image from 'next/image'
import React from 'react'
import styles from './header.module.css'

const HeaderTab = () => {
    return (
      <nav className={styles.header}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <a className={styles.headerLinks} href="#" style={{color: '#C33737'}}>Home</a>
          <a className={styles.headerLinks} href="#">Contact</a>
          <a className={styles.headerLinks} href="#">About</a>
          <a className={styles.headerLinks} href="#">Account</a>
          <a className={styles.headerLinks} href="#">Calendar</a>
          <a className={styles.headerLinks} style ={{display: 'flex', alignItems: 'center'}} href="#">
            <span style={{paddingRight: '10px'}}> Login </span>
            <Image
              className={styles.loginIcon}
              src="/accounticon.svg"
              alt="Login icon"
              width={30}
              height={32}
              priority
            />
          </a>
        </div>
      </nav>
    );
}

export default HeaderTab;

export function FooterTab(){
    return (
        <footer style={{backgroundColor: '#d7d7d7', color: 'black', textAlign: 'center', width: '100vw', padding: '25px'}}>
        <p>copyright of brainbox ltd@2023</p>
      </footer>
    )
}