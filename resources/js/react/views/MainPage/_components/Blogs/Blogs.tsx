import React, {useEffect, useState} from "react";
import styles from './blogs.module.scss'
import axios from "axios";

interface BlogsType {
  name: string
  description: string
  image: string
  category_id?: string
  id: number
}

interface CategoriesListType {
  id: number
  name: string
}

const Blogs = () => {
  const [data, setData] = useState<BlogsType[]>([])
  const [categoriesList, setCategoriesList] = useState<CategoriesListType[]>([])

  useEffect(() => {
    getBlogs()
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

  const getBlogs = async () => {
    try {
      const res = await axios.get('/api/get-blog');
      console.log(res?.data)
      setData(res?.data)
    } catch (e) {
      console.log('Ошибка:', e.response?.data || e.message);
    }
  };

  const getCategoryName = (id: number) => {
    return categoriesList?.find((item) => item.id === id)?.name
  }

  return <div className={styles.blogs}>
    {data?.map((item, index) => (
      <div className={styles.item} key={index}>
        <img src={item?.image} alt="" />

        <div className={styles.heading}>
          <p className={styles.category}>{getCategoryName(item?.category_id)}</p>
          <p>{item?.name}</p>
          <p>{item?.description}</p>
        </div>
      </div>
    ))}
  </div>
}

export default Blogs