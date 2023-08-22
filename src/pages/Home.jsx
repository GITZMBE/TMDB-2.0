import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopRated from "../components/TopRated";

function Home() {
  return (
    <div id='home'>
      <Header />
      <TopRated />
      <Footer />
    </div>
  );
}

export default Home;
