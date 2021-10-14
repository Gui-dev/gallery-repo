import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  max-height: 30rem;
  width: 100%;
  margin-bottom: 4rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background-color: var(--blue-600);
  padding: 2rem;
  height: 35rem;
  max-height: 35rem;
  width: 100%;
  border-radius: 5px;
  text-align: center;

  img {
    max-height: 20rem;
    max-width: 100%;
    margin-bottom: 2rem;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.6rem;
  }

  button {
    align-self: flex-end;
    font-weight: bold;
    color: var(--dark);
    margin-top: 2rem;
    padding: 1rem;
    background-color: var(--blue-200);
    border: 1px solid var(--blue-400);
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${lighten(0.1, '#80BFCC')};
    }
  }
`
