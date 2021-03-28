import { FC } from "react";
import styled from "styled-components";
import { LangSelector } from "./LangSelector";
import {GitHub, Linkedin} from 'react-feather'
import { useTranslation } from "react-i18next";

const Avatar = styled.img`
  max-width: 200px;
  border-radius: 5px;
  margin-bottom: 1rem;
`

const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }

  & > h1 {
    text-align: center;
    color: ${({theme}) => theme.boldTextColor};
  }

  & strong {
    color: ${({theme}) => theme.boldTextColor};
  }
`

const AboutMeContainer = styled(InfoRow)`
  margin-top: 15px;
  text-align: justify;
`

const SocialMediaContainer = styled.span`
  display: flex;

  & a {
    cursor: pointer;
    color: ${({theme}) => theme.actionTextColor};

    &:not(:first-child) {
      margin-left: 15px;
    }
  }
`

export const Header: FC = () => {
  const languages = [
    {
      label: 'Português',
      value: 'pt'
    },
    {
      label: 'English',
      value: 'en'
    }
  ]

  const { t, i18n } = useTranslation()

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return <>
    <LangSelector langs={languages} onChangeLanguage={onChangeLanguage} />
    <Avatar src="https://avatars.githubusercontent.com/kiqaps" alt="Avatar" />

    <InfoRow>
      <h1>Caíque Araújo Spósito</h1>
      <SocialMediaContainer>
        <a href="https://github.com/kiqaps"><GitHub /></a>
        <a href="https://www.linkedin.com/public-profile/in/ca%C3%ADque-ara%C3%BAjo-sp%C3%B3sito-16066a145"><Linkedin /></a>
      </SocialMediaContainer>
    </InfoRow>

    <InfoRow>
      <span>{t('role')}</span>
      <span><strong>E-mail</strong>: kiqaps[at]gmail[dot]com</span>
    </InfoRow>

    <AboutMeContainer>
      {t('aboutMe')}
    </AboutMeContainer>
  </>
}
