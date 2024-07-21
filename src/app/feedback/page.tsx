"use client";
import { Button, Col, Typography } from "antd";
import React from "react";
import { Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  ButtonOne,
  Container,
  FormContainer,
  FormHeader,
  HeaderText,
  LeftDiv,
  MainDiv,
  RightDiv,
  SubHeader,
  SubmitButton,
} from "./styled";
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
    <Container>
      <MainDiv>
        <LeftDiv>
          <ButtonOne>Let's Talk</ButtonOne>
          <HeaderText>Let's Talk About Your Experience.</HeaderText>
          <SubHeader>
            We would love to hear about your recent visit. Your feedback helps
            us enhance our service and provide a better experience for you and
            others.
          </SubHeader>
        </LeftDiv>
        <RightDiv>
          <FormContainer>
            <Form
              name="send_message"
              onFinish={onFinish}
              layout="vertical"
              // style={{ maxWidth: 600, margin: "0 auto" }}
            >
              <Col style={{ textAlign: "center" }}>
                <FormHeader>Send Message</FormHeader>
              </Col>

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
                <SubmitButton
                  icon={<SendOutlined />}
                  type="primary"
                  htmlType="submit"
                >
                  Send
                </SubmitButton>
              </Form.Item>
            </Form>
          </FormContainer>
        </RightDiv>
      </MainDiv>
    </Container>
  );
};

export default Feedback;
