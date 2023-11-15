import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`
export const MainCenterBlock = styled.div`
  margin: 0 auto;
`

export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
`

export const MainMenuLogoLink = styled(Link)`
  width: 54;
  height: 50px;
`

export const MainMenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`

export const MainMenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`

export const MainMenuFormBtnLink = styled(Link)``

export const MainMenuFormBtn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
`

export const MainTitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`

export const ProfileContent = styled.div`
  max-width: 834px;
`

export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`

export const ProfileSeller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
`

export const ProfileSellerLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 50px;
`

export const ProfileSellerImgBlock = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`

export const ProfileLink = styled(Link)``

export const ProfileSellerImgBlockImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ProfileSellerRight = styled.div`
  width: auto;
`

export const ProfileSellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
`

export const ProfileSellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
`

export const ProfileSellerInfo = styled(ProfileSellerCity)``

export const ProfileSellerBtn = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`

export const ProfileSellerBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px);
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`