import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Gestion de Ticketing',
    description: 'Notre système de ticketing avancé permet une gestion complète du cycle de vie des interventions. Suivez en temps réel l`état des tickets, attribuez des priorités, et assurez une traçabilité totale des actions. Les techniciens peuvent mettre à jour leur progression directement depuis le terrain.',
    demoImage: '/demo/ticket.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Géotracking en temps réel',
    description: 'Optimisez vos opérations terrain grâce à notre système de géolocalisation en temps réel. Visualisez la position exacte de vos techniciens, estimez précisément les temps d`arrivée, et réagissez rapidement aux urgences en assignant le technicien le plus proche.',
    demoImage: '/demo/geo_tracking.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Cartographie interactive',
    description: 'Notre cartographie interactive offre une vue d`ensemble claire de vos opérations. Visualisez en un coup d`œil la répartition de vos équipes, les zones d`intervention, et les points d`intérêt pour une meilleure planification de vos activités.',
    demoImage: '/demo/map.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Planification intelligente',
    description: 'Simplifiez la gestion de vos plannings grâce à notre outil de planification intelligent. Le système optimise automatiquement les attributions en fonction des compétences, de la localisation et des priorités d`intervention.',
    demoImage: '/demo/planning.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Gestion d`inventaire',
    description: 'Gardez un contrôle total sur votre inventaire avec notre solution de gestion intégrée. Suivez en temps réel les stocks, les mouvements de matériel et anticipez les besoins pour garantir la continuité de vos opérations.',
    demoImage: '/demo/inventory.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Chat en temps réel',
    description: 'Facilitez la communication entre vos équipes grâce à notre système de chat intégré. Partagez instantanément photos, documents et vidéos depuis le terrain pour une collaboration efficace et une résolution rapide des problèmes.',
    demoImage: '/demo/chat.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Application mobile performante',
    description: 'Notre application mobile intuitive donne à vos équipes terrain tous les outils nécessaires dans leur poche. Accédez aux informations clients, aux historiques d`intervention et aux documentations techniques, même hors ligne.',
    demoImage: '/demo/mobile.jpg'
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Gestion complète des ressources',
    description: 'Une solution intégrée pour gérer vos sites, équipements, articles et clients. Centralisez toutes vos données essentielles, suivez l`état de vos ressources en temps réel et optimisez leur utilisation pour une meilleure efficacité opérationnelle.',
    demoImage: '/demo/resources.jpg'
  }
];

export default function FeaturesPage() {
  return (
    <Page 
      title="Fonctionnalités TIMLEAD" 
      description="Découvrez toutes les fonctionnalités de TIMLEAD pour optimiser la gestion de vos opérations terrain."
    >
      <Container>
        <HeaderSection>
          <Title>Nos Fonctionnalités</Title>
          <Description>
            TIMLEAD offre une suite complète d`outils pour optimiser vos opérations terrain. 
            Découvrez comment chaque fonctionnalité peut transformer votre gestion quotidienne.
          </Description>
        </HeaderSection>
        <FeaturesGrid>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} reversed={index % 2 !== 0}>
              <FeatureContent>
                <FeatureIcon src={feature.imageUrl} alt={feature.title} />
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
              <FeatureImageContainer>
                <img src={feature.demoImage} alt={`Démonstration ${feature.title}`} />
              </FeatureImageContainer>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Page>
  );
}

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  
  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: rgb(var(--text));
  max-width: 80rem;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const FeatureCard = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 5rem;
  padding: 3rem;
  background: rgb(var(--cardBackground));
  border-radius: 0.6rem;
  box-shadow: var(--shadow-md);

  ${media('<=tablet')} {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  ${media('<=tablet')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`;

const FeatureIcon = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.6rem;
  color: rgb(var(--text));
  line-height: 1.6;
  margin-top: 2rem;
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
