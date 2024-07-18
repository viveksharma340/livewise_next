"use client";
import { Card, Col, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const { Text } = Typography;
const Team = () => {
  const teamsArray = [
    {
      id: 1,
      image: "/Mohit new.webp",
      name: "Mohit Jindal",
      role: "Senior Software Engineer, Microsoft",
      disc: "Currently in his 8th year at Microsoft, Mohit Jindal brings a wealth of experience to our team. Based in Redmond, US, he combines a strong background in Finance and Engineering. Mohit has also contributed his expertise to two startups, enriching our team with his unique skill set and innovative mindset.",
    },
    {
      id: 2,
      image: "/Image 12-11-2023 at 9_54 am.webp",
      name: "Raghav Sood",
      role: "Vice President, Goldman Sachs",
      disc: "Raghav Sood serves as Vice President at Goldman Sachs in Bengaluru. With previous roles at Goldman Sachs in Sydney and Amazon in Hyderabad, Raghav brings a wealth of experience and a results-driven approach to our team. His passion for getting things done is highly valued by his colleagues.",
    },
    {
      id: 3,
      image: "/gaurav2.webp",
      name: "Gaurav Bhola",
      role: "Tech Lead, Google",
      disc: "Gaurav Bhola, now a Tech Lead at Google in the US, brings extensive experience from his previous role at Google in Bengaluru and a successful tenure with a startup. His deep expertise in app development, innovative approach, and ability to lead and mentor teams make him an invaluable asset to our team.",
    },
  ];
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background:
          "linear-gradient(to bottom, #E0FBE2 0%, #E0FBE2 500px, white 500px, white 100%)",
      }}
    >
      <Col
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom:'4rem'
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "80%",
            height: "400px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: "38px",
              fontWeight: 500,
              color: "rgb(58, 58, 58)",
            }}
          >
            Meet the Team
          </Text>
          <Text
            style={{
              fontSize: "18px",
              color: "rgb(141, 141, 141)",
              textAlign: "center",
            }}
          >
            We are a team of dedicated software engineers who began our journey
            together in school and have since amassed a wealth of experience
            working with leading tech firms like Microsoft, Google, Goldman
            Sachs, and Amazon across the US, Australia, and India. All three of
            us graduated from NIT Kurukshetra, bringing a shared passion for
            technology and innovation to every project we undertake.
          </Text>
        </Col>
        <Col style={{ display: "flex", gap: "2rem" }}>
          {teamsArray.map((data) => (
            <Card
              key={data.id}
              style={{ width: 350 }}
              cover={<img alt="example" src={data.image} />}
              actions={[
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "24px", color: "#0077B5" }}
                />,
              ]}
            >
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                  {data.name}
                </Text>
                <Text style={{ fontStyle: "italic" }}>{data.role}</Text>
                <Text style={{ marginTop: "1rem", fontSize: "16px" }}>
                  {data.disc}
                </Text>
              </Col>
            </Card>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default Team;
