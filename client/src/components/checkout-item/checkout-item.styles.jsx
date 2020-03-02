import styled from "styled-components";

const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 20%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled(TextContainer)`
  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;

export const PriceContainer = styled(TextContainer)`
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 2px 10px 0;

    @media screen and (max-width: 800px) {
      margin: 2px 6px 0;
    }
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 15%;
    text-align: center;
    padding-left: 0px;
  }
`;
