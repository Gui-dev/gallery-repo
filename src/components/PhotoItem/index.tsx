import React from 'react'

import { Container, Content } from './style'

type PhotoItemProps = {
  photo: {
    name: string
    url: string
  }
  onRemovePhoto: (photoName: string) => void
}

export const PhotoItem = ({ photo, onRemovePhoto }: PhotoItemProps) => {
  return (
    <Container>
      <Content>
        <img src={ photo.url } alt={ photo.name } />
        <h1>{ photo.name }</h1>
        <button onClick={() => onRemovePhoto(photo.name)}>Remover</button>
      </Content>
    </Container>
  )
}
