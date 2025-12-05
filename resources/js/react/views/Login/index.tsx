import React, {ChangeEvent, useState} from "react";
import {createReactRoot} from '@/helpers/createReactRoot.jsx'
import styles from "./page.module.scss"
import iBackGround from "@/assets/MainPage/background.png";
import {Button} from "@mui/material";
import httpClient from "@/helpers/httpClient";

interface LoginDataProps {
  name: string
  password: string
}

const initialLoginData: LoginDataProps = {
  name: '',
  password: ''
}

interface GetTokenType {
  token?: string
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataProps>(initialLoginData)
  const [errorText, setErrorText] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res: GetTokenType = await httpClient.post('/login', { ...loginData })
      console.log(res)
      localStorage.setItem('token', res?.token)
    } catch (e) {
      console.log(e)
      setErrorText(e?.message)
    }
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
        <form onSubmit={onSubmit} className={styles.form}>
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

          {errorText ? (
            <p className={styles.error_text}>{errorText}</p>
          ) : null}

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