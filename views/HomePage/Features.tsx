import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import { useTranslation } from 'next-i18next';
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
    translationKey: 'ticketing',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    translationKey: 'geotracking',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    translationKey: 'mapping',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    translationKey: 'planning',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    translationKey: 'inventory',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    translationKey: 'mobile',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    translationKey: 'chat',
  }
];

export default function Features() {
  const { t } = useTranslation('common');
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
          {FEATURES.map((singleFeature) => (
            <CardWrapper key={singleFeature.translationKey}>
              <BasicCard 
                imageUrl={singleFeature.imageUrl}
                title={t(`features.items.${singleFeature.translationKey}.title`)}
                description={t(`features.items.${singleFeature.translationKey}.description`)}
              />
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
