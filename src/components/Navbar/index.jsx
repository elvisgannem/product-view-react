import React from 'react'
import Logo from  '../../images/logo.svg'
import IconCart from '../../images/icon-cart.svg'
import Avatar from '../../images/image-avatar.png'
import styles from './Navbar.module.css'
import { CartContext } from '../../context/CartContext'
import IconMenu from '../../images/icon-menu.svg'
import MobileNavbar from '../MobileNavbar'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const cartContext = React.useContext(CartContext)

    return (
        <div>
            <nav className={styles.desktop}>
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
                    {cartContext.cartItems > 0 ?
                        <div className={styles.notifications}>
                            {cartContext.cartItems}
                        </div>
                        : ''
                    }
                    <img src={IconCart} alt="Cart" onClick={() => cartContext.setCartItems(0)} className={styles.cart} />
                    <img src={Avatar} alt="Avatar" className={styles.avatar} />
                </div>
            </nav>

            <nav className={styles.mobile}>
                <div className={styles.mobileContainer}>
                    <div>
                        <img src={Logo} alt="Logo sneakers" />
                    </div>

                    <div onClick={() => setMobileMenu((prevState) => !prevState)} className={styles.mobileMenu}>
                        <img src={IconMenu} alt="Menu Mobile" />
                    </div>

                    <div>
                        {cartContext.cartItems > 0 ?
                            <div className={styles.notifications}>
                                {cartContext.cartItems}
                            </div>
                            : ''
                        }
                        <img src={IconCart} alt="Cart" onClick={() => cartContext.setCartItems(0)} className={styles.cart} />
                        <img src={Avatar} alt="Avatar" className={styles.avatar} />
                    </div>
                </div>


            {
                mobileMenu ? <MobileNavbar /> : ''
            }
            </nav>
        </div>

    )
}

export default Navbar
