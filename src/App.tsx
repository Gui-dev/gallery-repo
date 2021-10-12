import React, { FormEvent, useEffect, useState } from 'react'

import { getAll } from './services/photo'

import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Load } from './components/Load'
import { Container, Form, InputGroup, InputFile, File, Button } from './styles/Home'

type PhotoProps = {
  name: string
  url: string
}

function App () {
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<PhotoProps[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true)
        const result = await getAll()
        setPhotos(result)
        setFile('')
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getPhotos()
  }, [])

  const handleImageChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement
    if (target.files) {
      const image = URL.createObjectURL(target.files[0])
      setFile(image)
    }
  }

  console.log(photos)

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
                <Form>
                  <InputGroup>
                    <label htmlFor="inpuFile">
                      <InputFile
                        type="file"
                        id="inpuFile"
                        onChange={ handleImageChange }
                      />

                      <File>Selecione a imagem</File>

                    </label>
                  </InputGroup>

                  <Button>
                    Enviar
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

      </Container>
    </>
  )
}

export default App
