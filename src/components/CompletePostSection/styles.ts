import styled from "styled-components";

export const TextSection = styled.section`
  background-color: ${(props) => props.theme["base-background"]};
  min-height: 50vh;

  p {
    margin: 0 auto;
    padding: 0 32px;
    width: 45%;
    max-width: 1200px;
    color: ${(props) => props.theme["base-text"]};
  }
`;
