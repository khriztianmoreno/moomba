import Link from 'next/link'
import Image from 'next/image'

import {
  NavMenu,
  NavMenuList,
  NavMenuLogo,
  NavMenuListItem,
} from './Menu.styles'


const Menu = () => {
  return (
    <NavMenu>
      <NavMenuLogo>
        <Link href="/">
          <Image src="/logo@2x.png" alt="Logo Moomba" width={254} height={72} />
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
      <button>
        Registro
      </button>
    </NavMenu>
  )
}

export default Menu
