import React from "react";
import ExploreBar from "../components/ExploreBar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import HomeFeed from "../components/HomeFeed";
const Home = () => {
  return (
    <Layout title="Home / Twitter">
      <div className="h-screen flex flex-row">
        {/* Sidebar  */}
        <Sidebar />
        {/* Homefeed Section  */}
        <div>
          <HomeFeed />
        </div>

        {/* Right Explore bar */}
        <ExploreBar />
      </div>
    </Layout>
  );
};

export default Home;
