import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Row = props => {
  const {
    className,
    children,
    ...rest
  } = props

  const componentClassName = classNames(
    styles.Row,
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

export default Row
