import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ExploreBar from "../components/ExploreBar";
import ProfileInfo from "../components/ProfileInfo";
import profileData from "../Data/profileData";
import TweetCard from "../components/TweetCard";
import tweetData from "../Data/tweets.json";

const Profile = () => {
  const allTweets = tweetData.map((item) => {
    return <TweetCard key={item.id} tweetData={item} />;
  });
  const profile = profileData;
  return (
    <Layout title="Kinjala / Twitter">
      <div className="h-screen flex flex-row">
        {/* Sidebar  */}
        <Sidebar />
        {/* Homefeed Section  */}
        <div className="flex-1 overflow-scroll">
          <ProfileInfo profile={profile} />
          {allTweets}
        </div>
        {/* Right Explore bar */}
        <ExploreBar />
      </div>
    </Layout>
  );
};

export default Profile;
