import { LogoIcon } from 'assets/svgs'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navBtn}>소식받기</div>
        <div className={styles.navBtn}>제휴/문의</div>
      </nav>
    </header>
  )
}

export default Header
