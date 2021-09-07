import { useState  } from 'react'
import styles from './boxes.module.css'


const Boxes = props => {
    const { boxes, setBox} = props

    return (
        <div className="d-flex flex-row">{
            boxes.boxList.map( (box, i) =>
                <div key={i} className={styles.boxStyle} style={{ backgroundColor: box }}></div>
            )
        }</div>
    )
}

export default Boxes
