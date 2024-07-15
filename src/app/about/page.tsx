"use client";

import { Carousel, Col, Image as AntImage, Typography, Card } from "antd";
import Image from "next/image";

import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: () => CollapseProps["items"] = (
) => [
  {
    key: "1",
    label: (
      <Col style={{ fontSize: "36px", fontWeight: 500 ,    color: 'rgb(58, 58, 58)'}}>Absolute Privacy</Col>
    ),
    children: (
      <Col style={{ fontSize: "16px", fontWeight: 500,    color: 'rgb(141, 141, 141)' }}>
        We prioritize your privacy. Our system is designed to ensure that your
        data remains inaccessible to us. We implement stringent access controls
        and encryption to guarantee that your data stays private, always.
      </Col>
    ),
  },
  {
    key: "2",
    label: (
      <Col style={{ fontSize: "44px", fontWeight: 500 }}>
        No Third-Party Sharing
      </Col>
    ),
    children: (
      <Col style={{ fontSize: "18px", fontWeight: 500 }}>
        Your data belongs to you. We never sell or share your information with
        third parties. Our business model relies on providing service
        excellence, not on trading your personal information.
      </Col>
    ),
  },
  {
    key: "3",
    label: (
      <Col style={{ fontSize: "44px", fontWeight: 500 }}>
        Clean User Experience
      </Col>
    ),
    children: (
      <Col style={{ fontSize: "18px", fontWeight: 500 }}>
        Enjoy our services without interruptions. We don't use ads or push
        recommendations. Our platform is designed to provide a straightforward,
        uncluttered experience, focusing purely on functionality without any
        distractions.
      </Col>
    ),
  },
];
const { Text } = Typography;
const About = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const images = [
    "/livTwo.webp",
    "/livThree.png",
    "/livFour.webp",
    "/livFive.webp",
    "/livSix.webp",
    "/livSeven.webp",
    "/livEight.webp",
  ];
  return (
    <>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "90vh",
          backgroundColor: "#f4e7bf",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "110%",
              color: "rgb(58, 58, 58)",
            }}
          >
            Secure Your Financial Legacy with Livewise{" "}
          </Text>
          <Text
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "rgb(73, 73, 73)",
            }}
          >
            Livewise is a state-of-the-art financial management tool designed to
            ensure the longevity and security of your financial legacy. By
            enabling users to securely store essential financial information and
            guaranteeing its transfer to designated nominees after their
            passing, Livewise offers peace of mind and comprehensive fiscal
            continuity.
          </Text>
        </Col>
        <Col
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel
            autoplay
            effect="fade"
            speed={200}
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
              height: "80vh",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <AntImage
                  src={src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "80vh",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          marginTop: "5%",
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
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "110%",
              color: "rgb(58, 58, 58)",
            }}
          >
            Add Nominees and Financial Info{" "}
          </Text>

          <Text
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "140%",
              color: "rgb(141, 141, 141)",
            }}
          >
            The Livewise mobile app provides a conventient way to record details
            about your various assets & liabilities and insurances. You can
            specify a primary & secondary nominee. We support all major
            currencies.
          </Text>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
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
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
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
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
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
            spread and how its growing with time. You can really drill down and
            specify value of an assets as it was on given dates
          </Text>
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
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
            inactivity, we try to reach out to you via automated notification on
            the app, sms and emails. If we really can't get to you, maybe
            something is not right
          </Text>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
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
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
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
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "110%",
              color: "rgb(58, 58, 58)",
            }}
          >
            We reaching out to the Nominee{" "}
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
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
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
            If Primary Nominee does not respond within specified time- we reach
            out to Secondary Nominee
          </Text>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
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
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          height: "80vh",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
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
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            gap: 10,
          }}
        >
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
            generates a comprehensive summary of all your financial data stored
            with us and hands it securely to the nominee.
          </Text>
        </Col>
      </Col>
      <Col
        style={{
          display: "flex",
          padding: "0 10%",
          marginTop: "5%",
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

        <Col
          style={{
            display: "flex",
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
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{ background: "white" }}
            items={getItems()}
          />
        </Col>
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
    </>
  );
};

export default About;
