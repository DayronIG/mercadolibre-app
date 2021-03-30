import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.scss'
import Logo from '../../utils/assets/Logo_ML.png';
import SearchBar from '../SearchBar'

const index = () => {
    return (
        <header className={styles.header}>
        <nav className={styles.nav}>
          
            <img className={styles.logo} src={Logo} alt='Mercadolibre logo' />
         
           <SearchBar />
        </nav>
      </header>
    )
}

export default index
