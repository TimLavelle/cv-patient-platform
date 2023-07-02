
import Image from 'next/image'
import cvLogo from '@/_assets/images/cv-logo-dark.svg'

export function Logo() {
  return (
    <Image
      src={cvLogo}
      alt="Cambodia Vision"
      width={75}
      height={75}
      unoptimized
      priority
    />
  )
}
