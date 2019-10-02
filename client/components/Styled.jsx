import styled from 'styled-components'

export const GridForm = styled.form`
  width: 80%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  background-color: white;
`

export const ColOne = styled.span`
  grid-column: 1;
`

export const ColTwo = styled.input`
  grid-column: 2;
  
`

export const ColThree = styled.input`
  grid-column: 2;
  
`

export const Button = styled.button`
  grid-column: 2;
  width: 50%;
`
