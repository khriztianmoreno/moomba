import styled from "@emotion/styled";

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenuLogo = styled.div``;

export const NavMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavMenuListItem = styled.li(props => (`
  margin: 0 75px;

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
