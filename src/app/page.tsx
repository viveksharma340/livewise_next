"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Button, Card, Col, Row, Typography } from "antd";
import { SearchBox, Typewriter } from "./Components/SearchBar";
import styled from "styled-components";
import Link from "next/link";
import FeatureBox from "./Components/FeatureBox/FeatureBox";

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
    <motion.div
      ref={ref}
      {...animationProps}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
        alignItems: animationDirection === "left" ? "flex-start" : "flex-end",
        gap: 10,
      }}
    >
      {children}
    </motion.div>
  );
};
const StyledCol = styled.div`
  display: flex;
  padding: 0 2rem;
  max-width: 1200px;
`;
const StyledColI = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 50%;
  justify-content: center;
  gap: 10px;
`;
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
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        background:
          "linear-gradient(to bottom, #f4e7bf 0%, #f4e7bf 500px, white 500px, white 100%)",
      }}
    >
      <Col style={{ display: "flex", padding: " 0 2rem", maxWidth: "1200px" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            height: "500px",
            width: "50%",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Text style={{ fontSize: "38px", fontWeight: 500 }}>
            Networth that outlives you.
          </Text>
          <Text style={{ fontSize: "18px" }}>
            Livewise allows you to securely store your key financial info like
            Assets, Liabilities & Insurances and ensures it gets to your nominee
            after you are gone.
          </Text>
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
          <Text style={{ fontSize: "14px" }}>
            Secure your financial legacy with Livewise. Sign up today to start
            managing, tracking, and ensuring the future of your financial data.
            Your peace of mind is just a click away.
          </Text>
        </Col>
        <Col
          style={{
            width: "50%",
            paddingTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col style={{ width: "55%", height: "550px" }}>
            <Image
              src={"/homeBanner.png"}
              alt="Decorative banner showing financial growth"
              layout="fill"
            />
          </Col>
          <Col style={{ position: "absolute", bottom: "12rem", width: "80%" }}>
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
          </Col>
        </Col>
      </Col>
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
          <Text
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "110%",
              textAlign: "center",
              color: "rgb(58, 58, 58)",
            }}
          >
            How It Works ?
          </Text>

          <Text
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "140%",
              textAlign: "center",
              color: "rgb(141, 141, 141)",
            }}
          >
            At Livewise, we understand how important security and convenience
            are when it comes to your finances. Data safety is our top priority.
          </Text>
        </Col>
      </Col>
      <div>
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
          <AnimatedCol animationDirection="left">
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              Add Nominees and Financial Info
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              The Livewise mobile app provides a convenient way to record
              details about your various assets & liabilities and insurances.
              You can specify a primary & secondary nominee. We support all
              major currencies.
            </Text>
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
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
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
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              Track your Net Worth
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              The charts allow you to visually analyze how your Net Worth is
              spread and how its growing with time. You can really drill down
              and specify value of an assets as it was on given dates
            </Text>
          </AnimatedCol>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
          <AnimatedCol animationDirection="left">
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              Are you alive?
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              The app invites you to login periodically. After 45 days of
              inactivity, we try to reach out to you via automated notification
              on the app, sms and emails. If we really can't get to you, maybe
              something is not right
            </Text>
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
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
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
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              We reaching out to the Nominee
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              Our Automated systems reach out to the primary nominee to know if
              the user is alright. If otherwise, we request the nominee to
              initiate information retrieval by sharing relevant docs
            </Text>
          </AnimatedCol>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
          <AnimatedCol animationDirection="left">
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              Nominee Sends us Death Certificate and ID proof
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              Nominee needs to send the Death Certificate and an identity proof.
              If Primary Nominee does not respond within specified time- we
              reach out to Secondary Nominee
            </Text>
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
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            padding: "0 2rem",
            height: "600px",
          }}
        >
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
            <Text
              style={{
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: "110%",
                color: "rgb(58, 58, 58)",
              }}
            >
              We share with Nominee a Detailed Document with all the user's info
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "140%",
                color: "rgb(141, 141, 141)",
              }}
            >
              Our team verifies the death certificate and then the system
              generates a comprehensive summary of all your financial data
              stored with us and hands it securely to the nominee.
            </Text>
          </AnimatedCol>
        </div>
      </div>

      <Col
        style={{
          display: "flex",
          maxWidth: "1200px",
          padding: "0 2rem",
          height: "600px",
          marginTop: "3rem",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Col style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Text
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "110%",
              textAlign: "center",
              color: "rgb(58, 58, 58)",
            }}
          >
            Concerned About Your Privacy?
          </Text>

          <Text
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "140%",
              textAlign: "center",
              color: "rgb(141, 141, 141)",
            }}
          >
            See How We Protect You.
          </Text>
        </Col>
        <Col style={{ display: "flex", marginTop: "2rem" }}>
          {featureData.map((feature, index) => (
            <FeatureBox
              key={index}
              iconBg={feature.iconBg}
              iconHoverBg={feature.iconHoverBg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Col>
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
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        ></Col>
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <Text
          style={{
            fontSize: "48px",
            fontWeight: 500,
            lineHeight: "110%",
            textAlign: "center",
            color: "rgb(58, 58, 58)",
          }}
        >
          What Nominee Gets ?
        </Text>

        <Text
          style={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "140%",
            maxWidth: "700px",
            textAlign: "center",
            color: "rgb(141, 141, 141)",
          }}
        >
          Nominee receives a detailed document with overall financials,
          insurance details, and categorized assets and liabilities. Each entry
          includes specific fields, dates, and amounts in the user's specified
          currency.
        </Text>
      </Col>

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
        <Text
          style={{
            fontSize: "48px",
            fontWeight: 500,
            lineHeight: "110%",
            textAlign: "center",
            color: "rgb(58, 58, 58)",
          }}
        >
          Our Users Say
        </Text>
      </Col>
      <Col style={{ display: "flex", gap: "1rem", paddingBottom: "3rem" }}>
        {blogPosts.map((data, index) => (
          <Card
            key={index}
            style={{ width: 400 }}
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
      </Col>
    </Col>
  );
}
