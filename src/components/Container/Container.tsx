import { Outlet } from 'react-router-dom'
import styles from './Container.module.scss'


export default function Container( {children} : {children: React.ReactNode } ) {
    return (
        <div className={styles.container}>
            <div className={styles.container__conteudo}>
                {children}
            </div> 
        </div>
    )
}