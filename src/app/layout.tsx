import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import CustomFooter from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livewise",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            {children}
          </div>
        </div>
        <div className="footer">
          <CustomFooter />
        </div>
      </body>
    </html>
  );
}
