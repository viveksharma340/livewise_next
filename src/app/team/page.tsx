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


  type Feature = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    role: string;
    iconClassName: string;
    delay: string;
  };
  
  const features: Feature[] = [
    {
      id: 1,
      title: "Mohit Jindal",
      description:"Currently in his 8th year at Microsoft, Mohit Jindal brings a wealth of experience to our team. Based in Redmond, US, he combines a strong background in Finance and Engineering. Mohit has also contributed his expertise to two startups, enriching our team with his unique skill set and innovative mindset.",

      imageUrl: "/Mohit new.webp",
      role: "Senior Software Engineer, Microsoft",
      iconClassName: 'icon-system',
      delay: '100ms',
    },
    {
      id: 2,
      title: "Raghav Sood",
      description:"Raghav Sood serves as Vice President at Goldman Sachs in Bengaluru. With previous roles at Goldman Sachs in Sydney and Amazon in Hyderabad, Raghav brings a wealth of experience and a results-driven approach to our team. His passion for getting things done is highly valued by his colleagues.",

      imageUrl: "/Image 12-11-2023 at 9_54 am.webp",
      role: "Vice President, Goldman Sachs",
      iconClassName: 'icon-cyber',
      delay: '200ms',
    },
    {
      id: 3,
      title: "Gaurav Bhola",
      description:"Gaurav Bhola, now a Tech Lead at Google in the US, brings extensive experience from his previous role at Google in Bengaluru and a successful tenure with a startup. His deep expertise in app development, innovative approach, and ability to lead and mentor teams make him an invaluable asset to our team.",

      imageUrl: "/gaurav2.webp",
      role: "Tech Lead, Google",
      iconClassName: 'icon-application',
      delay: '300ms',
    }
  ];
  


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
        {/* <Col style={{ display: "flex", gap: "2rem" }}>
          {teamsArray.map((data) => (
            <Card
              key={data.id}
              className="custom-card"
              // style={{ width: 350,backgroundColor:'inherit',border:'none',boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              cover={<img alt="example" src={data.image} style={{borderRadius:'170px',height:'350px'}}/>}
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
        </Col> */}
        <section className="feature-one">
      <Col style={{display:'flex',gap:'2rem'}}>
          {features.map((feature) => (
            <div className={`col-xl-4 col-lg-4 wow fadeInUp` }  style={{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' ,borderRadius:'10px'}} data-wow-delay={feature.delay} key={feature.id}>
              <div className="feature-one__single">
                <div className="feature-one__img">
                  <img src={feature.imageUrl} alt="" />
                  <div className="feature-one__title-box">
                    {/* <h3 className="feature-one__title"><a href={feature.role}>{feature.title}</a></h3> */}
                  </div>
                  <div className="feature-one__hover-content">
                    {/* <div className="feature-one__icon"><span className={feature.iconClassName}></span></div> */}
                    {/* <h3 className="feature-one__hover-title"><a href={feature.role}>{feature.title}</a></h3> */}
                    <p className="feature-one__hover-text">{feature.description}</p>
                    {/* <div className="feature-one__learn-more"><a href={feature.role}>Learn more<i className="fa fa-long-arrow-alt-right"></i></a></div> */}
                  </div>
                </div>
                <Col style={{ display: "flex", flexDirection: "column",padding:'1rem' }}>
               <div style={{display:'flex',justifyContent:'space-between'}}>
                <Text style={{ fontSize: "18px", fontWeight: 500 }}>
                  {feature.title}
                </Text> <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "24px", color: "#0077B5" }}
                />
                </div> 
                <Text style={{ fontStyle: "italic" }}>{feature.role}</Text>
                
              </Col>
              </div>
            </div>
            
          ))}
      </Col>
    </section>
      </Col>
    </Col>
  );
};

export default Team;
