import { Button, Col, Typography } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";
const Text = Typography;

interface MotionDivProps {
  animationDirection: string;
}

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #f4e7bf 0%,
    #f4e7bf 500px,
    white 500px,
    white 100%
  );
`;
const MainDiv = styled(Col)`
  display: flex;
  padding: 0 2rem;
  max-width: 1200px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
const LeftSection = styled(Col)`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 50%;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 1000px) {
    height: auto;
    width: 100%;
    align-items: center;
  }
`;
const RightSection = styled(Col)`
width:50%;
padding-top:3rem;
display:flex;
align-items:center;
justify-content:center;
  @media only screen and (max-width: 1000px) {
   padding:top:1rem;
   width:100%;
  }
`;
const Header = styled(Text)`
  font-size: 38px;
  font-weight: 500;

  line-height: 110%;
  color: rgb(58, 58, 58);
  @media only screen and (max-width: 1000px) {
    font-size: 32px;
    text-align: center;
  }
`;
const SubHeader = styled(Text)`
  font-size: 18px;
  lineheight: 140%;
  @media only screen and (max-width: 1000px) {
    font-size: 17px;
    text-align: center;
  }
`;
const StyledPara = styled(Text)`
  font-size: 14px;
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;
const ImageContainer = styled(Col)`
  width: 55%;
  height: 550px;
  @media only screen and (max-width: 600px) {
    width: 65%;
  }
`;
const InputContainer = styled(Col)`
  position: absolute;
  bottom: 12rem;
  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
const StyledHeader = styled(Text)`
  font-size: 48px;
  font-weight: 500;
  line-height: 110%;
  text-align: center;
  color: rgb(58, 58, 58);
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
  }
`;
const StyledSubHeader = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  text-align: center;
  color: rgb(141, 141, 141);
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;
const StyledTypoI = styled(Text)`
  font-size: 48px;
  font-weight: 500;
  line-height: 110%;
  color: rgb(58, 58, 58);
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;
const StyledTypoII = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  lineheight: 140%;
  color: rgb(141, 141, 141);
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

const StyledBody = styled(Col)`
  display: flex;
  max-width: 1200px;
  padding: 0 2rem;
  height: 600px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    padding: 0;
    height: auto;
    gap: 1rem;
  }
`;

const FlexBox = styled(Col)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 850px) {
    gap: 6rem;
  }
`;
const FeatureWrapper = styled(Col)`
  display: flex;
  margin-top: 2rem;

  @media only screen and (max-width: 950px) {
    flex-direction: column;

    gap: 1rem;
  }
`;
const FeatureWrapperI = styled(Col)`
 display:flex;
  gap:1rem;
   padding-bottom: 3rem;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    padding:1rem;

  }
`;





const Wrapper = styled(Col)`
   display: flex;
          max-width: 1200px;
          padding: 0 2rem;
          height: 600px;
          margin-top: 3rem;
          flex-direction: column;
          justify-content:center;

  @media only screen and (max-width: 950px) {
  width:100%;
  height:auto;
  padding:0 1rem;

  
`;
const WrapperI = styled(Col)`
display: flex;
          flex-direction:column;
          gap: 10;
          align-items:center;
          padding-bottom: 3rem;
          margin-top: 6rem;

  @media only screen and (max-width: 950px) {
 padding:3rem 1rem;
          margin-top: 2rem;

  
`;

const MotionDiv = styled(motion.div)<MotionDivProps>`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  gap: 1rem;
  align-items: ${(props) =>
    props.animationDirection === "left" ? "flex-start" : "flex-end"};
  @media only screen and (max-width: 850px) {
    width: 100%;
    align-items: center;
    padding: 1rem 1rem;
  }
`;

export {
  Container,
  MainDiv,
  LeftSection,
  Header,
  SubHeader,
  StyledPara,
  RightSection,
  ImageContainer,
  InputContainer,
  StyledHeader,
  StyledSubHeader,
  StyledBody,
  MotionDiv,
  FlexBox,
  StyledTypoI,
  StyledTypoII,
  FeatureWrapper,
  Wrapper,
  WrapperI,
  FeatureWrapperI
};
