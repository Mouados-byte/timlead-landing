import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Accueil', href: '/' },
  { title: 'Tarifs', href: '/pricing' },
  { title: "S'inscrire", href: '/contact' },
  { title: "Se connecter", href: 'https://timlead.com', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Page Title */}
        <meta name="description" content="TIMLEAD - Solution de gestion des interventions techniques et suivi des techniciens en temps réel" />

        {/* OpenGraph Meta Tags (for Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="TIMLEAD - Gestion des interventions techniques" />
        <meta property="og:description" content="Optimisez vos opérations techniques avec TIMLEAD : suivi GPS, gestion des tickets, planification des interventions" />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:image:alt" content="Interface TIMLEAD de gestion des interventions" />
        <meta property="og:url" content="https://getstarted.timlead.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TIMLEAD" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TIMLEAD - Gestion des interventions techniques" />
        <meta name="twitter:description" content="Optimisez vos opérations techniques avec TIMLEAD : suivi GPS, gestion des tickets, planification des interventions" />
        <meta name="twitter:image" content="/twitter.png" />
        <meta name="twitter:image:alt" content="Interface TIMLEAD de gestion des interventions" />
        <meta name="twitter:site" content="@timlead" />

        {/* Robots and Canonical */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://getstarted.timlead.com" />

        {/* Keywords */}
        <meta name="keywords" content="gestion interventions, suivi GPS techniciens, maintenance technique, GMAO, gestion tickets, planification interventions" />

        {/* Viewport for Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ColorModeScript />
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
