/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Left,
  LeftSpot,
  RightSpot,
  SplitLayoutContainer,
} from './SplitLayout.styles';
import { PageContainer } from '../Theme/styles';

const SplitLayoutLeft = ({ children }) => (
  <Left>{children}</Left>
)

const SplitLayoutRight = ({ children }) => {
  if (children) {
    return <div className="split-layout__right">{children}</div>
  }

  return null
}

const SpotImage = ({ src }) => <img src={src} alt="" />

const SplitLayout = ({
  children,
  alignItems = 'flex-start',
  leftSpot = '',
  rightSpot = '',
  height = 'auto',
}) => {
  return (
    <Container className="layout" bgRightSpot={rightSpot} height={height}>
      {
        leftSpot
          ? <LeftSpot ><SpotImage src={leftSpot}/></LeftSpot>
          : null
      }
      <PageContainer>
        <SplitLayoutContainer alignItems={alignItems}>
          {children}
        </SplitLayoutContainer>
      </PageContainer>
      {
        rightSpot
          ? <RightSpot ><SpotImage src={rightSpot}/></RightSpot>
          : null
      }
    </Container>
  );
};

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
