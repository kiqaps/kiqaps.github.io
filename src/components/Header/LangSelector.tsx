import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const View = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 15px;

  @media (min-width: 576px) {
    justify-content: end;
  }
`
const ItemView = styled.li`
  @media (min-width: 576px) {
    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`

interface LangItemProps {
  selected: boolean
}

const Item = styled.button<LangItemProps>`
  cursor: pointer;
  color: ${({theme}) => theme.actionTextColor};
  text-decoration: ${({ selected}) => selected ? 'underline' : 'none'};
`

interface LangDefinition {
  label: string
  value: string
}

interface LangSelectorProps {
  langs: LangDefinition[]
  onChangeLanguage?: (lang: string) => void
}

export const LangSelector: FC<LangSelectorProps>  = ({ langs = [], onChangeLanguage = null}) => {

  const { i18n } = useTranslation()

  const handleChangeLanguage = (lang: string) => {
    onChangeLanguage && onChangeLanguage(lang)
  }

  return <View>
    {langs.map(({label, value}) =>
      <ItemView key={value}>
        <Item selected={i18n.language === value} onClick={() => handleChangeLanguage(value)}>{label}</Item>
      </ItemView>)}
  </View>
}
