import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  passHref?: boolean;
}

export default function LocalizedLink({ href, children, ...rest }: LocalizedLinkProps) {
  const router = useRouter();

  return (
    <NextLink href={href} locale={router.locale} {...rest}>
      {children}
    </NextLink>
  );
} 