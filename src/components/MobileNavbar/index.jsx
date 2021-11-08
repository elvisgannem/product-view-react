import React from 'react'
import styles from './MobileNavbar.module.css'

const MobileNavbar = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default MobileNavbar
