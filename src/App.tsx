import React, { FormEvent, useEffect, useState } from 'react'

import { getAllPhotos, insertPhoto, removePhoto } from './services/photo'

import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Load } from './components/Load'
import { Container, Form, InputGroup, InputFile, File, Button, Warning, PhotoContainer } from './styles/Home'
import { PhotoItem } from './components/PhotoItem'

type PhotoProps = {
  name: string
  url: string
}

function App () {
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [photos, setPhotos] = useState<PhotoProps[]>([])

  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    setLoading(true)
    getAllPhotos()
      .then(response => {
        setPhotos(response)
        setFile('')
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  const handleImageChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement
    if (target.files) {
      const image = URL.createObjectURL(target.files[0])
      setFile(image)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File

    if (file.size === 0) {
      console.log('Selecione uma imagem')
      return
    }

    if (file && file.size > 0) {
      try {
        setUploading(true)
        const newPhoto = await insertPhoto(file)
        setPhotos([...photos, newPhoto])
      } catch (error) {
        const err = error as Error
        console.log(err.message)
      } finally {
        setUploading(false)
        setFile('')
      }
    }
  }

  const handleDeletePhoto = async (photoName: string) => {
    await removePhoto(photoName)
    await loadPhotos()
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {
          loading
            ? (
              <Load />
              )
            : (
                <Form onSubmit={ handleSubmit }>
                  <InputGroup>
                    <label htmlFor="inpuFile">
                      <InputFile
                        type="file"
                        name="image"
                        id="inpuFile"
                        onChange={ handleImageChange }
                      />

                      <File>Selecione a imagem</File>

                    </label>
                  </InputGroup>

                  <Button>
                    { uploading ? (<Load height={42} width={42}/>) : 'Enviar' }
                  </Button>
                </Form>
              )
        }

        { file && (
          <div className="previewImage">
            <span>Preview da imagem</span>
            <img src={file} alt="Preview Image"/>
          </div>
        ) }

        { !loading && photos.length === 0 && (
          <Warning>
            <span>Você ainda não tem fotos cadastradas</span>
          </Warning>
        ) }

        <PhotoContainer>
        { !loading && photos.map(photo => {
          return (
              <PhotoItem
                key={ photo.name }
                photo={ photo }
                onRemovePhoto={ handleDeletePhoto }
              />
          )
        })
        }
        </PhotoContainer>

      </Container>
    </>
  )
}

export default App
