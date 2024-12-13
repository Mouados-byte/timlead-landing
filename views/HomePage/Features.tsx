import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Gestion de Ticketing',
    description: 'Gérez efficacement vos interventions, le suivi des demandes et la résolution de problèmes pour le raccordement et la maintenance client.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Géotracking en temps réel',
    description: 'Suivez vos techniciens sur le terrain et optimisez les itinéraires en temps réel pour une meilleure efficacité opérationnelle.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Cartographie interactive',
    description: 'Visualisez clients, équipes et ressources sur une carte dynamique pour une gestion géospatiale optimale de vos opérations.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Planification intelligente',
    description: 'Optimisez les rondes d`intervention, la maintenance et le suivi des parcours réalisés par vos techniciens.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Gestion d`inventaire',
    description: 'Suivez les taux d`occupation des équipements et gérez le Provisionning de manière efficace et centralisée.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Communication instantanée',
    description: 'Chat en temps réel avec les techniciens, partage de photos, documents et vidéos depuis le terrain.',
  }
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
