import React from 'react'
import styles from './ImagesDisplay.module.css'
import ImageProduct1 from '../../images/image-product-1.jpg'

const ImagesDisplay = ({productImages}) => {
    const [principalImage, setPrincipalImage] = React.useState(ImageProduct1)
    
    return (
        <div>
            <div className={styles.primaryContainer}>
                <img src={principalImage} alt="Principal" className={styles.principalImage}/>
            </div>

            <div className={styles.secondaryContainer}>
            {
                productImages.map((item, index) => {
                    return <img src={item.thumbnail} key={index} className={styles.img} alt={index+1 + ' Thumbnail'} onClick={() => setPrincipalImage(item.image)} />
                })
            }
            </div>
        </div>
    )
}

export default ImagesDisplay
