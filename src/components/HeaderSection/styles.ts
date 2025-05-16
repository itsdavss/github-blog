import styled from "styled-components";
import Background from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  background: url(${Background});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0 134px 0;
`;