import styled from '@emotion/styled';
import media from '../../common/Theme/media';

export const BrandContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  margin-bottom: 16rem;

  ${media.md`
    flex-direction: row;

    svg {
      width: 60%;
    }
  `}
`;
