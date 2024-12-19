import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import { media } from 'utils/media';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    translationKey: 'ticketing',
    demoImage: '/demo/ticket.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    translationKey: 'geotracking',
    demoImage: '/demo/geo_tracking.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    translationKey: 'mapping',
    demoImage: '/demo/map.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    translationKey: 'planning',
    demoImage: '/demo/planning.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    translationKey: 'inventory',
    demoImage: '/demo/inventory.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    translationKey: 'mobile',
    demoImage: '/demo/mobile.jpg'
  }
];

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function FeaturesPage() {
  const { t } = useTranslation('common');
  
  return (
    <Page 
      title={t('featuresPage.title')} 
      description={t('featuresPage.description')}
    >
      <Container>
        <HeaderSection>
          <Title>{t('featuresPage.mainTitle')}</Title>
          <Description>{t('featuresPage.mainDescription')}</Description>
        </HeaderSection>
        <FeaturesGrid>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.translationKey} reversed={index % 2 !== 0}>
              <FeatureContent>
                <FeatureIcon src={feature.imageUrl} alt={t(`features.items.${feature.translationKey}.title`)} />
                <FeatureTitle>{t(`features.items.${feature.translationKey}.title`)}</FeatureTitle>
                <FeatureDescription>{t(`features.items.${feature.translationKey}.description`)}</FeatureDescription>
              </FeatureContent>
              <FeatureImageContainer>
                <img 
                  src={feature.demoImage} 
                  alt={t('featuresPage.demoAlt', { feature: t(`features.items.${feature.translationKey}.title`) })} 
                />
              </FeatureImageContainer>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Page>
  );
}

const HeaderSection = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: center;
  max-width: 80rem;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const FeatureCard = styled.div<{ reversed?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.reversed ? 'row-reverse' : 'row')};
  gap: 5rem;

  ${media('<=desktop')} {
    flex-direction: column;
    gap: 3rem;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const FeatureIcon = styled.img`
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;
`;

const FeatureImageContainer = styled.div`
  flex: 1;
  border-radius: 0.6rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-height: 550px; /* Adjust this value based on your design */
    object-fit: contain; /* Ensures the image fits without stretching */
    aspect-ratio: 16 / 9; /* Keeps a consistent aspect ratio */
  }
`;
