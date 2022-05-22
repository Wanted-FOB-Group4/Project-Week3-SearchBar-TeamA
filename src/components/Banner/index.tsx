import { BannerImage } from 'assets/svgs'

import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTextBox}>
        <p className={styles.notificationTxt}>새로운 임상시험이 등록되면 문자로 알려드려요</p>
        <button className={styles.notificationBtn} type='button'>
          임상시험 소식받기
        </button>
      </div>
      <div className={styles.bannerImageBox}>
        <BannerImage />
      </div>
    </div>
  )
}

export default Banner
