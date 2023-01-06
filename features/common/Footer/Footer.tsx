import {
  ContainerIcons,
  Logo,
  Paragraph,
} from './Footer.styles'
import SplitLayout from '../../common/SplitLayout'

const Footer = () => {
  return(
    <SplitLayout
      element="footer"
      alignItems="center"
      bgColor="#f7f5f6"
    >
      <SplitLayout.Left>
        <Logo />
        <Paragraph>
          Ut wisi enim ad minim veniam, quis sit Sed Diam Nonu - Mmy Nibh Euismod
        </Paragraph>
      </SplitLayout.Left>
      <SplitLayout.Right>
        <Paragraph>
          <ContainerIcons /> <br />
          Términos y condiciones | Política de privacidad
        </Paragraph>
      </SplitLayout.Right>
    </SplitLayout>
  )
}

export default Footer
