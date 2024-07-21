import { Button, Col, Typography } from "antd";
import styled from "styled-components";
const Text = Typography;
const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #e0fbe2 0%,
    #e0fbe2 500px,
    white 500px,
    white 100%
  );
`;
const MainDiv = styled(Col)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4rem;
`;
const SectionOne = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  height: 400px;
  justify-content: center;
  align-items: center;
  @media only screen and(max-width: 1000px) {
    height: auto;
    width: 100%;
    padding: 2rem 1rem;
  }
`;
const SectionTwo = styled(Col)`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  @media only screen and (max-width: 1000px) {
    padding: 2rem;
    flex-direction: column;
  }
`;
const TextWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Card = styled(Col)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const FlexBox = styled(Col)`
  display: flex;
  justify-content: space-between;
`;
const Header = styled(Text)`
  font-size: 38px;
  font-weight: 500;
  color: rgb(58, 58, 58);
  @media only screen and (max-width: 1000px) {
    font-size: 28px;
  }
`;
const SubHeader = styled(Text)`
  font-size: 18px;
  color: rgb(141, 141, 141);
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;
const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: 500;
`;

export {
  Container,
  MainDiv,
  SectionOne,
  SectionTwo,
  Header,
  SubHeader,
  Card,
  TextWrapper,
  StyledText,
  FlexBox
};
