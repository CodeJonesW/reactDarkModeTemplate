import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.body};
  font-size: 32px;
  color: ${({ theme }) => theme.text};
`;

const Card = (props) => {
  return (
    <div>
      <StyledButton> {props.name} </StyledButton>
    </div>
  );
};

export default Card;
