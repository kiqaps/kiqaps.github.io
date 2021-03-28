import { FC } from "react";
import styled from "styled-components";

const SkillItemView = styled.div`
  margin-top: 15px;
  padding: 0 0.5rem;

  @media (min-width: 576px) {
    padding: 0 2rem;
  }

  & > p {
    text-align: justify;
  }

  &:last-child {
    margin-bottom: 4rem;
  }
`

interface SkillItemProps {
  content: string
}

export const SkillItem: FC<SkillItemProps> = ({content}) => <SkillItemView><p>{content}</p></SkillItemView>
