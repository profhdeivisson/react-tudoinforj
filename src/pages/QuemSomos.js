import React from "react"
import styles from './Estilos.module.css'

function QuemSomos(){
    return(
        <div className={styles.main}>
            <img src="https://tudoinforj.com.br/wp-content/uploads/2020/11/quem-somos-tudoinforj-scaled-e1605666814863.jpg" alt="" />
            <div>
                <h1>Quem Somos</h1>
                <p>A TudoInfoRJ é uma Agência digital sem fronteiras e com 
                    clientes no Brasil e Exterior. Como planejamento estratégico 
                    digital, focamos nos serviços de criação de sites, blogs, 
                    landing page e criando artes digitais para Redes Sociais. 
                    Nosso objetivo é gerar leads e trazer resultados de 
                    qualidade para o seu negócio. Temos total compromisso 
                    com nossos clientes e parceiros.</p>
            </div>
        </div >
    )
}

export default QuemSomos