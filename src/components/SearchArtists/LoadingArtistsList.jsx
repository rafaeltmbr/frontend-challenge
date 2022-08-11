/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'

import { LoadingArtistSimplifiedCard } from 'components'

import styles from './LoadingArtistsList.module.scss'

const LoadingArtistsList = ({ show, artistsAmount }) =>
  show && (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Artistas</h2>
      </div>
      <ul className={styles.list}>
        {[...Array(artistsAmount).keys()].map((_, i) => (
          <LoadingArtistSimplifiedCard key={i} />
        ))}
      </ul>
    </div>
  )

LoadingArtistsList.propTypes = {
  show: PropTypes.bool.isRequired,
  artistsAmount: PropTypes.number.isRequired,
}

export default LoadingArtistsList
