
import Image from 'next/image'
import cvLogo from '@/images/cv-logo-dark.svg'

export function Logo() {
    return (
      <Image
        src={cvLogo}
        alt="Cambodia Vision"
        layout="fixed"
        width={75}
        height={75}
        unoptimized
        priority
              
      />
    )
  }
  