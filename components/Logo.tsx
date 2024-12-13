import Image from 'next/image';

export default function Logo({ ...rest }) {
  return <>
    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
    <h1 className="text-2xl font-bold h-fit">TimLead</h1>
  </>;

}
