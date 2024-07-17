"use client";
import { Button, Col, Typography } from "antd";
import React from "react";
import { Form, Input } from "antd";
import {SendOutlined } from '@ant-design/icons'
const inputStyle = {
  border: "none",
  borderBottom: "1px solid #d9d9d9",
  borderRadius: "0",
  boxShadow: "none",
};

const Feedback: React.FC = () => {
  const { Text } = Typography;

  const { TextArea } = Input;

  const onFinish = (values: string) => {
    console.log("Form values:", values);
  };
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        background:
          "linear-gradient(to bottom, #eff6ff 0%, #eff6ff 500px, white 500px, white 100%)",
      }}
    >
      <Col style={{ maxWidth: "1200px", width: "100%", display: "flex" }}>
        <Col
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "2rem",
            height: "500px",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#37878b",
              color: "white",
              width: "100px",
              height:'40px'
            }}
          >
            Let's Talk
          </Button>
          <Text
            style={{
              fontSize: "38px",
              fontWeight: 500,
              color: "rgb(58, 58, 58)",
            }}
          >
            Let's Talk About Your Experience.
          </Text>
          <Text style={{ fontSize: "18px", color: "rgb(141, 141, 141)" }}>
            We would love to hear about your recent visit. Your feedback helps
            us enhance our service and provide a better experience for you and
            others.
          </Text>
        </Col>
        <Col style={{ width: "50%", padding: "3rem  2rem" }}>
          <Col
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form
              name="send_message"
              onFinish={onFinish}
              layout="vertical"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              <Col style={{textAlign:'center'}}><Text style={{fontSize:"30px",fontWeight:500}}>Send Message</Text></Col>
              
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
              >
                <Input style={inputStyle} />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  { required: true, message: "Please input your e-mail!" },
                  { type: "email", message: "Please enter a valid e-mail!" },
                ]}
              >
                <Input style={inputStyle} />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  { required: true, message: "Please input the subject!" },
                ]}
              >
                <Input style={inputStyle} />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <TextArea style={inputStyle} rows={2} />
              </Form.Item>

              <Form.Item>
                <Button icon={<SendOutlined/>}
                  style={{fontWeight:500,width:"150px", backgroundColor: "#37878b", color: "white",height:'55px' }}
                  type="primary"
                  htmlType="submit"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default Feedback;
