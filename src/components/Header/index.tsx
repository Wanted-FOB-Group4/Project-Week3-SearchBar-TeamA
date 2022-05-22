import { Link } from 'react-router-dom'

import { LogoIcon } from 'assets/svgs'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <LogoIcon />
        </Link>
      </div>
      <nav className={styles.nav}>
        <button type='button' className={styles.navBtn}>
          소식받기
        </button>
        <button type='button' className={styles.navBtn}>
          제휴/문의
        </button>
      </nav>
    </header>
  )
}

export default Header
