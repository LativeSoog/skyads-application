import { useEffect, useState } from 'react'
import { AdvertImageBar } from '../../components/AdvertImageBar/AdvertImageBar'
import * as S from './style'
import { ReviewsAdvert } from '../../components/ModalsAdvert/ReviewsAdvert'
import { useParams } from 'react-router-dom'
import {
  useGetCommentsAdvertQuery,
  useGetCurrentAdvertQuery,
} from '../../services/advert'
import { ButtonPhone } from '../../components/ButtonPhoneAdvert/ButtonPhone'
import { formatDateAndTime, formatDateSells, host } from '../../helper'
import { useSelector } from 'react-redux'
import { currentUser } from '../../store/selectors/users'
import { EditAdvert } from '../../components/ModalsAdvert/EditAdvert'
import { RemoveAdvert } from '../../components/ModalsAdvert/RemoveAdvert'

export const AdvertPage = () => {
  const params = useParams()
  const user = useSelector(currentUser)

  const [modalWindowReview, setModalWindowReview] = useState(false)
  const [modalWindowEditAdvert, setModalWindowEditAdvert] = useState(false)
  const [modalWindowPublication, setModalWindowPublication] = useState(false)

  const {
    data: currentAdvertData,
    isLoading: currentAdvertLoading,
    refetch: currentAdvertDataRefetch,
  } = useGetCurrentAdvertQuery(params.id)
  const { data: advertComments } = useGetCommentsAdvertQuery(params.id)

  const [currentImageAdvert, setCurrentImageAdvert] = useState(
    currentAdvertLoading && currentAdvertData?.images[0]
      ? host + currentAdvertData.images[0].url
      : '/img/no-photo.jpg',
  )

  useEffect(() => {
    if (!currentAdvertLoading && currentAdvertData?.images[0]) {
      setCurrentImageAdvert(host + currentAdvertData?.images[0].url)
    }
  }, [currentAdvertLoading, currentAdvertData])

  const handleOpenReview = () => {
    setModalWindowReview(true)
    document.body.style.overflow = 'hidden'
  }

  const handleOpenEdit = () => {
    setModalWindowEditAdvert(true)
    document.body.style.overflow = 'hidden'
  }

  const handleOpenPublication = () => {
    setModalWindowPublication(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalWindow = () => {
    if (modalWindowReview) {
      setModalWindowReview(false)
      document.body.style.overflow = 'unset'
    }

    if (modalWindowEditAdvert) {
      setModalWindowEditAdvert(false)
      document.body.style.overflow = 'unset'
    }

    if (modalWindowPublication) {
      setModalWindowPublication(false)
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      {modalWindowReview && (
        <ReviewsAdvert closeModalWindow={closeModalWindow} params={params} />
      )}
      {modalWindowEditAdvert && (
        <EditAdvert
          closeModalWindow={closeModalWindow}
          id={params.id}
          currentTitle={currentAdvertData.title}
          currentDescription={currentAdvertData.description}
          currentPrice={currentAdvertData.price}
          currentImages={currentAdvertData.images}
          advertDataRefetch={currentAdvertDataRefetch}
        />
      )}
      {modalWindowPublication && (
        <RemoveAdvert closeModalWindow={closeModalWindow} id={params.id} />
      )}

      <S.MainContainer>
        <S.MainMenu>
          <S.MainMenuLogoLink to={'/'}>
            <S.MainMenuLogoImg src="/img/logo.png" />
          </S.MainMenuLogoLink>
          <S.MainMenuForm>
            <S.MainMenuFormBtnLink to={'/'}>
              <S.MainMenuFormBtn>Вернуться на&nbsp;главную</S.MainMenuFormBtn>
            </S.MainMenuFormBtnLink>
          </S.MainMenuForm>
        </S.MainMenu>
      </S.MainContainer>

      {currentAdvertLoading ? (
        'Идёт загрузка'
      ) : (
        <>
          <S.MainAdvert>
            <S.AdvertContent>
              <S.AdvertLeft>
                <S.AdvertLeftFillImg>
                  <S.AdvertLeftImgBlock>
                    <S.AdvertLeftImgBlockImage src={currentImageAdvert} />
                  </S.AdvertLeftImgBlock>

                  <S.AdvertImgBar>
                    {currentAdvertData?.images.map((image) => {
                      return (
                        <AdvertImageBar
                          key={image.id}
                          link={host + image.url}
                          setCurrentImageAdvert={setCurrentImageAdvert}
                        />
                      )
                    })}
                  </S.AdvertImgBar>
                </S.AdvertLeftFillImg>
              </S.AdvertLeft>

              <S.AdvertRight>
                <S.AdvertRightBlock>
                  <S.AdvertRightBlockTitle>
                    {currentAdvertData.title}
                  </S.AdvertRightBlockTitle>
                  <S.AdvertRightBlockInfo>
                    <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                      {formatDateAndTime(currentAdvertData.created_on)}
                    </S.AdvertRightBlockInfoItem>
                    <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                      {currentAdvertData.user.city}
                    </S.AdvertRightBlockInfoItem>
                    <S.AdvertRightBlockInfoLink>
                      <S.AdvertRightBlockInfoItem
                        $color="#009EE4"
                        onClick={handleOpenReview}
                      >
                        {advertComments?.length} отзыва
                      </S.AdvertRightBlockInfoItem>
                    </S.AdvertRightBlockInfoLink>
                  </S.AdvertRightBlockInfo>

                  <S.AdvertRightBlockPrice>
                    {currentAdvertData.price}
                  </S.AdvertRightBlockPrice>
                  {currentAdvertData.user_id === user.id &&
                  currentAdvertData.user.email === user.email ? (
                    <S.AdvertRightButtonBlock>
                      <S.AdvertRightButton
                        $width="189px"
                        $marginRight="10px"
                        onClick={handleOpenEdit}
                      >
                        Редактировать
                      </S.AdvertRightButton>
                      <S.AdvertRightButton
                        $width="225px"
                        onClick={handleOpenPublication}
                      >
                        Снять с публикации
                      </S.AdvertRightButton>
                    </S.AdvertRightButtonBlock>
                  ) : (
                    <ButtonPhone
                      userPhoneNumber={currentAdvertData.user.phone}
                    />
                  )}

                  <S.AdvertRightBlockAuthor>
                    <S.AdvertRightBlockAuthorImgBlock>
                      <S.AdvertRightBlockAuthorImgBlockImage
                        src={
                          currentAdvertData.user.avatar
                            ? host + currentAdvertData.user.avatar
                            : ''
                        }
                      />
                    </S.AdvertRightBlockAuthorImgBlock>

                    <S.AdvertRightBlockAuthorContact>
                      <S.MainMenuFormBtnLink
                        to={`/profile-seller/${currentAdvertData.user.id}`}
                      >
                        <S.AdvertRightBlockAuthorContactName>
                          {currentAdvertData.user.name}
                        </S.AdvertRightBlockAuthorContactName>
                      </S.MainMenuFormBtnLink>
                      <S.AdvertRightBlockAuthorContactAbout>
                        Продает товары с{' '}
                        {formatDateSells(currentAdvertData.user.sells_from)}
                      </S.AdvertRightBlockAuthorContactAbout>
                    </S.AdvertRightBlockAuthorContact>
                  </S.AdvertRightBlockAuthor>
                </S.AdvertRightBlock>
              </S.AdvertRight>
            </S.AdvertContent>
          </S.MainAdvert>
          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>

            <S.MainContent>
              <S.MainText>
                {currentAdvertData.description
                  ? currentAdvertData.description
                  : 'Пользователь не указал описание к данному объявлению'}
              </S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </>
      )}
    </>
  )
}
