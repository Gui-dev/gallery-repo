import styled from 'styled-components'

export const Container = styled.div`
  max-height: 30rem;
  width: 100%;
  margin-bottom: 4rem;
`

export const Content = styled.div`
  background-color: var(--blue-600);
  padding: 2rem;
  height: 30rem;
  max-height: 30rem;
  width: 100%;
  border-radius: 5px;
  text-align: center;

  /* @media (min-width: 768px) {
    height: 25rem;
  } */

  @media (min-width: 1024px) {

  }

  img {
    height: 20rem;
    max-width: 100%;
    margin-bottom: 2rem;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.6rem;
  }
`
