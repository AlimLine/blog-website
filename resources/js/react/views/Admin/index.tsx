import React, {useState} from "react";
import {createReactRoot} from '@/helpers/createReactRoot.jsx'
import styles from "./admin.module.scss"
import iBackGround from "@/assets/MainPage/background.png";
import {Tab, Tabs} from "@mui/material";

const MainPage = () => {
  const [tab, setTab] = useState<'categories'|'blog'>('categories')

  const onTabChange = (_, value) => {
    setTab(value)
  }

  return (
    <div className={styles.page}>
      <img src={iBackGround} alt="" className={styles.bg} />

      <div className={styles.container}>
        <h1 className={styles.admin_title}>Админ панель</h1>

        <Tabs value={tab} onChange={onTabChange}>
          <Tab label='Категории' value='categories' />
          <Tab label='Блог' value='blog' />
        </Tabs>
      </div>
    </div>
  )
}

export default MainPage

createReactRoot('adminReactRoot', MainPage)