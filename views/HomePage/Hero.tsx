import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

const COMPETITORS = [
  { name: 'Trello', logo: '/logos/trello.png' },
  { name: 'ServiceNow', logo: '/logos/servicenow.png' },
  { name: 'Praxedo', logo: '/logos/praxedo.png' },
  { name: 'QGIS', logo: '/logos/qgis.png' },
  { name: 'MS Project', logo: '/logos/msproject.png' },
  { name: 'WhatsApp', logo: '/logos/whatsapp.png' },
];

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <TextContent>
          <Heading>TIMLEAD,<br />Lead your business</Heading>
          <CustomOverTitle>Solution tout-en-un de gestion d'opérations</CustomOverTitle>
          <Description>
            Imaginez une seule solution réunissant la puissance de Trello, ServiceNow, Praxedo, QGIS Server, MS Project et WhatsApp pour transformer votre gestion en une expérience fluide, collaborative et intelligente : découvrez <strong>TimLead</strong>.
          </Description>
        </TextContent>
        <MobileImageContainer>
          <HeroIllustration />
        </MobileImageContainer>

        <FormulaContainer>
          <CompetitorLogos>
            <CompetitorsGrid>
              {COMPETITORS.map((competitor, index) => (
                <CompetitorWrapper key={competitor.name}>
                  <CompetitorLogo>
                    <img src={competitor.logo} alt={competitor.name} />
                  </CompetitorLogo>
                  {index % 3 !== 2 && <PlusSign>+</PlusSign>}
                </CompetitorWrapper>
              ))}
            </CompetitorsGrid>
            <TimleadContainer>
              <ArrowEquals>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              </ArrowEquals>
              <TimleadLogo>
                <img src="/logo_with_title.svg" alt="Timlead" />
              </TimleadLogo>
            </TimleadContainer>
          </CompetitorLogos>
        </FormulaContainer>

        <CustomButtonGroup>
          <Button href="/contact">
            Commencer maintenant
          </Button>
        </CustomButtonGroup>
      </Contents>
      <DesktopImageContainer>
        <HeroIllustration />
      </DesktopImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const TextContent = styled.div`
margin-top: 2.5rem`;

const DesktopImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    display: none;
  }
`;

const MobileImageContainer = styled.div`
  display: none;

  ${media('<=desktop')} {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 5.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const FormulaContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

const CompetitorLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  
  ${media('<=tablet')} {
    gap: 0.5rem;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

const TimleadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  ${media('<=tablet')} {
    padding-left: 0;
  }
`;

const CompetitorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  align-items: center;
  
  ${media('<=tablet')} {
    gap: 0.75rem;
  }
`;

const CompetitorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  ${media('<=tablet')} {
    gap: 0.5rem;
  }
`;

const CompetitorLogo = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  ${media('<=tablet')} {
    width: 6rem;
    height: 3rem;
  }
`;

const ArrowEquals = styled.div`
  width: 3rem;
  height: 3rem;
  color: rgb(var(--text));
  opacity: 0.5;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  ${media('<=desktop')} {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  ${media('<=tablet')} {
    width: 2rem;
    height: 2rem;
  }
`;

const TimleadLogo = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  ${media('<=tablet')} {
    width: 13rem;
    height: 7rem;
  }

  ${media('<=phone')}{
    width: 8rem;
    height:8rem;
  }
`;

const PlusSign = styled.span`
  font-size: 3rem;
  color: rgb(var(--text));
  opacity: 0.5;
  margin: 0 0.5rem;
  
  ${media('<=tablet')} {
    font-size: 1.5rem;
    margin: 0 0.25rem;
  }
`;
