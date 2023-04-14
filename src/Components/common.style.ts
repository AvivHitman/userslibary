import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  padding: 6px;
  width: 80px;
  margin: 10px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize || "10px"};
`;

export { Button, Title };
