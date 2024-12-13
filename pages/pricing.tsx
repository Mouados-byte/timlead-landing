import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

export default function PricingPage() {
  return (
    <Page 
      title="Tarifs TIMLEAD" 
      description="Découvrez nos forfaits adaptés à vos besoins. Une solution complète de gestion opérationnelle pour optimiser vos interventions terrain."
    >
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const PricingHeader = styled.div`
  padding: 10rem 0;
  background: rgb(var(--secondBackground));
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: rgb(var(--text));
  max-width: 60rem;
  margin: 4rem auto;
  line-height: 1.6;
`;

const Features = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FeatureIcon = styled.span`
  color: rgb(var(--primary));
  font-size: 2rem;
  font-weight: bold;
`;

const FeatureText = styled.span`
  font-size: 1.6rem;
  color: rgb(var(--text));
`;
