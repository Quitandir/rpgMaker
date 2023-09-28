import styles from './BoxTexto.module.css';

export default function BoxTexto({children}) {
    return(
        <div className={styles.boxTexto}>
            {children}
        </div>
    )
}