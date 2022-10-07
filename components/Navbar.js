import { useRouter } from "next/router"
import Link from "next/link"
import TrianglesLogo from "./UI/TrianglesLogo"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className={`container ${styles.navbar}`}>
      <TrianglesLogo />
      <ul className={styles.links}>
        <li className={router.pathname === "/" ? styles.active : ""}>
          <Link href="/">home</Link>
        </li>
        <li
          className={
            router.pathname.match(/\/portfolio.*/gm) ? styles.active : ""
          }
        >
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li className={router.pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact">contact me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
