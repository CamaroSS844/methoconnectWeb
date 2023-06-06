import styles from '../page.module.css'

const  Cards = () => {
    return ( 
      <div className={styles.containcards}>
          <div className={styles.cards}>
            <h3 className={styles.heading} >What is MethoConnect 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </p>
          </div>
          <div className={styles.cards}>
            <h3 className={styles.heading} >What is MethoConnect 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </p>
          </div>
          <div className={styles.cards}>
            <h3 className={styles.heading} >What is MethoConnect 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </p>
          </div>
        </div>
     );
  }

export default Cards;