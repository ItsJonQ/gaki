import React from 'react'
import styles from './styles.css'
import { Link } from 'preact-router/match'

const EpisodeCover = props => {
  const {
    artwork,
    href,
    style,
    title,
    ...rest
  } = props

  const componentStyles = Object.assign({}, style, {
    backgroundImage: `url(${artwork})`
  })

  return (
    <Link className={styles.EpisodeCover} href={href} style={componentStyles}>
      <div className={styles.EpisodeCoverBody}>
        <div className={styles.EpisodeCoverTitle}>
          <h3>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default EpisodeCover
