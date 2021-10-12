import React from 'react'

import { GlobalStyle } from './styles/global'
import { Container, Form, InputGroup, InputFile, File, Button } from './styles/Home'

function App () {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form>
          <InputGroup>
            <label htmlFor="inpuFile">
              <InputFile
                type="file"
                id="inpuFile"
              />

              <File>Selecione a imagem</File>

            </label>
          </InputGroup>

          <Button>Enviar</Button>
        </Form>
      </Container>
    </>
  )
}

export default App
