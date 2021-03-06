import React from 'react'
import styles from './Selector.module.css'
import Minus from '../../images/icon-minus.svg'
import Plus from '../../images/icon-plus.svg'
import IconCart from '../../images/white-icon-cart.svg'
import { CartContext } from '../../context/CartContext'

const Selector = () => {
    const [selector, setSelector] = React.useState(0)
    const [showQuantityMessage, setShowQuantityMessage] = React.useState(false)
    const cartContext = React.useContext(CartContext)

    const plusSelector = () => {
        setSelector((prevState) => prevState + 1)
    }

    const minusSelector = () => {
        if(selector > 0){
            setSelector((prevState) => prevState - 1)
        }
    }

    const addToCart = () => {
        if(selector > 0){
            cartContext.setCartItems((prevState) => prevState + 1)
            setSelector(0)
            setShowQuantityMessage(false)
        } else {
            setShowQuantityMessage(true)
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.selector}>
                <button onClick={() => minusSelector()}>
                    <img src={Minus} alt="-1 product" />
                </button>

                <p>{selector}</p>

                <button onClick={() => plusSelector()}>
                    <img src={Plus} alt="+1 product" />
                </button>
            </div>

            <div className={styles.addToCart}>
                <button onClick={() => addToCart()}>
                    <img src={IconCart} alt="Add to Cart" />
                    Add to cart
                </button>
            </div>

            { showQuantityMessage ? 
                <p>You must select the desired quantity</p>
                :
                ''
            }
        </div>
    )
}

export default Selector
