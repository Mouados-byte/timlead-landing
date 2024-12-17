import Image from 'next/image';

export default function Logo({ ...rest }) {
  return <>
    <Image src="/logo_with_title.svg" alt="Logo" width={130} height={40} />
  </>;

}
