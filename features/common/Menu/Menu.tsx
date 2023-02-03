/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router';

import {
  ButtonSignUp,
  HambugerMenu,
  HideButtonMobile,
  LogoContainer,
  NavMenu,
  NavMenuList,
  NavMenuListItem,
  NavMenuLogo,
  ParentContainer,
} from './Menu.styles'
import { PageContainer } from '../Theme/styles'

const Menu = () => {
  const router = useRouter();

  return (
    <ParentContainer>
      <PageContainer>
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
              <Link href="/" className={router.pathname == "/" ? "active" : ""}>
                Inicio
              </Link>
            </NavMenuListItem>
            <NavMenuListItem>
              <Link href="/about" className={router.pathname == "/about" ? "active" : ""}>
                Acerca
              </Link>
            </NavMenuListItem>
            <NavMenuListItem>
              <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>
                Contact
              </Link>
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
    </ParentContainer>
  )
}

export default Menu
