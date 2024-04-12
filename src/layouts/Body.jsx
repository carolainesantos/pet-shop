import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Body() {
  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#D7D5D0",
          color: "#333",
          margin: "0",
          padding: "20px 0px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
