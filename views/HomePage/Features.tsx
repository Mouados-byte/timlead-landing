import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '6px', zIndex: 2 }}
      onClick={onClick}
    >
      <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
        <path d="M15 6l-6 6 6 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '6px', zIndex: 2 }}
      onClick={onClick}
    >
      <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
        <path d="M9 18l6-6-6-6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}


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
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Application mobile performante',
    description: 'Donnez à vos équipes terrain accès à toutes les informations via une application mobile intuitive.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Chat en temps réel',
    description: 'Chat en temps réel avec les techniciens, partage de photos, documents et vidéos depuis le terrain.',
  }
];

export default function Features() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container>
      <CarouselWrapper>
        <Slider {...settings}>
          {FEATURES.map((singleFeature, idx) => (
            <CardWrapper key={singleFeature.title}>
              <BasicCard {...singleFeature} />
            </CardWrapper>
          ))}
        </Slider>
      </CarouselWrapper>
    </Container>
  );
}

const CarouselWrapper = styled.div`
  margin: 2rem 0;
  
  .slick-slide {
    padding: 0 1rem;
  }

  .slick-dots {
    bottom: -40px;
  }

  .slick-prev, .slick-next {
    &:before {
      color: var(--primary);
    }
  }
`;

const CardWrapper = styled.div`
  padding: 0.5rem;
`;
