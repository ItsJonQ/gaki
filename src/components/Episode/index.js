import React, { Component } from 'react'
import { Link } from 'preact-router/match'
import PropTypes from 'prop-types'
import VideoEmbed from '../VideoEmbed'

class Episode extends Component {
  render () {
    const {
      episode,
      episodeOf,
      prev,
      next,
      title,
      videoId
    } = this.props

    return (
      <div>
        {title} ({episode}/{episodeOf})
        <VideoEmbed {...{ id: videoId }} />
        <Link href={prev}>Prev</Link>
        <Link href={next}>Next</Link>
      </div>
    )
  }
}

Episode.propTypes = {
  /**
   * Title of the episode
   */
  title: PropTypes.string,
  /**
   * Description of the episode
   */
  description: PropTypes.string,
  /**
   * ID of the episode
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Episode number
   */
  episode: PropTypes.number,
  /**
   * Number of episodes in the series
   */
  episodeOf: PropTypes.number,
  /**
   * Date episode was aired/released
   */
  date: PropTypes.number,
  /**
   * Source of the video
   */
  videoSource: PropTypes.string,
  /**
   * DailyMotion ID for the video source
   */
  videoId: PropTypes.string,
  /**
   * Name of the series
   */
  series: PropTypes.string,
  /**
   * Name of the segment
   */
  segment: PropTypes.string,
  /**
   * Season of the segment
   */
  segmentSeason: PropTypes.number,
  /**
   * ID of the season
   */
  season: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Episode.defaultProps = {
  videoSource: 'DailyMotion'
}

export default Episode
