import React from 'react'
import styles from './styles.css'
import classNames from 'classnames'

const AppContainer = props => {
  const {
    className,
    children,
    ...rest
  } = props

  const componentClassName = classNames(
    styles.AppContainer,
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

export default AppContainer
