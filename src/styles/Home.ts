import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 10%;

  h1 {
    font-size: 5rem;
    font-weight: bold;
  }

  .previewImage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;

    span {
      font-size: 1.4rem;
      color: var(--white);
      margin-top: 1rem;
    }

    > img {
      height: 15rem;
      margin-top: 1rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
  }
`

export const InputFile = styled.input`
  display: none;
`

export const File = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
  height: 5rem;
  width: 30rem;
  border: 1px solid var(--blue-800);
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 320px) {
    font-size: 1.8rem;
    width: 25rem;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
  height: 5rem;
  width: 10rem;
  background-color: var(--blue-600);
  border: 1px solid var(--blue-800);
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.1, '#218DA6')};
  }
`

export const Warning = styled.div`
  margin-top: 6rem;

  span {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  padding: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`
