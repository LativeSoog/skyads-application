import styled, { css } from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

const ModalFormEditAdvInputMixin = css`
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
  overflow-y: auto;
`

export const ModalContentTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`
export const ModalBtnClosedContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ModalBtnClosedSvg = styled.svg`
  position: absolute;
  top: -50px;
  left: 99%;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover {
    stroke: #009ee4;
  }
`

export const ModalFormEditAdv = styled.form`
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

export const ModalFormEditAdvBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
`

export const ModalFormEditAdvLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`

export const ModalFormEditAdvInput = styled.input`
  ${ModalFormEditAdvInputMixin};
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
`

export const ModalFormEditAdvArea = styled.textarea`
  ${ModalFormEditAdvInputMixin};
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
`

export const ModalFormEditAdvPhoto = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
`

export const ModalEditAdvPhotoSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
`

export const ModalFormEditAdvBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow: hidden;
`

export const ModalFormEditAdvImgBlock = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;
`

export const ModalFormEditAdvImgBlockImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
`

export const ModalFormEditAdvImgBlockImageCover = styled.div`
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

export const ModalFormEditAdvImgBlockDel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: #0080c1;
  opacity: 0;
  cursor: pointer;

  ${ModalFormEditAdvImgBlock}:hover & {
    opacity: 1;
  }
`

export const ModalFormEditAdvBlockPrice = styled(ModalFormEditAdvBlock)`
  position: relative;
`

export const ModalFormEditAdvInputPrice = styled.input`
  ${ModalFormEditAdvInputMixin};
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
`

export const ModalFormEditAdvInputPriceCover = styled.div`
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
`

export const ModalFormEditAdvBtn = styled.div`
  ${BtnRegularMixin}
  margin-top: 10px;
  width: 181px;
  height: 50px;

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

export const FileInput = styled.input`
  display: none;
`
