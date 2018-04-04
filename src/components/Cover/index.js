import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'preact-router/match'
import AX from '../AX'
import Grid from '../Grid'
import styles from './styles.css'

const Cover = props => {
  const {
    artwork,
    description,
    heading,
    playTitle,
    playUrl,
    style,
    title
  } = props

  const componentStyles = Object.assign({}, style, {
    backgroundImage: `url(${artwork})`
  })

  const playMarkup = playUrl ? (
    <Link href={playUrl} className={styles.PlayButton}>
      {playTitle}
    </Link>
  ) : null

  return (
    <div className={styles.Cover} style={componentStyles}>
      <div className={styles.CoverBody}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col size={8}>
              <AX.NodeList sequence='ax-up ax-fade'>
                <div>{heading}</div>
                <h1>{title}</h1>
                <div>{description}</div>
                {playMarkup}
              </AX.NodeList>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </div>
    </div>
  )
}

Cover.propTypes = {
  /**
   * The title for the play button.
   */
  playTitle: PropTypes.string,
  /**
   * The URL for the play button.
   */
  playUrl: PropTypes.string
}

export default Cover
