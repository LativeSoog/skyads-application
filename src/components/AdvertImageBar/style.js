import styled from 'styled-components'

export const AdvertImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid
    ${({ $currentBorder }) => ($currentBorder ? '#009ee4' : '#f0f0f0')};
  margin: 0 5px;
`

export const AdvertImgBarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  cursor: pointer;
`
