"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Button, Card, Col, Row, Typography } from "antd";
import { SearchBox, Typewriter } from "./Components/SearchBar";
import Link from "next/link";
import FeatureBox from "./Components/FeatureBox/FeatureBox";
import {
  Container,
  FeatureWrapper,
  FeatureWrapperI,
  FlexBox,
  Header,
  ImageContainer,
  InputContainer,
  LeftSection,
  MainDiv,
  MotionDiv,
  RightSection,
  StyledBody,
  StyledHeader,
  StyledPara,
  StyledSubHeader,
  StyledTypoI,
  StyledTypoII,
  SubHeader,
  Wrapper,
  WrapperI,
} from "./styled";

const AnimatedCol = ({ children, animationDirection }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = {
    initial: { x: animationDirection === "left" ? -200 : 200, opacity: 0 },
    animate: inView
      ? { x: 0, opacity: 1 }
      : { x: animationDirection === "left" ? -200 : 200, opacity: 0 },
    transition: { duration: 1 },
  };

  return (
    <MotionDiv
      animationDirection={animationDirection}
      ref={ref}
      {...animationProps}
    >
      {children}
    </MotionDiv>
  );
};

const featureData = [
  {
    iconBg: "linear-gradient(to right, #38a169, #4299e1)",
    iconHoverBg: "#4299e1",
    title: "Absolute Privacy",
    description:
      " We prioritize your privacy. Our system is designed to ensure that yourdata remains inaccessible to us. We implement stringent access controlsand encryption to guarantee that your data stays private, always.",
  },
  {
    iconBg: "linear-gradient(to right, #9f7aea, #ed64a6, #e53e3e)",
    iconHoverBg: "#e53e3e",
    title: "No Third-Party Sharing",
    description:
      "Your data belongs to you. We never sell or share your information with third parties. Our business model relies on providing service excellence, not on trading your personal information.",
  },
  {
    iconBg: "linear-gradient(to right, #2d3748, #1a202c, #000000)",
    iconHoverBg: "#2d3748",
    title: "Clean User Experience",
    description:
      " Enjoy our services without interruptions. We don't use ads or push recommendations. Our platform is designed to provide a straightforward, uncluttered experience, focusing purely on functionality without any distractions.",
  },
];
export default function Home() {
  const blogPosts = [
    {
      imgSrc:
        "https://static.wixstatic.com/media/ca32c5_bcb6ab48d3724375b37010e242408ac7~mv2.jpeg/v1/crop/x_114,y_0,w_571,h_800/fill/w_394,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ashish.jpeg",
      title: "Ashish Jindal",
      role: "Consultant @ BCG , B.Tech IIT-B and MBA IIM-A",
      description:
        "I can't thank Livewise enough for its proactive approach to financial security. The life-checkin and notification system ensures I stay on top of my finances and, in case of any unexpected event, my nominees will be informed promptly. It's like having a personal financial guardian in your pocket",
    },
    {
      imgSrc:
        "https://static.wixstatic.com/media/ca32c5_8aea025dca1b41a6979de625dd3c1383~mv2.jpeg/v1/crop/x_43,y_0,w_213,h_299/fill/w_298,h_417,al_c,lg_1,q_80,enc_auto/manish.jpeg",
      title: "Manish Maharaj",
      role: "Regional Sales Manager Pidilite, Ex-Johnson & Johnson",
      description:
        "Livewise is a financial lifesaver! With its user-friendly interface, I can effortlessly manage my assets, liabilities, and insurances while keeping my loved ones informed. The peace of mind it provides is priceless",
    },
    {
      imgSrc:
        "https://static.wixstatic.com/media/ca32c5_4aa6e045b0be45a196e5bda48d3c8715~mv2.jpeg/v1/crop/x_51,y_0,w_253,h_355/fill/w_354,h_496,al_c,lg_1,q_80,enc_auto/karma.jpeg",
      title: "Ashish Vishwakarma",
      role: "Staff Software Engineer @ Walmart Global Techr",
      description:
        "Livewise has revolutionized how I plan for the future. Adding primary and secondary nominees is a breeze, and the net worth tracking feature is a game-changer. This app is a must-have for anyone who wants to take control of their financial well-being.",
      date: "May 17th, 2021",
    },
  ];

  const { Text } = Typography;
  const questions = [
    "How It Works ?",
    "Add Nominees and Financial Info",
    "Track your Net Worth",
    "Are you alive?",
  ];
  return (
    <Container>
      <MainDiv>
        <LeftSection>
          <Header>Networth that outlives you.</Header>
          <SubHeader>
            Livewise allows you to securely store your key financial info like
            Assets, Liabilities & Insurances and ensures it gets to your nominee
            after you are gone.
          </SubHeader>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "130px",
              borderRadius: "30px",
              height: "50px",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            <Link
              target="_blank"
              style={{ color: "white !important" }}
              href={"https://play.google.com/store/apps/details?id=in.livewise"}
            >
              Get Started
            </Link>
          </Button>
          <StyledPara>
            Secure your financial legacy with Livewise. Sign up today to start
            managing, tracking, and ensuring the future of your financial data.
            Your peace of mind is just a click away.
          </StyledPara>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <Image
              src={"/homeBanner.png"}
              alt="Decorative banner showing financial growth"
              layout="fill"
            />
          </ImageContainer>
          <InputContainer>
            <Col style={{ position: "relative", width: "100%" }}>
              <SearchBox />
              <Col
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  position: "absolute",
                  top: "7px",
                  left: "34px",
                }}
              >
                <Typewriter messages={questions} delay={150} />
              </Col>
            </Col>
          </InputContainer>
        </RightSection>
      </MainDiv>
      <Col
        style={{
          maxWidth: "1200px",
          display: "flex",
          padding: "0 2rem",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <Col
          id="about"
          className="about"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingTop: "3rem",
          }}
        >
          <StyledHeader>How It Works ?</StyledHeader>

          <StyledSubHeader>
            At Livewise, we understand how important security and convenience
            are when it comes to your finances. Data safety is our top priority.
          </StyledSubHeader>
        </Col>
      </Col>
      <FlexBox>
        <StyledBody>
          <AnimatedCol animationDirection="left">
            <StyledTypoI>Add Nominees and Financial Info</StyledTypoI>
            <StyledTypoII>
              The Livewise mobile app provides a convenient way to record
              details about your various assets & liabilities and insurances.
              You can specify a primary & secondary nominee. We support all
              major currencies.
            </StyledTypoII>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#e0edf4",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  right: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutOne.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
        </StyledBody>

        <StyledBody>
          <AnimatedCol animationDirection="left">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#d7f0ca",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  left: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutTwo.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <StyledTypoI>Track your Net Worth</StyledTypoI>
            <StyledTypoII>
              The charts allow you to visually analyze how your Net Worth is
              spread and how its growing with time. You can really drill down
              and specify value of an assets as it was on given dates
            </StyledTypoII>
          </AnimatedCol>
        </StyledBody>

        <StyledBody>
          <AnimatedCol animationDirection="left">
            <StyledTypoI>Are you alive?</StyledTypoI>
            <StyledTypoII>
              The app invites you to login periodically. After 45 days of
              inactivity, we try to reach out to you via automated notification
              on the app, sms and emails. If we really can't get to you, maybe
              something is not right
            </StyledTypoII>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#f3e7c0",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  right: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutThree.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
        </StyledBody>

        <StyledBody>
          <AnimatedCol animationDirection="left">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#e0edf4",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  left: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutFour.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <StyledTypoI>We reaching out to the Nominee</StyledTypoI>
            <StyledTypoII>
              Our Automated systems reach out to the primary nominee to know if
              the user is alright. If otherwise, we request the nominee to
              initiate information retrieval by sharing relevant docs
            </StyledTypoII>
          </AnimatedCol>
        </StyledBody>

        <StyledBody>
          <AnimatedCol animationDirection="left">
            <StyledTypoI>
              Nominee Sends us Death Certificate and ID proof
            </StyledTypoI>
            <StyledTypoII>
              Nominee needs to send the Death Certificate and an identity proof.
              If Primary Nominee does not respond within specified time- we
              reach out to Secondary Nominee
            </StyledTypoII>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#d7f0ca",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  right: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutFive.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
        </StyledBody>

        <StyledBody>
          <AnimatedCol animationDirection="left">
            <Col
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#f3e7c0",
                borderRadius: "25px",
                position: "relative",
                marginTop: "105px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  bottom: "45px",
                  left: "45px",
                  borderRadius: "25px",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                src={"/aboutSix.webp"}
                alt="fdsg"
                width={300}
                height={300}
              />
            </Col>
          </AnimatedCol>
          <AnimatedCol animationDirection="right">
            <StyledTypoI>
              We share with Nominee a Detailed Document with all the user's info
            </StyledTypoI>
            <StyledTypoII>
              Our team verifies the death certificate and then the system
              generates a comprehensive summary of all your financial data
              stored with us and hands it securely to the nominee.
            </StyledTypoII>
          </AnimatedCol>
        </StyledBody>
      </FlexBox>

      <Wrapper>
        <Col style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <StyledHeader>Concerned About Your Privacy?</StyledHeader>

          <StyledSubHeader>See How We Protect You.</StyledSubHeader>
        </Col>
        <FeatureWrapper>
          {featureData.map((feature, index) => (
            <FeatureBox
              key={index}
              iconBg={feature.iconBg}
              iconHoverBg={feature.iconHoverBg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeatureWrapper>
        {/* 
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                style={{
                  fontSize: "16px",
                }}
                rotate={isActive ? 90 : 0}
              />
            )}
            style={{ background: "white" }}
            items={getItems()}
          />
        </Col> */}
      </Wrapper>
      <WrapperI>
        <StyledHeader>What Nominee Gets ?</StyledHeader>

        <StyledSubHeader>
          Nominee receives a detailed document with overall financials,
          insurance details, and categorized assets and liabilities. Each entry
          includes specific fields, dates, and amounts in the user's specified
          currency.
        </StyledSubHeader>
      </WrapperI>

      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          paddingBottom: "3rem",
          marginTop: "6rem",
        }}
      >
        <StyledHeader>Our Users Say</StyledHeader>
      </Col>
      <FeatureWrapperI>
        {blogPosts.map((data, index) => (
          <Card
            key={index}
            style={{ maxWidth: 350 }}
            cover={
              <img
                alt="example"
                src={data.imgSrc}
                style={{ height: "400px", objectFit: "fill" }}
              />
            }
          >
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                {data.title}
              </Text>
              <Text style={{ fontStyle: "italic" }}>{data.role}</Text>
              <Text style={{ marginTop: "1rem", fontSize: "16px" }}>
                {data.description}
              </Text>
            </Col>
          </Card>
        ))}
      </FeatureWrapperI>
    </Container>
  );
}
