import React, {useEffect, useState} from "react";
import styles from './blogs.module.scss'
import axios from "axios";
import {Modal} from "@mui/material";
import BlogModal from "@/views/MainPage/_components/Blogs/_components/BlogModal/BlogModal";

export interface BlogsType {
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
  const [blogModal, setBlogModal] = useState(false)
  const [activeElementId, setActiveElementId] = useState(null)

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

  const activeElementEvent = (id: number) => {
    setBlogModal(true)
    setActiveElementId(id)

    console.log(id)
  }



  return <div className={styles.blogs}>
    {data?.map((item, index) => (
      <div className={styles.item} key={index} onClick={() => activeElementEvent(item.id)}>
        <img src={item?.image} alt="" />

        <div className={styles.heading}>
          <p className={styles.category}>{getCategoryName(+item?.category_id)}</p>
          <p>{item?.name}</p>
          <p>{item?.description}</p>
        </div>
      </div>
    ))}

    <Modal open={blogModal} className={styles.blog_modal}>
      <BlogModal
        setBlogModal={setBlogModal}
        itemData={data?.find((item) => item.id === activeElementId)}
        getCategoryName={getCategoryName}
      />
    </Modal>
  </div>
}

export default Blogs