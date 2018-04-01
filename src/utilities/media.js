export const SOURCES = {
  dailymotion: {
    video: '//www.dailymotion.com/embed/video/',
    thumbnail: '//www.dailymotion.com/thumbnail/video/'
  }
}

/**
 * Returns the embed Url based on the video service.
 *
 * @param   {string} - id
 * @param   {string} - service
 * @returns {string}
 */
export const getVideoSource = (id, service = 'dailymotion') => {
  if (!service || !id) return null
  return {
    video: `${SOURCES[service].video}${id}`,
    thumbnail: `${SOURCES[service].thumbnail}${id}`
  }
}
