import React from 'react'
import styles from './styles.css'

const Container = props => {
  const {
    children,
    ...rest
  } = props

  return (
    <div className={styles.Container} {...rest}>
      {children}
    </div>
  )
}

export default Container
