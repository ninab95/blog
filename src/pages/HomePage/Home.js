import React from "react";
import Header from "../../components/Header";
import Slides from "./Slides";
import PromoArea from "./PromoArea";
import Content from "./Content";
import Images from "./Images";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Slides />
      <PromoArea />
      <Content />
      <Images />
      <Footer />
    </div>
  );
}

export default Home;
