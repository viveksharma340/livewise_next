import React, { useState } from "react";

interface FeatureBoxProps {
  iconBg: string;
  iconHoverBg: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  iconBg,
  iconHoverBg,
  title,
  description,
}) => {
  const [hover, setHover] = useState(false);

  const containerStyle: React.CSSProperties = {
    padding: "2.5rem",
    transition: "all 0.2s",
    borderRadius: "0.375rem",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: hover
      ? "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)"
      : "none",
  };

  const iconStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    borderRadius: "0.5rem",
    zIndex: 10,
    transition: "all 0.2s",
    transform: hover ? "rotate(-6deg)" : "rotate(0deg)",
    background: iconBg,
    padding: "2rem",
  };

  const iconInnerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    transform: "rotate(6deg)",
    opacity: 0.3,
    borderRadius: "0.5rem",
    backgroundColor: iconHoverBg,
    zIndex: -10,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={iconStyle}>
        <div style={iconInnerStyle}></div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
        >
          <path
            d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
            fill="currentColor"
          />
          <path
            d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div style={{ color: "black" }}>
        <h1
          style={{
            marginTop: "0.5rem",
            fontSize: "28px",
            fontWeight: 600,
            color: "rgb(58, 58, 58)",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            width: "100%",
            marginTop: "0.5rem",
            fontWeight: 500,
            maxWidth: "95%",
            margin: "auto",

            fontSize: "18px",
            lineHeight: "155%",
            color: "rgb(141, 141, 141",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default FeatureBox;
