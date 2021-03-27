import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 50%;
  height: 40%;
  padding: 10%;
  margin: 2%;
  border-radius: 20px;
  color: ${({ theme }) => theme.text};
`;

const Card = (props) => {
  return (
    <StyledCard>
      <h1>Welcome</h1>
      <ul>
        <li>Dark mode</li>
        <li>Dark mode</li>
        <li>Dark mode</li>
      </ul>
    </StyledCard>
  );
};

export default Card;
