import styles from './title.module.css';
import BoxTexto from '../../components/BoxTexto'

import title1 from './title1.png'
import title2 from './title2.png'
import { Link } from 'react-router-dom';

export default function Title() {
    return (
        <div className={styles.title}>
            <img src={title1} alt='' className={styles.img1}/>
            <img src={title2} alt='' className={styles.img2}/>
            <BoxTexto><Link to='/lib'>Click to start</Link></BoxTexto>
        </div>
    )
}