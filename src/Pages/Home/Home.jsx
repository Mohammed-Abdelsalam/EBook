import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <Header />
      <Footer style={{ marginTop: "auto", marginBottom: 0 }} />
    </div>
  );
};

export default Home;
