import React from 'react'

import { Container, Content } from './style'

type PhotoItemProps = {
  photo: {
    name: string
    url: string
  }
}

export const PhotoItem = ({ photo }: PhotoItemProps) => {
  return (
    <Container>
      <Content>
        <img src={ photo.url } alt={ photo.name } />
        <h1>{ photo.name }</h1>
      </Content>
    </Container>
  )
}
