import { FC } from "react";
import styled from "styled-components";

const HistoryItemView = styled.div`
  margin-top: 15px;
  padding: 0 0.5rem;
  & > p {
    text-indent: 2rem;
    text-align: justify;
    margin-top: 10px;
  }

  @media (min-width: 576px) {
    padding: 0 2rem;
  }
`

const HistoryItemHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }

  & span:first-child {
    font-weight: 600;
    color: ${({theme}) => theme.boldTextColor};
  }
`

interface HistoryItemProps {
  title: string
  when: string
  description: string
}

export const HistoryItem: FC<HistoryItemProps> = ({ title, when, description }) => <HistoryItemView>
  <HistoryItemHeader>
    <span>{title}</span>
    <span>{when}</span>
  </HistoryItemHeader>
  <p>
    {description}
  </p>
</HistoryItemView>
