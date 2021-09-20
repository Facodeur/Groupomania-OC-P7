import React from 'react'
import { dateParser } from '../../utils/date-parser'
import { CardContainer, DatePosted, Header, Icon, Username } from './CardPostElements'

const CardPost = ({ post }) => {


  return (
    <CardContainer>
      <Header>
          <Username>
          <Icon/>
          {post.User.username}
        </Username>
        <DatePosted>
          {dateParser(post.createdAt)}
        </DatePosted>
      </Header>
      card post
    </CardContainer>
  )
}

export default CardPost
