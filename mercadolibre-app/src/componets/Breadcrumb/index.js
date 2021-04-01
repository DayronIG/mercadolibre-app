import React from 'react'
import styles from './breadcrumb.module.scss'

const Index = ({categories}) => {
    return (
        <div className={styles.breadcrumb}>
      {categories.map((category, i) => (
        <p className={styles.item} key={category}>
          {i !== 0 && '> '}
          {i === categories.length - 1 ? <strong>{category}</strong> : category}{' '}
        </p>
      ))}
    </div>
    )
}

export default Index
