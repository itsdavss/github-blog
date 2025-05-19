import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-background"]};
  color:  ${(props) => props.theme["base-title"]};
`;

export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  display: flex;
  max-width: 1100px;
  padding: 32px;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000025;
  margin: -68px 0 72px 0;

  div>img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
    margin-left: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.div`
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

    &:hover {
      border-color: ${(props) => props.theme["blue"]};
    }
  }
`;
