import styled from "styled-components";
import { theme } from "../../../Theme";

export const ListTripsContainer = styled.div `
  width: 430px;
  height: 170px;
  background-color: #fff;
  margin: 40px 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.7);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ListTripsContainerDiv = styled.div `
  margin: 3px 0;
  display: flex;

  h3{
    color: ${theme.colors.cor2};
    margin: 0 5px;
  }
  p{
    font-size: 20px;
    color: rgba(0,0,0,0.7);
  }
`

export const H2 = styled.h2`
  margin: 20px 0;
  color: ${theme.colors.cor2};
  text-align: center;
  font-size: 30px;
`
export const ParagrafoRequestInfo = styled.p`
  margin: 50px 0;
  color: ${theme.colors.cor2};
  text-align: center;
  font-size: 30px;
`