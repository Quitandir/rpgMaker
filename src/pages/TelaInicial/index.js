import { Link } from 'react-router-dom';
import styles from './TelaInicial.module.css';


export default function TelaInicial() {
    return (
        <div className={styles.telaInicial}>
            <h1 className={styles.title}>Choose your game</h1>
            <Link to='/apocalipseCity/1' className={styles.title}>Apocalipse City</Link>   
            <Link to='/lostSword/1' className={styles.title}>Lost Sword</Link>   
            <Link to='/lastOfInstruments/1' className={styles.title}>Last Of Instruments</Link>   
            <Link to='/matheus/1' className={styles.title}>The Mistery of Matheus</Link>   
            <Link to='/undead/1' className={styles.title}>Beware the Undead</Link>   
            <Link to='/theDate/1' className={styles.title}>The Date</Link>   
            <Link to='/lostInTheForest/1' className={styles.title}>Lost In The Forest</Link>   
            <Link to='/theBakery/1' className={styles.title}>The Bakery</Link>   
            <Link to='/techWorld/1' className={styles.title}>A Technological World</Link>   
            <Link to='/hospital/1' className={styles.title}>The Hospital</Link>   
            <Link to='/strange/1' className={styles.title}>Strange Forest</Link>   
        </div>
    )
}