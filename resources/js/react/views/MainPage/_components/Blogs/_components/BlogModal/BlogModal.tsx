import React from "react";
import styles from "@/views/MainPage/_components/Blogs/blogs.module.scss";
import {BlogsType} from "@/views/MainPage/_components/Blogs/Blogs";

interface BlogModalProps {
  itemData: BlogsType
  setBlogModal: (value: boolean) => void
  getCategoryName: (id: number) => string
}

const BlogModal = (props: BlogModalProps) => {
  const {
    itemData,
    getCategoryName,
    setBlogModal
  } = props
  return (
    <div className={styles.item} onClick={() => setBlogModal(true)}>
      <img src={itemData?.image} alt="" />

      <div className={styles.heading}>
        <p className={styles.category}>{getCategoryName(+itemData?.category_id)}</p>
        <p>{itemData?.name}</p>
        <p>{itemData?.description}</p>
      </div>
    </div>
  )
}

export default BlogModal