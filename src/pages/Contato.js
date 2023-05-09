import React from "react"
import styles from './Estilos.module.css'

function Contato(){
    return(
        <div className={styles.main}>
            <img src="https://tudoinforj.com.br/wp-content/uploads/2022/06/blog-1024x768.png" alt="" width={800} />
            <div>
                <h1>Contato</h1>
                <p>Entre em contato conosco através do formulário abaixo.</p>
                <form>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" /><br />
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" name="email" placeholder="email@email.com" /><br />
                    <input type="submit" value={"Enviar"} />
                </form>
            </div>
        </div >
    )
}

export default Contato