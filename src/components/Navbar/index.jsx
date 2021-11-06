import React from 'react'
import Logo from  '../../images/logo.svg'
import IconCart from '../../images/icon-cart.svg'
import Avatar from '../../images/image-avatar.png'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.firstContainer}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo sneakers" />
                </div>

                <div>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src={IconCart} alt="Cart" />
                <img src={Avatar} alt="Avatar" className={styles.avatar} />
            </div>
        </nav>
    )
}

export default Navbar
