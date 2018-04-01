import React from 'react'
import styles from './styles.css'
import AX from '../AX'

const Cover = props => {
  const {
    artwork,
    description,
    heading,
    style,
    title
  } = props

  const componentStyles = Object.assign({}, style, {
    backgroundImage: `url(${artwork})`
  })

  return (
    <div className={styles.Cover} style={componentStyles}>
      <div className={styles.CoverBody}>
        <AX.NodeList sequence='ax-up ax-fade'>
          <div>{heading}</div>
          <h1>{title}</h1>
          <div>{description}</div>
        </AX.NodeList>
      </div>
    </div>
  )
}

export default Cover
