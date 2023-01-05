/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Left,
  LeftSpot,
  Right,
  RightSpot,
  SplitLayoutContainer,
} from './SplitLayout.styles';
import { PageContainer } from '../Theme/styles';

const SplitLayoutLeft = ({ children = null }) => {
  if (children) {
    return <Left>{children}</Left>
  }

  return null
}

const SplitLayoutRight = ({ children }) => {
  if (children) {
    return <Right>{children}</Right>
  }

  return null
}

const SpotImage = ({ src }) => <img src={src} alt="" />

const SplitLayout = ({
  children,
  alignItems = 'flex-start',
  justify = 'space-between',
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
        <SplitLayoutContainer alignItems={alignItems} justify={justify}>
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
