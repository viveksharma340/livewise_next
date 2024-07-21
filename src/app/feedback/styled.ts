import { Button, Col, Typography } from "antd";
import styled from "styled-components";
const Text = Typography;
const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #eff6ff 0%,
    #eff6ff 500px,
    white 500px,
    white 100%
  );
`;
const MainDiv = styled(Col)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const LeftDiv = styled(Col)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2rem;
  height: 500px;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
    align-items: center;
    height: auto;
  }
`;
const RightDiv = styled(Col)`
 width:50%;
  padding:3rem  2rem;
  @media only screen and (max-width: 1000px) {
  width:100%;
   
`;
const FormContainer = styled(Col)`
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const HeaderText = styled(Text)`
 font-size:38px;
font-weight: 500;
color:rgb(58, 58, 58);
  @media only screen and (max-width: 1000px) {
font-size:28px;  
text-align:center; 
`;
const SubHeader = styled(Text)`
font-size:18px;
color:rgb(141, 141, 141);
  @media only screen and (max-width: 1000px) {
font-size:16px;  
text-align:center; 
`;
const FormHeader = styled(Text)`
font-size:30px;
 font-weight: 500;
  @media only screen and (max-width: 1000px) {
font-size:24px;  
`;

const ButtonOne = styled(Button)`
  background-color: #37878b;
  color: white;
  width: 100px;
  height: 40px;
`;
const SubmitButton = styled(Button)`
  font-weight: 500;
  width: 150px;
  background-color: #37878b;
  color: white;
  height: 55px;
`;

export {
  Container,
  MainDiv,
  LeftDiv,
  RightDiv,
  ButtonOne,
  HeaderText,
  SubHeader,
  FormContainer,
  FormHeader,
  SubmitButton
};
