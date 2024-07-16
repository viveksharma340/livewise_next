'use client'
import { Col, Menu } from "antd";

import Image from "next/image";
import React, { useEffect } from "react";
import './Navbar.css'; // Assuming you store your CSS here
import DownloadButton from "./DownloadButton";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC = () => {

  return (
    <div style={{display:'flex',justifyContent:'center',        backgroundColor: "#2f2e2e",  
    }}>

    <Menu
      mode="horizontal"
      style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center", 
        height: "70px", 
        width:'100%',
        backgroundColor: "#2f2e2e",  

        maxWidth:'1300px',
        padding: "0 1rem",  
        fontWeight:700,
        color: "white",           
      }}
      theme="dark" 
    >
      <Menu.Item key="home" style={{ marginRight: "auto", color: "white" }}> 
        <Link href={'/'} style={{ display: "flex", alignItems: "center", color: "inherit" }}>
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
      </Menu.Item>
      <Menu.SubMenu key="about" title="ABOUT US" style={{backgroundColor:"inherit", color: "white !important"}}>
        <Menu.Item key="about:1" style={{ color: "inherit"  }} ><Link href={'/about'}>What’s Livewise</Link></Menu.Item>
        <Menu.Item key="about:2" style={{ color: "inherit" }}>Team</Menu.Item>
        <Menu.Item key="about:4" style={{ color: "inherit" }}>Contact Us</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="feedback" style={{ color: "white" }}>
        <Col style={{ color: "inherit" ,backgroundColor:"inherit"}}>FEEDBACK</Col>
      </Menu.Item>
      <Menu.Item key="download" style={{ color: "white" }}>
        <Col style={{ color: "inherit" ,backgroundColor:"inherit"}}><DownloadButton/></Col>
      </Menu.Item>
    </Menu>
    </div>

  );
};

export default Navbar;
