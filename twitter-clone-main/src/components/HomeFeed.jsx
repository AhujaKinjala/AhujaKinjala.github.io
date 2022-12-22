import React from "react";
import HomeWidget from "./HomeWidget";
import TweetCard from "./TweetCard";
import tweetData from "../Data/tweets.json";

const HomeFeed = () => {
  const allTweets = tweetData.map((item) => {
    return <TweetCard key={item.id} tweetData={item} />;
  });
  return (
    <div className="h-screen overflow-scroll">
      <HomeWidget />
      {allTweets}
    </div>
  );
};

export default HomeFeed;
