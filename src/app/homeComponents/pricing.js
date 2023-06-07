import styles from '../page.module.css'

const PricingComp = () => {
    return ( 
        <section className={styles.pricing} style={{position: 'relative', backgroundColor: '#3bc6bf25'}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
            </svg>
            <h2>Plans and Pricing</h2>
            <ul>
                30 Days Free
                <li>No Setup Fees</li>
                <li>Cancel Anytime</li>
            </ul>
            <p>
                Services is priced by the total number of people who access the system in any way. All plans include 
            </p>
            <p> 
                unlimited feature access, teams, service types, and plans.
            </p>
            <div className={styles.priceCardContainer}>
                <div>
                        <h1>10</h1>
                        <p>Team members</p>
                        <p>100mb storage</p>
                    <p>Free</p>
                    <button>Select plan</button>
                </div>
                <div>
                        <h1>10</h1>
                        <p>Team members</p>
                        <p>100mb storage</p>
                    <p>Free</p>
                    <button>Select plan</button>
                </div>
                <div>
                        <h1>10</h1>
                        <p>Team members</p>
                        <p>100mb storage</p>
                    <p>Free</p>
                    <button>Select plan</button>
                </div>
                <div>
                        <h1>10</h1>
                        <p>Team members</p>
                        <p>100mb storage</p>
                    <p>Free</p>
                    <button>Select plan</button>
                </div>
                <div>
                        <h1>10</h1>
                        <p>Team members</p>
                        <p>100mb storage</p>
                    <p>Free</p>
                    <button>Select plan</button>
                </div>
                
            </div>
            <div>
                <div><p>looking for a free plan</p></div>
                <div><p>want a whole planning center system</p></div>
            </div>
        </section>
     );
}
 
export default PricingComp;