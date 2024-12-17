import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <Title>Forfaits d'abonnement mensuel</Title>
      <Description>Prix par utilisateur et par mois, engagement annuel</Description>
      
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Fonctionnalités</th>
              <th>Start<Price>39.90€</Price></th>
              <th>Advanced<Price>44.90€</Price></th>
              <th className="highlighted">Premium<Price>55€</Price></th>
              <th>Advanced Network<Price>59.90€</Price></th>
              <th>Premium Network<Price>65€</Price></th>
              <th>Enterprise<Price>Sur demande</Price></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gestion de ticketing</td>
              <td>✓</td>
              <td>✓</td>
              <td className="highlighted">✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Planification automatique</td>
              <td>-</td>
              <td>✓</td>
              <td className="highlighted">✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Affectation multi-projet</td>
              <td>-</td>
              <td>✓</td>
              <td className="highlighted">✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Chat instantané</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Gestion de projet</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Cartographie interactive</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Géotracking en temps réel</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>CRM client intégré</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">-</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Stockage</td>
              <td>5 GiB</td>
              <td>10 GiB</td>
              <td className="highlighted">20 GiB</td>
              <td>15 GiB</td>
              <td>25 GiB</td>
              <td>+25 GiB</td>
            </tr>
            <tr>
              <td>Gestion des ressources</td>
              <td>-</td>
              <td>-</td>
              <td className="highlighted">-</td>
              <td>0.7€/ressource<br/>(jusqu'à 750)</td>
              <td>0.5€/ressource<br/>(751-1500)</td>
              <td>Sur mesure<br/>(+1500)</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Email</td>
              <td>Prioritaire</td>
              <td className="highlighted">Premium</td>
              <td>Premium</td>
              <td>Premium</td>
              <td>Dédié</td>
            </tr>
            <tr className="action-row">
              <td></td>
              <td><ActionButton>Essayer</ActionButton></td>
              <td><ActionButton>Essayer</ActionButton></td>
              <td className="highlighted"><ActionButton className="highlighted">Essayer</ActionButton></td>
              <td><ActionButton>Essayer</ActionButton></td>
              <td><ActionButton>Essayer</ActionButton></td>
              <td><ActionButton>Contact</ActionButton></td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
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
  border-collapse: collapse;
  min-width: 90rem;
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
  font-size: 2.4rem;
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
