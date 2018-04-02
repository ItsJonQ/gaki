import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.css'

const Col = props => {
  const {
    className,
    children,
    size,
    ...rest
  } = props

  const componentClassName = classNames(
    styles.Col,
    size && styles[`Col-${size}`],
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

Col.propTypes = {
  size: PropTypes.number
}

export default Col
