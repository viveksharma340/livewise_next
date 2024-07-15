import React from "react";

interface BlogCardProps {
  imgSrc: string;
  title: string;
  description: string;
  
}
const styles: { [key: string]: React.CSSProperties } = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
      marginTop: "5rem",
      
    },
    blogCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
     
    },
    imgContainer: {
      borderRadius: "0.375rem",
      overflow: "hidden",
      width: "100%",
      maxWidth: "80%",
      height:'500px',
      margin: "0 auto",
     
    },
    img: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    title: {
      marginTop: "1rem",
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#1A202C",
    },
    description: {
      marginTop: "1rem",
      fontSize: "0.875rem",
      fontWeight: "300",
      maxWidth: "28rem",
      color: "#1A202C",
    },
    date: {
      color: "#A0AEC0",
      marginTop: "1rem",
    },
  };
const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, title, description,  }) => {
  return (
    <div style={styles.blogCard}>
      <div style={styles.imgContainer}>
        <img src={imgSrc} alt="headerImage" style={styles.img} />
      </div>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.description}>{description}</p>
      
    </div>
  );
};

export default BlogCard