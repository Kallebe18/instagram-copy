import { createServer } from 'miragejs'
import uuid from 'react-native-uuid'
import faker from 'faker'

import { StoriesInfo, PostInfo, CommentInfo, LikeInfo } from '../dto'

export default function() {
  const stories: StoriesInfo[] = [];

  for(let i=0; i<10; i++) {
    const story: StoriesInfo = {
      id: uuid.v4().toString(),
      user: {
        id: uuid.v4().toString(),
        image: faker.internet.avatar(),
        username: faker.internet.userName()
      }
    }
    stories.push(story)
  }

  const comments: CommentInfo[] = []
  for (let j=0; j<4; j++) {
    comments.push(
      {
        id: uuid.v4().toString(),
        comment: faker.lorem.paragraph(),
        user: {
          id: uuid.v4().toString(),
          image: faker.internet.avatar(),
          username: faker.internet.userName()
        },
      }
    )
  }

  const likes: LikeInfo[] = []
  for (let j=0; j<4; j++) {
    likes.push(
      {
        id: uuid.v4().toString(),
        user: {
          id: uuid.v4().toString(),
          image: faker.internet.avatar(),
          username: faker.internet.userName()
        },
      }
    )
  }

  const posts: PostInfo[] = [];

  for(let i=0; i<10; i++) {
    const images = []
    for (let j=0; j<3; j++) {
      images.push(`${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`)
    }
    
    const post: PostInfo = {
      id: uuid.v4().toString(),
      user: {
        id: uuid.v4().toString(),
        image: faker.internet.avatar(),
        username: faker.internet.userName()
      },
      location: faker.address.city(),
      images,
      description: faker.lorem.sentence(),
      comments,
      likes,
    }

    posts.push(post)
  }

  createServer({
    routes() {
      this.get('/stories', () => {
        return stories
      })
      this.get('/posts', () => {
        return posts
      })
    }
  })
}