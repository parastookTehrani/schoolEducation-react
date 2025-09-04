import { Banner } from "./banner"
import { Links } from "./nav-links"
import style from './style.module.css'

export const Nav = () => {

    return (
        <nav className={style.container}>
            <Banner />
            <Links />
        </nav>
    )
}