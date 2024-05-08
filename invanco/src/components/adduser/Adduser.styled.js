import { Link } from "react-router-dom";
import styled from "styled-components";

export const AddUserMainCOnatiner = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  flex-direction: column;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  font-size: 40px;
`;

export const AddForm = styled.form`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
