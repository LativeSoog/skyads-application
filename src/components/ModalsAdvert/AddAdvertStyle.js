import styled, { css } from 'styled-components'
import {
  BtnHoverMixin,
  BtnNotActiveMixin,
  BtnRegularMixin,
} from '../../style/AppStyle'

const ModalFormNewAdvInputMixin = css`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 80%;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`

export const ModalContentTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
  }
`

export const ModalBtnClosedSvg = styled.svg`
  position: relative;
  left: 100%;
  top: -60px;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover {
    stroke: #009ee4;
  }

  @media (max-width: 768px) {
    left: 90%;
    top: -40px;
  }
`

export const ModalFormNewAdv = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
`

export const ModalFormNewAdvBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`

export const ModalFormNewAdvLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
  }
`

export const ModalFormNewAdvInput = styled.input`
  ${ModalFormNewAdvInputMixin};
  width: 100%;
  font-size: 16px;
  line-height: 24px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  @media (max-width: 768px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    line-height: 1;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`

export const ModalFormNewAdvArea = styled.textarea`
  ${ModalFormNewAdvInputMixin};
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 107px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`

export const ModalFormNewAdvPhoto = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`

export const ModalNewAdvPhotoSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    display: block;
    margin-left: 0px;
  }
`

export const ModalFormNewAdvBarImg = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 278px;
    justify-content: start;
    margin: 0px -5px 10px;
  }
`

export const ModalFormNewAdvImgBlock = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    min-width: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`

export const ModalFormNewAdvImgBlockImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
`

export const ModalFormNewAdvPhotoUpload = styled.input``

export const ModalFormNewAdvImgBlockImageCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    transform: rotate(90deg);
  }
`

export const ModalFormNewAdvBlockPrice = styled(ModalFormNewAdvBlock)`
  position: relative;
`

export const ModalFormNewAdvInputPrice = styled.input`
  ${ModalFormNewAdvInputMixin};
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 100%;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const ModalFormNewAdvInputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #ffffff;

  &::after {
    content: '₽';
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 12px;
    left: auto;
    right: 18px;

    &::after {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const ModalSuccessBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalSuccessBtn = styled.div`
  ${BtnRegularMixin}
  margin-top: 10px;
  height: 50px;
  width: 200px;

  &:hover {
    ${BtnHoverMixin}
  }
`

export const ModalInfoMessage = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: ${(props) => props.$colorText};
  text-align: center;
`

export const ModalFormNewAdvBtn = styled.div`
  ${({ $condition }) => ($condition ? BtnRegularMixin : BtnNotActiveMixin)}
  margin-top: 10px;
  width: 181px;
  height: 50px;

  ${({ $condition }) => ($condition ? `&:hover { ${BtnHoverMixin} }` : null)}

  @media (max-width: 768px) {
    width: 100%;
    height: 46px;
  }
`
