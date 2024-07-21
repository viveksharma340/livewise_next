"use client";
import { Typography } from "antd";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { features } from "./constants";
import {
  Card,
  Container,
  FlexBox,
  Header,
  MainDiv,
  SectionOne,
  SectionTwo,
  StyledText,
  SubHeader,
  TextWrapper,
} from "./styled";
const { Text } = Typography;
const Team = () => {
  return (
    <Container>
      <MainDiv>
        <SectionOne>
          <Header>Meet the Team</Header>
          <SubHeader>
            We are a team of dedicated software engineers who began our journey
            together in school and have since amassed a wealth of experience
            working with leading tech firms like Microsoft, Google, Goldman
            Sachs, and Amazon across the US, Australia, and India. All three of
            us graduated from NIT Kurukshetra, bringing a shared passion for
            technology and innovation to every project we undertake.
          </SubHeader>
        </SectionOne>

        <SectionTwo>
          {features.map((feature) => (
            <Card data-wow-delay={feature.delay} key={feature.id}>
              <div className="feature-one__single">
                <div className="feature-one__img">
                  <img src={feature.imageUrl} alt="" />
                  <div className="feature-one__title-box"></div>
                  <div className="feature-one__hover-content">
                    <p className="feature-one__hover-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <TextWrapper>
                  <FlexBox>
                    <StyledText>{feature.title}</StyledText>{" "}
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ fontSize: "24px", color: "#0077B5" }}
                    />
                  </FlexBox>
                  <Text style={{ fontStyle: "italic" }}>{feature.role}</Text>
                </TextWrapper>
              </div>
            </Card>
          ))}
          {/* </Col> */}
        </SectionTwo>
      </MainDiv>
    </Container>
  );
};

export default Team;
