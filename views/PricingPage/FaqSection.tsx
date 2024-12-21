import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import { useTranslation } from 'next-i18next';

export default function FaqSection() {
  const { t } = useTranslation('common');
  
  return (
    <Wrapper>
      <SectionTitle>{t('pricing.faq.title')}</SectionTitle>
      {Object.keys(t('pricing.faq.items', { returnObjects: true })).map((key) => (
        <Accordion 
          key={key}
          title={t(`pricing.faq.items.${key}.question`)}
        >
          {t(`pricing.faq.items.${key}.answer`)}
        </Accordion>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
