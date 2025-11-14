import React from 'react'
import styles from './header.module.scss'
const Header = () => {
  return <header className={styles.header}>
    <div className={styles.tag}>
      Our blog
    </div>

    <h1 className={styles.header_title}>Resources and insights</h1>

    <p className={styles.header_description}>The latest industry news, interviews, technologies, and resources.</p>
  </header>
}

export default Header