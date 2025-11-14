import React, {useState} from "react";
import styles from '@/views/Admin/admin.module.scss'
import axios from "axios";

const CategoriesForm = () => {
  const [newCategoryName, setNewCategoryName] = useState<string>('')

  const nameOnChangeEvent = (e) => {
    setNewCategoryName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/create-category', {name: newCategoryName})
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
      value={newCategoryName}
      onChange={nameOnChangeEvent}
      className={styles.input}
      placeholder='Название категории'
    />

    <button className={styles.button} type='submit'>
      Создать категорию
    </button>
  </form>
}

export default CategoriesForm