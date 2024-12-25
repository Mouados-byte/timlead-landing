import LocalizedLink from 'components/LocalizedLink';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const PLANS = ['starter', 'advanced', 'professional', 'advancedNetwork', 'premiumNetwork', 'enterprise'] as const;
const FEATURES = ['ticketing', 'planning', 'chat', 'projectManagement', 'mapping', 'geotracking', 'crm'] as const;

const getFeatureAvailability = (plan: string, feature: string) => {
  const featureMap: Record<string, Record<string, string | boolean>> = {
    starter: { ticketing: '✓', planning: '-', chat: '-', projectManagement: '-', mapping: '-', geotracking: '-', crm: '-' },
    advanced: { ticketing: '✓', planning: '✓', chat: '-', projectManagement: '-', mapping: '-', geotracking: '-', crm: '-' },
    professional: { ticketing: '✓', planning: '✓', chat: '✓', projectManagement: '✓', mapping: '-', geotracking: '-', crm: '-' },
    advancedNetwork: { ticketing: '✓', planning: '✓', chat: '✓', projectManagement: '✓', mapping: '✓', geotracking: '✓', crm: '-' },
    premiumNetwork: { ticketing: '✓', planning: '✓', chat: '✓', projectManagement: '✓', mapping: '✓', geotracking: '✓', crm: '-' },
    enterprise: { ticketing: '✓', planning: '✓', chat: '✓', projectManagement: '✓', mapping: '✓', geotracking: '✓', crm: '✓' }
  };

  return featureMap[plan]?.[feature] || '-';
};

export default function PricingTablesSection() {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Title>{t('pricing.monthlyTitle')}</Title>
      <Description>{t('pricing.monthlyDescription')}</Description>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>{t('pricing.features')}</th>
              {PLANS.map((plan) => (
                <th key={plan} className={plan === 'professional' ? 'highlighted' : ''}>
                  {t(`pricing.plans.${plan}.name`)}
                  <Price>{t(`pricing.plans.${plan}.price`)}</Price>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feature) => (
              <tr key={feature}>
                <td>{t(`pricing.features_list.${feature}`)}</td>
                {PLANS.map((plan) => (
                  <td key={`${plan}-${feature}`} className={plan === 'professional' ? 'highlighted' : ''}>
                    {getFeatureAvailability(plan, feature)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="action-row">
              <td></td>
              <td>
                <LocalizedLink href="/contact">
                  <ActionButton>{t("pricing.try")}</ActionButton>
                </LocalizedLink>
              </td>
              <td>
                <LocalizedLink href="/contact">
                  <ActionButton>{t("pricing.try")}</ActionButton>
                </LocalizedLink>
              </td>
              <td className="highlighted">
                <LocalizedLink href="/contact">
                  <ActionButton className="highlighted">{t("pricing.try")}</ActionButton>
                </LocalizedLink>
              </td>
              <td>
                <LocalizedLink href="/contact">
                  <ActionButton>{t("pricing.try")}</ActionButton>
                </LocalizedLink>
              </td>
              <td>
                <LocalizedLink href="/contact">
                  <ActionButton>{t("pricing.try")}</ActionButton>
                </LocalizedLink>
              </td>
              <td>
                <LocalizedLink href="/contact">
                  <ActionButton>{t("pricing.contact")}</ActionButton>
                </LocalizedLink >
              </td>
            </tr >
          </tbody >
        </Table >
      </TableWrapper >
    </Wrapper >
  );
}

const Wrapper = styled.div`
  padding: 0;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 4rem;
  color: rgb(var(--text));
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: 100%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

const Table = styled.table`
  width: 100%;
  min-width: 1200px; /* Ensures minimum width for content */
  table-layout: fixed; /* Gives columns equal width */
  background: rgb(var(--cardBackground));

  th, td {
    padding: 2rem;
    text-align: center;
    border-bottom: 1px solid rgba(var(--text), 0.1);
    font-size: 1.6rem;
  }

  th {
    background: rgb(var(--cardBackground));
    font-weight: bold;
    white-space: nowrap;
    
    &.highlighted {
      background: rgb(var(--primary));
      color: rgb(var(--textSecondary));
    }
  }

  td {
    &:first-child {
      text-align: left;
      font-weight: 500;
    }
  }

  .highlighted {
    background: rgba(var(--primary), 0.05);
  }

  .action-row {
    td {
      padding: 3rem 2rem;
    }
  }
`;

const Price = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 1rem;
  white-space: nowrap;
`;

const ActionButton = styled.button`
  border: 2px solid rgb(var(--primary));
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background: transparent;
  color: rgb(var(--primary));
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 15rem;

  &:hover {
    background: rgba(var(--primary), 0.1);
  }

  &.highlighted {
    background: rgb(var(--primary));
    color: rgb(var(--textSecondary));

    &:hover {
      background: rgb(var(--primary));
      opacity: 0.9;
    }
  }
`;
