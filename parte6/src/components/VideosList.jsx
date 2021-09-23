import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Play from '../components/Play'

// [Firebase]
import { db, firebaseApp } from '../firebase'
import { collection, doc, getDocs, setDoc, updateDoc, serverTimestamp, deleteDoc, deleteField } from "firebase/firestore";

// [Redux]
import { playNewVideo } from '../store/modules/shop/actions'

const VideosList = () => {

  const [movieList, setMovieList] = useState([])
  const dispatch = useDispatch()
  const { currentVideo } = useSelector(state => state.shop)

  // Firebase
  async function getVideos() {
    const videosCol = collection(db, 'videos');
    // console.log('videosCol'); console.log(videosCol)
    const videosSnapshot = await getDocs(videosCol);
    // console.log('videosSnapshot'); console.log(videosSnapshot)
      const videosList = videosSnapshot.docs.map((doc) => doc.data());
      // console.log('videosList'); console.log(videosList)
      return videosList
  }

  useEffect(() => {
    getVideos()
    .then((updatedVideos) => setMovieList(updatedVideos))
  }, [])

  // update currentVideo
  const saveIdOfClickedVideo = (movie) => {
    // console.log(movie)
    dispatch(playNewVideo(movie))
  }

  return (
    <Container> 

      { movieList.map((movie, index) => (
          <Video key={movie.id}>
            <VideoLink href="#single" onClick={() => saveIdOfClickedVideo(movie)}>
              <VideoThumb>
                <PlayStyled />
              </VideoThumb>
              <VideoTitle>
                {movie.title}
              </VideoTitle>
            </VideoLink>
          </Video>
        ))}

    </Container>
  )
}

const VideoLink = styled.a`
  color: inherit;
`

const PlayStyled = styled(Play)`
  fill: #999;
  width: 50px;
  height: 50px;
  transition: all .15s ease-in-out;
`

const Video = styled.section`
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PlayStyled} {
    transform: scale(1.5)
  }
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

export default VideosList
