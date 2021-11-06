import React from 'react'
import styles from './ProductDescription.module.css'
import Selector from '../Selector/index'

const ProductDescription = () => {
    return (
        <div className={styles.container}>
            <h2>SNEAKER COMPANY</h2>
            <h1>Fall Limited Edtition Sneakers</h1>
            <p className={styles.description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className={styles.actualPrice}>
                <p>$125.00</p>
                <p>50%</p>
            </div>
            <p className={styles.oldPrice}>$250.00</p>
            <Selector />
        </div>
    )
}

export default ProductDescription
