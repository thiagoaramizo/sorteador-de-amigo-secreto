import styles from './FormularioAdicionarAmigo.module.scss'


const FormularioAdicionarAmigo = () => {

    function salvarFormulario(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }



    return (
        <form className={styles.formulario} onSubmit={ event => salvarFormulario(event)}>
            <input type='text' className={styles.formulario__nome}/>
            <button 
                type='submit'
                className={styles.formulario__botao}
                >Adicionar</button>
        </form>
        
    )
}

export default FormularioAdicionarAmigo