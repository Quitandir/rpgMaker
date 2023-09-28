import { Link } from 'react-router-dom';
import styles from './TelaBase.module.css';


export default function TelaBase({ children, img }) {
    return (
        <div className={styles.telaBase}>
            
            <img src={img} alt='img' className={styles.img}/>

            <div className={styles.textContainer}>
                {children}
            </div>

            <div className={styles.toTitleBtn}>
                <Link to='/lib'>
                    Return to title
                </Link>
            </div>
        </div>
    )
}