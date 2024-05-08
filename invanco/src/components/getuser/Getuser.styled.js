import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  /* width: 100%;
  max-width: 100vh; */
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

export const UserData = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const UserDetailsBar = styled.div`
  display: flex;
  flex-direction: column;

  p {
    line-height: 0px;
  }
`;

export const AddUserLink = styled(Link)`
  text-decoration: none;
  font-size: 40px;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  padding: 0 12px;
`;
