import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Now Playing' fetchURL={requests.requestNowPlaying} />
        <Row rowID='2' title='Popular on Netflix' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Top Rated Movies' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title='UpComing Movies' fetchURL={requests.requestUpcoming} />
        <Row rowID='5' title='TV Shows' fetchURL={requests.requestOnTheAir} />
    </>
  )
}

export default Home