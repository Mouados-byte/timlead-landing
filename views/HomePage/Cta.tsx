import LocalizedLink from 'components/LocalizedLink';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useTranslation } from 'next-i18next';
import { media } from 'utils/media';

export default function Cta() {
  const { t } = useTranslation('common');
  
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>{t('cta.ready')}</OverTitle>
          <SectionTitle>{t('cta.discover')}</SectionTitle>
          <Description>{t('cta.description')}</Description>
          <ButtonGroup>
            <LocalizedLink href="/contact" passHref>
              <Button>
                {t('cta.demo')} <span>&rarr;</span>
              </Button>
            </LocalizedLink>
            <LocalizedLink href="/pricing" passHref>
              <OutlinedButton transparent>
                {t('cta.pricing')} <span>&rarr;</span>
              </OutlinedButton>
            </LocalizedLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
