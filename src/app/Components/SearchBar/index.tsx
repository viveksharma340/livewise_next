import React, { useState, useEffect } from 'react';
import { Button, Input, Typography } from 'antd';
import { AudioOutlined, SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

const { Title, Text } = Typography;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 1em;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  // margin-bottom: 1em;


`;

export const SearchBox = () => (
  <Link href={'/#about'} style={{cursor:'pointer'}}>
  <StyledInputContainer>
    <Input
      size="large"
      disabled
      placeholder=""
      prefix={<AudioOutlined />}
      suffix={<Button icon={<SendOutlined/>}></Button>}
    />
  </StyledInputContainer>
  </Link>
);

export const Typewriter: React.FC<{ messages: string[]; delay: number }> = ({ messages, delay }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= messages.length) {
      setIndex(0);
      return;
    }

    if (subIndex === messages[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => {
        setReverse(false);
        setSubIndex(0);
        setIndex((prev) => prev + 1);
      }, 2000);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, messages, delay]);

  return (
    <Text style={{ color: '#00000', fontSize: '20px' }}>
      {`${messages[index]?.substring(0, subIndex)}${reverse ? "" : "|"}`}
    </Text>
  );
};