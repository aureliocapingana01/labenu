import styled from "styled-components";
import { theme } from "../../../Theme";

export const ListTripsContainer = styled.div `
  width: 400px;
  height: 150px;
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

export const H2 = styled.h2`
  margin: 20px 0;
  color: ${theme.colors.cor2};
  text-align: center;
  font-size: 30px;
`