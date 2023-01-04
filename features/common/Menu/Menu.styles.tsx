import styled from '@emotion/styled';

import media from '../Theme/media';

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  ${media.md`
    padding: 4rem 0;
  `}
`;

export const NavMenuLogo = styled.div``;

export const NavMenuList = styled.ul`
  display: none;


  ${media.md`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  `}
`;

export const NavMenuListItem = styled.li(props => (`
  margin: 0 5rem;

  a {
    color: ${props.theme.colors.white};
    font: normal normal 400 1.8rem/3.4rem Poppins;
    letter-spacing: -0.45px;
    text-transform: capitalize;
    text-decoration: none;

    &:hover {
      color: ${props.theme.colors.springGreen};
    }
  }
`));

export const ButtonSignUp = styled.button(props => (`
  background: ${props.theme.colors.electricViolet};
  border-radius: 5px;
  color: ${props.theme.colors.white};
  height: 3rem;
  width: 9rem;

  ${media.md`
    height: 6rem;
    width: 19rem;
  `}
`));

export const HambugerMenu = styled.div`
  svg {
    fill: ${props => props.theme.colors.springGreen};
  }

  ${media.md`
    display: none;
  `}
`;

export const HideButtonMobile = styled.div(`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  ${media.md`
    display: block;
  `}
`);

export const HideButtonDesktop = styled.div`
  display: block;

  ${media.md`
    display: none;
  `}
`;

export const LogoContainer = styled.div`
  width: 16rem;
  object-fit: contain;

  ${media.md`
    width: 20rem;
  `}
`;
