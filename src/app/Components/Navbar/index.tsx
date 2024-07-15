'use client'
import { Col, Menu } from "antd";

import Image from "next/image";
import React from "react";
import './Navbar.css'; // Assuming you store your CSS here
import DownloadButton from "./DownloadButton";

const Navbar: React.FC = () => {
  return (
    <Menu
      mode="horizontal"
      style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center", 
        height: "70px", 
        padding: "0 10%",  
        backgroundColor: "#2f2e2e",  
        fontWeight:700,
        color: "white",           
      }}
      theme="dark" 
    >
      <Menu.Item key="home" style={{ marginRight: "auto", color: "white" }}> 
        <Col style={{ display: "flex", alignItems: "center", color: "inherit" }}>
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Col>
      </Menu.Item>
      <Menu.SubMenu key="about" title="ABOUT US" style={{ color: "white"}}>
        <Menu.Item key="about:1" style={{ color: "inherit"  }}>What’s Livewise</Menu.Item>
        <Menu.Item key="about:2" style={{ color: "inherit" }}>Team</Menu.Item>
        <Menu.Item key="about:3" style={{ color: "inherit" }}>Careers</Menu.Item>
        <Menu.Item key="about:4" style={{ color: "inherit" }}>Contact Us</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="feedback" style={{ color: "white" }}>
        <Col style={{ color: "inherit" }}>FEEDBACK</Col>
      </Menu.Item>
      <Menu.Item key="download" style={{ color: "white" }}>
        <Col style={{ color: "inherit" }}><DownloadButton/></Col>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
