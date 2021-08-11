import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import styles from './Header.module.css'


const Header = () => {
   const { setSelectValueState } = React.useContext(Context)
   return (
      <div className={styles.header}>
         <nav className={styles.nav}>
            <Link
               to="/" className={styles.header__link}
               onClick={() => setSelectValueState([])}
            >
               <p>Home</p>
            </Link>
            <Link
               to="/states" className={styles.header__link}
               onClick={() => setSelectValueState([])}
            >
               <p>States</p>
            </Link>
            <Link to="/statesyears"
               onClick={() => setSelectValueState([])}
               className={styles.header__link}
            >
               <p>States and Years</p>
            </Link>
         </nav>
      </div>
   );
};

export default Header;
