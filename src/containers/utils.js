/**
 * Gets season data from route data.
 */
export const getSeasonFromRoute = (data, { segment, season, id }) => {
  if (!data) return {}
  const episodeSegment = data[segment]
  if (!episodeSegment) return {}
  const episodeSeason = episodeSegment[`season-${season}`]
  if (!episodeSeason) return {}

  return episodeSeason
}

/**
 * Gets episode data from route data.
 *
 * @param   {object} data
 * @param   {string} segment
 * @param   {number/string} season
 * @param   {number/string} id
 * @returns {object} episode
 */
export const getEpisodeFromRoute = (data, { segment, season, id }) => {
  const episodeSeason = getSeasonFromRoute(data, { segment, season, id })
  if (!episodeSeason) return {}

  const { episodes, ...rest } = episodeSeason
  const episode = episodes[id - 1]

  return {
    ...rest,
    ...episode,
    episodeOf: episodes.length
  }
}

/**
 * Creates the URL for an episode.
 *
 * @param   {string} segment
 * @param   {number/string} season
 * @param   {number/string} id
 * @returns {string} URL
 */
export const getEpisodeUrl = ({ segment, season, id }) => {
  return `/${segment}/${season}/${id}/`
}

/**
 * Creates the previous and next episdoe URLs.
 *
 * @param   {string} segment
 * @param   {number/string} season
 * @param   {number/string} id
 * @param   {number} total
 * @returns {object}
 */
export const getPrevNextEpisodeUrls = ({ segment, season, id, total }) => {
  const prev = id > 1 ? id - 1 : false
  const next = id < total ? id + 1 : false

  const prevUrl = prev !== false ? getEpisodeUrl({ segment, season, id: prev }) : null
  const nextUrl = next !== false ? getEpisodeUrl({ segment, season, id: next }) : null

  return {
    prev: prevUrl,
    next: nextUrl
  }
}

/**
 * Creates the episode title
 *
 * @param   {string} segment
 * @param   {number/string} season
 * @param   {number/string} series
 * @param   {number/string} id
 * @param   {number} total
 * @returns {string}
 */
export const getEpisodeTitle = ({ segment, season, series, id, total }) => {
  return `${segment} ${season} - ${series} (${id}/${total})`
}
