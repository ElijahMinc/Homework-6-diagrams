import styles from './Preloader.module.css';
import preloader from './img/preload.svg';


const Preloader = () => {
   return (
      <div className={styles.preloader}>
         <div className={styles.preloader__wrapper}>
            <img src={preloader} alt="preloader" />
         </div>
      </div>
   )
}


export default Preloader;