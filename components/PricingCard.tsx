import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import RichText from './RichText';

interface PricingCardProps {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
}

export default function PricingCard({ title, description, benefits, isOutlined, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined}>
      <Header isOutlined={isOutlined}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <Content>
        <PriceContainer>
          <Price>{children}</Price>
        </PriceContainer>
        {isAnyBenefitPresent && (
          <BenefitsList>
            {benefits.map((benefit, idx) => (
              <BenefitItem key={idx}>
                <CheckIcon>✓</CheckIcon>
                {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>
        )}
        <CustomButton isOutlined={isOutlined}>Demander une démo</CustomButton>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  background: rgb(var(--cardBackground));
  border: 2px solid ${(p) => (p.isOutlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  height: fit-content;

  &:hover {
    transform: translateY(-5px);
  }

  ${media('<=desktop')} {
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

const Header = styled.div<{ isOutlined?: boolean }>`
  padding: 3rem;
  background: ${(p) => (p.isOutlined ? 'rgb(var(--primary))' : 'transparent')};
  color: ${(p) => (p.isOutlined ? 'rgb(var(--textSecondary))' : 'inherit')};
  border-radius: 0.8rem 0.8rem 0 0;
`;

const Content = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Title = styled.h3`
  font-size: 2.8rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
`;

const PriceContainer = styled.div`
  text-align: center;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 3rem;
  font-weight: 600;
  
  span {
    font-size: 1.8rem;
    margin-left: 0.5rem;
    opacity: 0.8;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  gap: 1rem;
`;

const CheckIcon = styled.span`
  color: rgb(var(--primary));
  font-weight: bold;
`;

const CustomButton = styled(Button)<{ isOutlined?: boolean }>`
  width: 100%;
  margin-top: auto;
  background: ${(p) => (p.isOutlined ? 'rgb(var(--primary))' : 'transparent')};
  border: 2px solid ${(p) => (p.isOutlined ? 'transparent' : 'rgb(var(--primary))')};
  color: ${(p) => (p.isOutlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--primary))')};

  &:hover {
    background: ${(p) => (p.isOutlined ? 'rgb(var(--primary))' : 'rgba(var(--primary), 0.1)')};
  }
`;
