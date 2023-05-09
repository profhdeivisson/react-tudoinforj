import { Link } from "react-router-dom"
import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.main}>
            <h1>TudoInfoRJ</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/QuemSomos">Quem Somos</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header