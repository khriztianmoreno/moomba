import styled from '@emotion/styled';

export const Title = styled.h3`
  font: normal normal bold 4.6rem/6rem Poppins;
  letter-spacing: -1.15px;
  margin-bottom: 2rem;
`;

export const Description = styled.p(
  props => `
    color: ${props.theme.colors.aluminium};

    font-size: 1.8rem;
    letter-spacing: -0.45px;
    line-height: 3.6rem;
    margin-bottom: 5rem;
  `
);

export const Line = styled.div(
  props => `
    background: ${props.theme.colors.electricViolet} 0% 0% no-repeat padding-box;
    height: 0.5rem;
    margin-bottom: 2rem;
    width: 5rem;
  `
);


export const CallToAction = styled.button(
  props => `
    background-color: transparent;
    color: ${props.theme.colors.electricViolet};

    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -0.4px;
    line-height: 3.6rem;
  `
);
