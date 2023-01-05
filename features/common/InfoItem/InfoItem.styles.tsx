import styled from "@emotion/styled";

export const IconContainer = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h6`
  font-family: Poppins;
  font-size: 2rem;
  letter-spacing: -0.45px;
  line-height: 2.6rem;
  margin-bottom: 3rem;
`;

export const Description = styled.p(
  props => `
    color: ${props.theme.colors.aluminium};
    font-family: Poppins;
    font-size: 1.8rem;
    letter-spacing: -0.45px;
    line-height: 3.6rem;
    margin-bottom: 3rem;
  `
);

export const Line = styled.div(
  props => `
    background: ${props.lineColor} 0% 0% no-repeat padding-box;
    height: 0.2rem;
    margin-bottom: 2rem;
    width: 3rem;
  `
)
