import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class VideoEmbed extends Component {
  render () {
    const {
      id,
      service,
      height,
      width,
      ...rest
    } = this.props

    const src = getVideoSource(service, id)

    if (!src) return null

    const componentProps = {
      ...rest,
      allow: 'autoplay',
      frameborder: 0,
      height,
      src: src.video,
      width
    }

    const iFrame = (
      <iframe {...componentProps} />
    )

    const placeholder = (
      <div className={styles.VideoEmbed} />
    )

    return (
      <div style={{maxWidth: 400}}>
        {true ? placeholder : iFrame}
      </div>
    )
  }
}

const SOURCES = {
  dailymotion: {
    video: '//www.dailymotion.com/embed/video/',
    thumbnail: '//www.dailymotion.com/thumbnail/video/'
  }
}

/**
 * Returns the embed Url based on the video service.
 *
 * @param   {string} - service
 * @param   {string} - id
 * @returns {string}
 */
const getVideoSource = (service, id) => {
  if (!service || !id) return null
  return {
    video: `${SOURCES[service].video}${id}`,
    thumbnail: `${SOURCES[service].thumbnail}${id}`
  }
}

VideoEmbed.propTypes = {
  /**
   * Height of the iFrame
   */
  height: PropTypes.number,
  /**
   * ID of the video
   */
  id: PropTypes.string,
  /**
   * Service of the video
   */
  service: PropTypes.oneOf(Object.keys(SOURCES)),
  /**
   * Width of the iFrame
   */
  width: PropTypes.number
}

VideoEmbed.defaultProps = {
  height: 270,
  width: 480,
  service: 'dailymotion'
}

export default VideoEmbed
