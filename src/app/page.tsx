"use client";
import Image from "next/image";
import { Button, Col, Typography } from "antd";
import { SearchBox, Typewriter } from "./Components/SearchBar";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  const { Title } = Typography;

  const StyledContainer = styled.div`
    // background-color: #000000;
    // padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px) {
      padding: 80px 0;
    }
  `;
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
        padding: "0 2rem",
        height: "700px",
        backgroundColor: "white",
        maxWidth: "1200px",
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
        <Text style={{ fontSize: "48px", fontWeight: 500 }}>
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
  );
}
