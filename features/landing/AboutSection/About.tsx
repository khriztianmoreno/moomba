import aboutBg from '../../../assets/img/about_bg.png'
import {
  AboutContainer,
  Button,
  Container,
  Content,
  Description,
  Title,
} from './About.styles'

const AboutSection = () => {
  return (
    <AboutContainer bgImage={aboutBg.src}>
      <Container>
        <Content>
          <Title>Moomba new Digital Platform Video</Title>
          <Description>
            Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad,
            minim veniam, quis sit. Duis autem vel - eum iriure dolor
            in sed diam Nonu Mmy Nibh Euismod
          </Description>
          <Button>
            More About Us
          </Button>
        </Content>
      </Container>
    </AboutContainer>
  )
}

export default AboutSection
