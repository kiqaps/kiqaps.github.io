import { FC } from "react";
import styled from "styled-components";

const SectionView = styled.section`
  width: 100%;
  margin-top: 1rem;
  & hr {
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.mainTextColor};
  }
`

const SectionTitle = styled.h3`
  font-weight: 700;
  color: ${({theme}) => theme.boldTextColor};
`

interface SectionProps {
  title: string
}

export const Section: FC<SectionProps> = ({title, children}) => <>
  <SectionView>
    <hr />
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionView>
</>
