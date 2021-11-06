import React from 'react'
import styles from './ImagesDisplay.module.css'
import ImageProduct1 from '../../images/image-product-1.jpg'
import Thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../../images/image-product-4-thumbnail.jpg'

const ImagesDisplay = () => {
    return (
        <div>
            <div className={styles.primaryContainer}>
                <img src={ImageProduct1} alt="Principal" className={styles.principalImage}/>
            </div>
            <div className={styles.secondaryContainer}>
                <img src={Thumbnail1} alt="1 Thumbnail" className={styles.img} />
                <img src={Thumbnail2} alt="2 Thumbnail" className={styles.img} />
                <img src={Thumbnail3} alt="3 Thumbnail" className={styles.img} />
                <img src={Thumbnail4} alt="4 Thumbnail" className={styles.img} />
            </div>
        </div>
    )
}

export default ImagesDisplay
