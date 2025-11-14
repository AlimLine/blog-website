import React, {ChangeEvent, useEffect, useState} from "react";
import styles from '@/views/Admin/admin.module.scss'
import axios from "axios";
import {MenuItem, Select} from "@mui/material";

interface SendDataType {
  name: string
  description: string
  image: string
  category_id?: string
}

interface CategoriesListType {
  id: number
  name: string
}

const initialSendData = {
  name: '',
  description: '',
  image: '',
  category_id: null
}

const BlogForm = () => {
  const [sendData, setSendData] = useState<SendDataType>({...initialSendData})
  const [categoriesList, setCategoriesList] = useState<CategoriesListType[]>([])

  console.log(sendData)

  useEffect(() => {
    getCategories()
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get('/api/get-categories');
      console.log(res?.data)
      setCategoriesList(res?.data)
    } catch (e) {
      console.log('Ошибка:', e.response?.data || e.message);
    }
  };

  const handleChangeSelect = (event) => {
    setSendData({
      ...sendData,

      category_id: event.target.value as string
    });
  };

  const nameOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget

    setSendData({
      ...sendData,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSendData({
        ...sendData,
        image: reader.result
      }); // reader.result — это Base64
    };
    reader.readAsDataURL(file); // конвертируем в Base64
  };

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/create-blog', {...sendData})
      .then(response => {
        console.log('Категория создана:', response.data);
      })
      .catch(error => {
        if (error.response) {
          console.log('Ошибка сервера:', error.response.data);
        } else {
          console.log('Ошибка запроса:', error.message);
        }
      });
  }


  return <form className={styles.categories_form} onSubmit={onSubmit}>
    <input
      name='name'
      value={sendData.name}
      onChange={nameOnChangeEvent}
      className={styles.input}
      placeholder='Название блога'
    />

    <input
      name='description'
      value={sendData.description}
      onChange={nameOnChangeEvent}
      className={styles.input}
      placeholder='Описание блога'
    />

    <p>Выберите категорию</p>

    <Select
      onChange={handleChangeSelect}
      value={sendData?.category_id || 0}
    >
      {categoriesList?.map((item, key) => (
        <MenuItem value={item?.id} key={key}>{item?.name}</MenuItem>
      ))}
    </Select>

    <p>Выберите картинку</p>
    <input type="file" id="imageUpload" name="imageUpload" accept="image/*" onChange={handleImageChange} />

    <button className={styles.button} type='submit'>
      Создать категорию
    </button>
  </form>
}

export default BlogForm