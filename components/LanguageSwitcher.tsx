import { useRouter } from 'next/router';
import { Globe } from 'lucide-react';
import styled from 'styled-components';
import { media } from 'utils/media';
import { useState } from 'react';

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  margin-top: 8px;
  width: 192px;
  padding: 8px 0;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.2s;
  z-index: 10;
`;

const Container = styled.div`
  position: relative;
`;

const LanguageButton = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  background-color: white;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    width: 16px;
    height: 16px;

    ${media('<=desktop')} {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const LanguageOption = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  text-align: left;
  font-size: 14px;
  background-color: ${props => props.isActive ? '#eff6ff' : 'transparent'};
  color: ${props => props.isActive ? '#2563eb' : '#374151'};
  font-weight: ${props => props.isActive ? '500' : '400'};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isActive ? '#eff6ff' : '#f9fafb'};
  }

  .flag {
    font-size: 16px;
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setIsOpen(false);
  };

  let lang = languages.find(lang => lang.code === locale)?.code || 'fr';

  // Detect if we're on mobile using window.matchMedia
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;

  return (
    <Container
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <LanguageButton 
        aria-label="Select language"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <Globe />
        <span>
          {String(lang).charAt(0).toUpperCase() + String(lang).slice(1)}
        </span>
      </LanguageButton>
      
      <DropdownMenu isOpen={isOpen}>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            isActive={locale === lang.code}
          >
            <span className="flag">{lang.flag}</span>
            {lang.label}
          </LanguageOption>
        ))}
      </DropdownMenu>
    </Container>
  );
};

export default LanguageSwitcher;