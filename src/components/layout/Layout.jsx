import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Logo } from '@/components/micro/Logo'
import { Navigation } from '@/components/Navigation'
import { MobileNavigation } from '@/components/MobileNavigation'
import { SiteHeader } from '@/components/layout/Header'

function Header({ navigation }) {
    let [isScrolled, setIsScrolled] = useState(false)
  
    useEffect(() => {
      function onScroll() {
        setIsScrolled(window.scrollY > 0)
      }
      onScroll()
      window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
  
    return (
      <SiteHeader />
    )
}

export function Layout({ children, title, navigation, tableOfContents }) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
      section.links.find((link) => link.href === router.pathname)
  )

  return (
      <>
      <Header navigation={navigation} />
      {isHomePage}
      </>
  )
}