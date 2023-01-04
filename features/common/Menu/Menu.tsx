/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import {
  NavMenu,
  NavMenuList,
  NavMenuLogo,
  NavMenuListItem,
  ButtonSignUp,
  HambugerMenu,
  HideButtonMobile,
  LogoContainer,
} from './Menu.styles'
import { PageContainer } from '../Theme/styles'
import { colors } from '../Theme/theme'


const Menu = () => {
  return (
    <PageContainer bgColor={colors.electricViolet}>
      <NavMenu>
        <NavMenuLogo>
          <Link href="/">
            <LogoContainer>
              <img src="/logo@2x.png" alt="Logo Moomba" />
            </LogoContainer>
          </Link>
        </NavMenuLogo>
        <NavMenuList>
          <NavMenuListItem>
            <Link href="/">Inicio</Link>
          </NavMenuListItem>
          <NavMenuListItem>
            <Link href="/about">Acerca</Link>
          </NavMenuListItem>
          <NavMenuListItem>
            <Link href="/contact">Contact</Link>
          </NavMenuListItem>
        </NavMenuList>

        <HideButtonMobile>
          <ButtonSignUp>
            Registro
          </ButtonSignUp>
        </HideButtonMobile>


        <HambugerMenu>
          <svg viewBox="0 0 80 80" width="30" height="30">
            <rect width="80" height="10"></rect>
            <rect y="30" width="80" height="10"></rect>
            <rect y="60" width="80" height="10"></rect>
          </svg>
        </HambugerMenu>

      </NavMenu>
    </PageContainer>
  )
}

export default Menu
