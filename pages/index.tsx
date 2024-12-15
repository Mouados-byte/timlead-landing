import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="TIMLEAD est une plateforme tout-en-un dédiée à la gestion des opérations, permettant de centraliser et d'optimiser vos processus pour une meilleure efficacité."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection 
            imageUrl="/demo-illustration-1.svg" 
            title="Une solution complète pour votre gestion opérationnelle" 
            overTitle="Pourquoi TIMLEAD ?"
          >
            <p>
              TIMLEAD centralise toutes les fonctionnalités essentielles pour la gestion des opérations : 
              gestion de Ticketing, planification des tâches, CRM, inventaire des équipements, etc. 
              Notre plateforme permet de simplifier la gestion et d`éviter la multiplication des outils.
            </p>
            <ul>
              <li>Interface intuitive et personnalisable</li>
              <li>Suivi en temps réel des techniciens</li>
              <li>Solution centralisée tout-en-un</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
