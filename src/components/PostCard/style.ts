import { Link } from "react-router";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme["base-post"]};
  width: 416px;
  height: 260px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
    width: 40%;
    text-align: end;
  }
`

export const CardText = styled.div`
  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 160%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`