import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: auto;
    margin-top: 50px;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;
