import React from "react";
import {createReactRoot} from '@/helpers/createReactRoot.jsx'
import styles from "./page.module.scss"
import Header from "@/views/MainPage/_components/Header/Header";
import iBackGround from "@/assets/MainPage/background.png";
import Blogs from "@/views/MainPage/_components/Blogs/Blogs";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <img src={iBackGround} alt="" className={styles.bg} />

      <div className={styles.container}>
        <Header />

        <Blogs />
      </div>
    </div>
  )
}

export default MainPage

createReactRoot('pageReactRoot', MainPage)