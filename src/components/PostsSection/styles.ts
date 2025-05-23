import styled from "styled-components";

export const PostsContainer = styled.section`
  background-color: ${(props) => props.theme["base-background"]};
  padding-bottom: 50px;

  >div {
    width: 80%;
    max-width: 900px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  >div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      color:  ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
    }

    span {
      color:  ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  >input {
    width: 100%;
    height: 50px;
    background-color:  ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding-left: 16px;
    color: ${(props) => props.theme["base-title"]};

    ::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const Posts = styled.div `
  min-height: 40vh;
  margin-top: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`