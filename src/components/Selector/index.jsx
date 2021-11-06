import React from 'react'
import styles from './Selector.module.css'
import Minus from '../../images/icon-minus.svg'
import Plus from '../../images/icon-plus.svg'
import IconCart from '../../images/white-icon-cart.svg'

const Selector = () => {
    return (
        <div className={styles.container}>
            <div className={styles.selector}>
                <button>
                    <img src={Minus} alt="-1 product" />
                </button>

                <p>0</p>

                <button>
                    <img src={Plus} alt="+1 product" />
                </button>
            </div>

            <div className={styles.addToCart}>
                <button>
                    <img src={IconCart} alt="Add to Cart" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Selector
