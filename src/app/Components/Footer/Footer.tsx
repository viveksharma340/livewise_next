"use client";
import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  height: 60px;
  background-color: white;
  margin-top: 1rem;
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.1),
    0px -2px 10px rgba(0, 0, 0, 0.05);
  justify-content: center;
  padding: 6px 0 !important;
  align-items: center;
  display:none;
   @media only screen and (max-width: 800px) {
   display:flex;
 

  }

`;

const FooterImage = styled.img`
  max-height: 100%;
`;

const CustomFooter: React.FC = () => {
  return (
    <StyledFooter>
      <FooterImage src="/play-store_black.png" alt="Footer Image" />
    </StyledFooter>
  );
};

export default CustomFooter;
