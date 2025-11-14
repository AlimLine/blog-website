import React, {useState} from "react";
import styles from '@/views/Admin/admin.module.scss'

const CategoriesForm = () => {
  const [newCategoryName, setNewCategoryName] = useState<string>('')

  const nameOnChangeEvent = (e) => {
    setNewCategoryName(e.target.value)
  }

  return <form className={styles.categories_form}>
    <input
      value={newCategoryName}
      onChange={nameOnChangeEvent}
      className={styles.input}
      placeholder='Название категории'
    />

    <button className={styles.button}>
      Создать категорию
    </button>
  </form>
}

export default CategoriesForm