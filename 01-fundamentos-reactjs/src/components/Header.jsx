import styles from "./Header.module.css"
import igniteLogo from "../assets/ignite-feed.svg"
export function Header(){
    return(
        <>
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo Ignite Feed" />
            <strong>Ignite Feed 2</strong>
        </header>
        </>
    )
}