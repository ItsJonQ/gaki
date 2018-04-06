import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Row = props => {
  const {
    className,
    children,
    seamless,
    ...rest
  } = props

  const componentClassName = classNames(
    styles.Row,
    seamless && styles['Row--seamless'],
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

export default Row
