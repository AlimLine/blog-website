import React, {useState} from "react";
import styles from '@/views/Admin/admin.module.scss'
import httpClient from "@/helpers/httpClient";

const CategoriesForm = () => {
  const [newCategoryName, setNewCategoryName] = useState<string>('')

  const nameOnChangeEvent = (e) => {
    setNewCategoryName(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await httpClient.post('/create-category', {name: newCategoryName})
      console.log(res)
    } catch (e) {
      console.log(e)
    }
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