import styles from "./Cabecalho.module.scss"

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__conteudo}>
                <img src="./images/logo.png" alt="Sortedor de Amigo Secreto" className={styles.cabecalho__conteudo__logo}/>
                <img src="./images/participante.png" alt="Imagem de participante" className={styles.cabecalho__conteudo__imagem}/>
            </div>
        </header>
    )
}