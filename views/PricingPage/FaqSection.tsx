import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Questions fréquentes</SectionTitle>
      <Accordion title="Qu'est-ce qui différencie TIMLEAD des autres solutions de gestion opérationnelle ?">
        TIMLEAD se distingue par son approche tout-en-un qui combine gestion de ticketing, géotracking, 
        planification et CRM dans une seule plateforme. Notre solution est spécialement conçue pour 
        optimiser la gestion des équipes terrain, avec une interface intuitive et une application 
        mobile performante. Contrairement aux solutions traditionnelles, TIMLEAD offre une vision 
        complète et centralisée de vos opérations.
      </Accordion>

      <Accordion title="Comment TIMLEAD peut-il améliorer l'efficacité de nos équipes terrain ?">
        TIMLEAD permet un suivi en temps réel des techniciens via le géotracking, optimise les 
        itinéraires et facilite la communication instantanée. Les techniciens peuvent accéder à 
        toutes les informations nécessaires via l'application mobile, partager des photos et 
        documents, et mettre à jour leur statut d'intervention en temps réel. Cela permet une 
        meilleure coordination et une réduction significative des temps d'intervention.
      </Accordion>

      <Accordion title="Quelle est la durée moyenne de déploiement de TIMLEAD ?">
        Le déploiement de TIMLEAD est rapide et peut être réalisé en quelques semaines selon la 
        taille de votre organisation. Notre équipe vous accompagne à chaque étape : configuration 
        initiale, formation des utilisateurs, et support continu. La plateforme est conçue pour 
        être intuitive, permettant une prise en main rapide par vos équipes.
      </Accordion>

      <Accordion title="Comment TIMLEAD gère-t-il la sécurité des données ?">
        La sécurité des données est une priorité pour TIMLEAD. Notre plateforme utilise des 
        protocoles de cryptage avancés, des sauvegardes régulières, et respecte les normes de 
        sécurité les plus strictes. Toutes les données sont hébergées sur des serveurs sécurisés, 
        et nous assurons une conformité totale avec les réglementations en vigueur, notamment le RGPD.
      </Accordion>

      <Accordion title="Quels types de support et d'accompagnement proposez-vous ?">
        Nous offrons plusieurs niveaux de support selon vos besoins : support technique par email 
        et téléphone, documentation complète, formations personnalisées, et pour les entreprises, 
        un accompagnement dédié avec un account manager. Notre équipe est disponible pour vous 
        aider à optimiser l'utilisation de TIMLEAD et répondre à vos questions.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
