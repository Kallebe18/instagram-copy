import React, { useEffect, useState } from 'react'

import {
  HomeScreenContainer, 
  StoriesContainer, 
} from './styles'

import Story from './components/story'
import Post from './components/post'
import axios from 'axios'
import { StoriesInfo, PostInfo } from '../../dto'

export function HomeScreen() {
  const [stories, setStories] = useState<StoriesInfo[]>([])
  const [posts, setPosts] = useState<PostInfo[]>([])

  useEffect(() => {
    (async () => {
      const storiesResponse = await axios.get('/stories')
      setStories(storiesResponse.data)
      const postsResponse = await axios.get('/posts')
      setPosts(postsResponse.data)
    })()
  }, [])

  return (
    <HomeScreenContainer
      data={posts}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={      
        <StoriesContainer
          data={stories}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => 
            <Story imageUri={item.user.image} username={item.user.username}/>
          }
        />
      }
      renderItem={({item}) => (
        <Post post={item}/>
      )}
    />
  )
}