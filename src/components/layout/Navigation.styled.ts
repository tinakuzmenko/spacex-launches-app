import styled from '@emotion/styled';

export const NavListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  padding: 1rem 3rem;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;

    &.active {
      text-decoration: underline;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    gap: 1rem;

    a {
      color: white;
    }
  }
`;
