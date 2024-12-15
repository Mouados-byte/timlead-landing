import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <TextContent>
          <CustomOverTitle>Solution tout-en-un de gestion d'opérations</CustomOverTitle>
          <Heading>Optimisez votre gestion d'opérations avec TIMLEAD</Heading>
          <Description>
            TIMLEAD est une plateforme tout-en-un dédiée à la gestion des opérations, permettant de 
            centraliser et d'optimiser vos processus pour une meilleure efficacité, réactivité et suivi en 
            temps réel.
          </Description>
        </TextContent>
        <MobileImageContainer>
          <HeroIllustration />
        </MobileImageContainer>
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

const TextContent = styled.div``;

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
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
