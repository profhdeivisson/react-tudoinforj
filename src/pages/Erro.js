import styles from './Estilos.module.css'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

function Erro(){

    const navigate = useNavigate()

    const goHome = useCallback(() => {
        navigate('/')
    }, [navigate])

    return(
        <div className={styles.main}>
            <h1>Erro 404 | Página não encontrada</h1>
            <button onClick={goHome}>Retornar para página inicial</button>
        </div>
    )
}

export default Erro