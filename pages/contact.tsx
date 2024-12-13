import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page 
      title="Contactez-nous" 
      description="Besoin d'informations sur TIMLEAD ? Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans votre projet."
    >
      <HeaderSection>
        <HeaderContent>
          <Title>Parlons de votre projet</Title>
          <Description>
            Vous souhaitez optimiser la gestion de vos opérations terrain ? 
            Notre équipe est là pour vous accompagner et vous proposer la solution adaptée à vos besoins.
          </Description>
        </HeaderContent>
      </HeaderSection>
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  max-width: 140rem;
  margin: 0 auto;
  padding: 5rem 2rem;
  gap: 5rem;

  ${media('<=tablet')} {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`;

const HeaderSection = styled.div`
  background: rgb(var(--secondBackground));
  padding: 8rem 2rem;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: bold;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 3.6rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgb(var(--text));
  opacity: 0.8;
  max-width: 60rem;
  margin: 0 auto;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;
