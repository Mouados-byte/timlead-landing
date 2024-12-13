import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Forfaits d'abonnement mensuel</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Standard"
          description="Pour les petites équipes"
          benefits={[
            'Gestion de ticketing',
            'Géotracking basique',
            'Application mobile',
            'Chat instantané',
            'Support par email'
          ]}
        >
          Contactez-nous
        </PricingCard>
        <PricingCard
          title="Professional"
          description="Pour les équipes en croissance"
          benefits={[
            'Toutes les fonctionnalités Standard',
            'Cartographie interactive avancée',
            'Gestion de projet complète',
            'CRM client intégré',
            'Support prioritaire'
          ]}
          isOutlined
        >
          Contactez-nous
        </PricingCard>
        <PricingCard
          title="Enterprise"
          description="Pour les grandes organisations"
          benefits={[
            'Toutes les fonctionnalités',
            'Personnalisation avancée',
            'Account manager dédié',
            'SLA garantis',
            'Formation sur mesure'
          ]}
        >
          Sur devis
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
