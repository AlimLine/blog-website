import React from "react";
import styles from './blog-modal.module.scss'
import {BlogsType} from "@/views/MainPage/_components/Blogs/Blogs";
import CloseIcon from '@mui/icons-material/Close';

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
    <div className={styles.item}>
      <CloseIcon onClick={() => setBlogModal(false)} className={styles.closeIcon} />
      <img src={itemData?.image} alt="" className={styles.image} />

      <div className={styles.heading}>
        <p className={styles.category}>{getCategoryName(+itemData?.category_id)}</p>
        <p>{itemData?.name}</p>
        <p>{itemData?.description}</p>
      </div>
    </div>
  )
}

export default BlogModal