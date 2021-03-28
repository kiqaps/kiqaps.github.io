import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Header } from "./components/Header"
import { Section } from "./components/Section"
import { HistoryItem } from "./components/HistoryItem"
import { Container } from "./styles/layout"
import { SkillItem } from "./components/SkillItem"

export const App: FC = () => {
  const { t } = useTranslation()

  const getTranslatedArray = (key: string) => {
    let items = t(key, { returnObjects: true }) as Array<any>
    if(typeof items === 'string') {
      items = []
    }
    return items
  }

  let workExperienceItems = getTranslatedArray('sections.items.work_experience')
  let educationItems = getTranslatedArray('sections.items.education')
  let skillsItems = getTranslatedArray('sections.items.skills')

  return <Container>
    <Header />
    <Section title={t('sections.titles.work_experience')}>
      {
        workExperienceItems.map((item, idx) => <HistoryItem key={idx} title={item.role} when={item.whereAndWhen} description={item.description} />)
      }
    </Section>
    <Section title={t('sections.titles.education')}>
      {
        educationItems.map((item, idx) => <HistoryItem key={idx} title={item.role} when={item.whereAndWhen} description={item.description} />)
      }
    </Section>
    <Section title={t('sections.titles.skill')}>
      {
        skillsItems.map((item, idx) => <SkillItem key={idx} content={item} />)
      }
    </Section>
  </Container>
}
