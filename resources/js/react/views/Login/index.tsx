import React, {ChangeEvent, useState} from "react";
import {createReactRoot} from '@/helpers/createReactRoot.jsx'
import styles from "./page.module.scss"
import iBackGround from "@/assets/MainPage/background.png";
import {Button} from "@mui/material";

interface LoginDataProps {
  name: string
  password: string
}

const initialLoginData: LoginDataProps = {
  name: '',
  password: ''
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataProps>(initialLoginData)

  const onSubmit = () => {

  }

  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  return (
    <div className={styles.page}>
      <img src={iBackGround} alt="" className={styles.bg} />

      <div className={styles.container}>
        <form action={onSubmit} className={styles.form}>
          <h3>Вход</h3>

          <div className={styles.inputs}>
            <input
              name='name'
              value={loginData.name}
              onChange={handleOnChangeEvent}
              className={styles.input}
              placeholder='Логин'
            />

            <input
              name='password'
              value={loginData.password}
              onChange={handleOnChangeEvent}
              className={styles.input}
              placeholder='Пароль'
            />
          </div>

          <Button type='submit' className={styles.submitButton} variant='outlined' color='secondary'>
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login

createReactRoot('loginReactRoot', Login)