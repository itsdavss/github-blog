import styled from "styled-components";

export const PostDetailsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-background"]};
  color:  ${(props) => props.theme["base-title"]};
`;

export const PostDetailsCard = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 900px;
  padding: 32px;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000025;
  margin: -68px 0 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  a {
    color:  ${(props) => props.theme["blue"]};
    font-size: 0.75rem;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      border-color: ${(props) => props.theme["blue"]};
    }
  }
`;

export const Info = styled.ul`
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 24px;

  li {
      color:  ${(props) => props.theme["base-span"]};
    display: flex;
    align-items: center;
    gap: 8px;

    i {
      color:  ${(props) => props.theme["base-label"]};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;
