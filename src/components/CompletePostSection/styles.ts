import styled from "styled-components";

export const TextContainer = styled.section`
  background-color: ${(props) => props.theme["base-background"]};
  min-height: 60vh;
`;

export const TextSection = styled.div`
    margin: 0 auto;
    padding: 0 32px;
    width: 80%;
    max-width: 1000px;
    color: ${(props) => props.theme["base-text"]};
`;
