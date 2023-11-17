import { useState } from 'react'
import * as S from './style'
import { useAuthRegistrationMutation } from '../../services/user'

export const Authorization = ({ closeWindow, setUser }) => {
  const [regMode, setRegMode] = useState(false)

  const [errorMessage, setErrorMessage] = useState(false)
  const [isFormProcess, setIsFormProcess] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userCity, setUserCity] = useState('')

  const checkAndRegistration = async () => {
    try {
      setIsFormProcess(true)
      await userRegistration({
        email,
        password,
        userName,
        userSurname,
        userCity,
      })
      closeWindow()
      setUser('username')
    } catch (error) {
      setErrorMessage(errorUserRegistration)
    } finally {
      setIsFormProcess(false)
    }
  }

  const handleRegister = () => {
    if (!email) {
      setErrorMessage('Укажите email адрес')
      return
    }
    if (!password) {
      setErrorMessage('Укажите пароль')
      return
    }
    if (password !== repeatPassword) {
      setErrorMessage('Указанные пароли не совпадают')
      return
    } else {
      checkAndRegistration()
    }
  }

  const handleLogin = () => {
    if (!email) {
      setErrorMessage('Укажите email адрес')
      return
    }
    if (!password) {
      setErrorMessage('Укажите пароль')
      return
    }
  }

  const switchButtonRegMode = () => {
    setRegMode(true)
  }

  const [userRegistration, { error: errorUserRegistration }] =
    useAuthRegistrationMutation()

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock $height={regMode ? '647px' : '439px'}>
          <S.ModalBlockClosedSvg onClick={closeWindow}>
            <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
          </S.ModalBlockClosedSvg>
          <S.ModalFormLogin $height={regMode ? '647px' : '439px'}>
            <S.ModalFormLogo>
              <S.ModalFormLogoImg src="/img/logo_modal.png" />
            </S.ModalFormLogo>
            {regMode ? (
              <>
                <S.ModalFormInput
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="password"
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={(e) => {
                    setRepeatPassword(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Имя (необязательно)"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Фамилия (необязательно)"
                  value={userSurname}
                  onChange={(e) => {
                    setUserSurname(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Город (необязательно)"
                  value={userCity}
                  onChange={(e) => {
                    setUserCity(e.target.value)
                  }}
                  $marginBottom={'38px'}
                />
                {errorMessage && (
                  <S.ModalFormErrorMessage>
                    {errorMessage}
                  </S.ModalFormErrorMessage>
                )}
                <S.ModalFormButtonEnter
                  onClick={handleRegister}
                  disabled={isFormProcess}
                  $marginTop={'30px'}
                  $marginBottom={'0'}
                >
                  <S.ModalFormButtonEnterLink>
                    {isFormProcess ? 'Регистрация...' : 'Зарегистрироваться'}
                  </S.ModalFormButtonEnterLink>
                </S.ModalFormButtonEnter>
              </>
            ) : (
              <>
                <S.ModalFormInput
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <S.ModalFormInput
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  $marginTop={'30px'}
                />
                {errorMessage && (
                  <S.ModalFormErrorMessage>
                    {errorMessage}
                  </S.ModalFormErrorMessage>
                )}
                <S.ModalFormButtonEnter
                  $marginTop={'60px'}
                  onClick={handleLogin}
                >
                  <S.ModalFormButtonEnterLink>Войти</S.ModalFormButtonEnterLink>
                </S.ModalFormButtonEnter>
                <S.ModalFormButtonSignUp>
                  <S.ModalFormButtonSignUpLink onClick={switchButtonRegMode}>
                    Зарегистрироваться
                  </S.ModalFormButtonSignUpLink>
                </S.ModalFormButtonSignUp>
              </>
            )}
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
