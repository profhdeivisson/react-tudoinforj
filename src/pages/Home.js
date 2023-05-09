import styles from './Estilos.module.css'
function Home(){
    return(
        <div className={styles.main}>
            <div>
                <h1>Criação de Sites WordPress</h1>
                <p>Projetamos e desenvolvemos sites wordpress de alto impacto 
                    que geram leads, vendem produtos e contam histórias. 
                    O seu site será uma fonte de contatos e vendas para o 
                    comercial da sua empresa. Desenvolvimento de sites 
                    com as melhores estratégias de marketing!</p>
            </div>
            <img src="https://tudoinforj.com.br/wp-content/uploads/2022/06/landing-page-1024x768.png" alt="" width={800} />
        </div >
    )
}

export default Home