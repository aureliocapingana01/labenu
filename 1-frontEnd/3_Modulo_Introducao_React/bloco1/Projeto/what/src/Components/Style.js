import styled from "styled-components";
import { Theme } from "../Theme";

export const Container = styled.div`
 /* background: -webkit-linear-gradient(
    to top,
    ${Theme.colors.primary4},
    ${Theme.colors.primary3}
  );
  background: linear-gradient(
    to top,
    ${Theme.colors.primary4},
    ${Theme.colors.primary3},
    ${Theme.colors.primary2},
    ${Theme.colors.primary1}
  );  */
  box-shadow: 1px 2px 2px 000;
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: auto;
  height: 100vh;

  & header {
    color: ${Theme.colors.secundary};
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const Div = styled.div `
  /* border: 2px solid #1fddff; */
  /* width: 30vw; */
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Section = styled.section`
  display: flex;
  flex: 3;
  flex-direction: column-reverse;
  height: 100%;
  padding: 5px;
  background: -webkit-linear-gradient(
    to top,
    ${Theme.colors.primary4},
    ${Theme.colors.primary3}
  );
  background: linear-gradient(
    to top,
    ${Theme.colors.primary4},
    ${Theme.colors.primary3},
    ${Theme.colors.primary2},
    ${Theme.colors.primary1}
  );
`;

export const Footer = styled.footer`
  padding: 5px;
  display: flex;
`;

export const Name = styled.div`
  display: flex;
  flex: 0.75;

  & input {
    width: 100%;
    text-decoration: none;
    padding: 5px;
    border: 0 none;
    border-radius: 5px;
  }

  & input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Messager = styled.div`
  display: flex;
  flex: 3;

  & input {
    width: 100%;
    text-decoration: none;
    padding: 5px;
    border: none;
    margin: 0px 5px;
    border-radius: 5px;

  }

  & input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex: 0.5;

  & button {
    text-decoration: none;
    width: 100%;
    padding: 5px;
    font-weight: 700;
    background-color: ${Theme.colors.secundary1};
    border-radius: 5px;
    outline : 0
  }

  & button:hover {
    background-color: ${Theme.colors.primary1};
    color: #ffff;
  }
`;

export const Span = styled.span`
  color: 000;
  font-weight: 500;
  margin-right: 10px;
`;

export const Span1 = styled.span`
  color: ${Theme.colors.secundary};
`;
