import LocalizedLink from 'components/LocalizedLink';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

// Define types for the new API response format
interface FeatureInfo {
  id: number;
  name: string;
  active: boolean;
}

interface PlanInfo {
  id: number;
  name: string;
  price: string;
  stripe_price_id: string;
  features: FeatureInfo[];
}

// Define the frontend feature keys as a type
type FrontendFeatureKey = 'ticketing' | 'planning' | 'chat' | 'projectManagement' | 'mapping' | 'geotracking' | 'crm';

// Define the backend module names as a type
type BackendModuleKey = 'tickets' | 'schedule' | 'conversation' | 'equipment' | 'map' | 'ai' | 'statistics';

export default function PricingTablesSection() {
  const { t } = useTranslation('common');
  const [plans, setPlans] = useState<PlanInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Frontend feature keys that will be displayed in the table
  const featureKeys: FrontendFeatureKey[] = [
    'ticketing',
    'planning',
    'chat',
    'projectManagement',
    'mapping',
    'geotracking',
    'crm'
  ];

  // Map between frontend feature keys and backend module names
  const featureToModuleMap: Record<FrontendFeatureKey, BackendModuleKey> = {
    'ticketing': 'tickets',
    'planning': 'schedule',
    'chat': 'conversation',
    'projectManagement': 'equipment',
    'mapping': 'map',
    'geotracking': 'map', // both mapping and geotracking depend on the map module
    'crm': 'ai' // assuming ai module controls crm features
  };

  useEffect(() => {
    // Fetch pricing data from your Rails backend
    const fetchPricingData = async () => {
      try {
        setLoading(true);

          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          console.log("API URL:", apiUrl);
          const response = await fetch(`${apiUrl}/api/v1/subscriptionslandingpage/plans`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
        
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        console.error('Error fetching pricing data:', err);
        setError('Failed to load pricing information');
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  // Helper function to determine if a frontend feature is active based on backend module
  const isFeatureActive = (plan: PlanInfo, frontendFeature: FrontendFeatureKey): boolean => {
    const backendModule = featureToModuleMap[frontendFeature];
    
    // Find the corresponding module in the plan's features
    const feature = plan.features.find(f => f.name === backendModule);
    
    // If the backend module is active, then the frontend feature is active
    return feature ? feature.active : false;
  };

  // Helper function for rendering feature availability
  const getFeatureAvailability = (plan: PlanInfo, frontendFeature: FrontendFeatureKey) => {
    return isFeatureActive(plan, frontendFeature) ? '✓' : '-';
  };

  // Find the highlighted plan (you can modify this logic as needed)
  const getHighlightedPlan = (): number | null => {
    // You might want to determine this based on your business logic
    // For example, highlight the middle plan or a specific plan by ID
    if (plans.length === 0) return null;
    
    // For now, let's highlight a plan in the middle (if there are at least 3 plans)
    return plans.length >= 3 ? plans[Math.floor(plans.length / 2)].id : null;
  };

  const highlightedPlanId = getHighlightedPlan();

  // Check if a plan should be highlighted
  const isPlanHighlighted = (planId: number): boolean => {
    return planId === highlightedPlanId;
  };

  if (loading) return <div>Loading pricing information...</div>;
  if (error) return <div>{error}</div>;
  if (plans.length === 0) return <div>No pricing information available</div>;

  return (
    <Wrapper>
      <Title>{t('pricing.monthlyTitle')}</Title>
      <Description>{t('pricing.monthlyDescription')}</Description>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>{t('pricing.features')}</th>
              {plans.map((plan) => (
                <th key={plan.id} className={isPlanHighlighted(plan.id) ? 'highlighted' : ''}>
                  {plan.name}
                  <Price>{plan.price}</Price>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((feature) => (
              <tr key={feature}>
                <td>{t(`pricing.features_list.${feature}`)}</td>
                {plans.map((plan) => (
                  <td key={`${plan.id}-${feature}`} className={isPlanHighlighted(plan.id) ? 'highlighted' : ''}>
                    {getFeatureAvailability(plan, feature)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="action-row">
              <td></td>
              {plans.map((plan) => (
                <td key={`action-${plan.id}`} className={isPlanHighlighted(plan.id) ? 'highlighted' : ''}>
                  <LocalizedLink href="/contact">
                    <ActionButton className={isPlanHighlighted(plan.id) ? 'highlighted' : ''}>
                      {plan.price.includes('Contact') ? t("pricing.contact") : t("pricing.try")}
                    </ActionButton>
                  </LocalizedLink>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}

// The styled components remain the same as in your original code
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