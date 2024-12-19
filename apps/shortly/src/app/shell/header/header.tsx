import styled from 'tailwind';

const StyledHeader = styled.div`
  color: pink;
`;
export function Header() {
  return (
    <StyledHeader>
      <h1>Welcome to Header!</h1>
    </StyledHeader>
  );
}

export default Header;
