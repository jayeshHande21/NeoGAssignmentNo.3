// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const Tweets = () => {
  const [data, setData] = useState([]);

  const showTrending = () => {
    console.log("tweets");

    const updatedData = data.filter((tweet) => tweet.likes > 50);
    setData(updatedData);
  };

  const showData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/usertweets");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <hr />
      <h2>TWEETS</h2>
      <button
        onClick={showTrending}
        style={{ width: "70px", height: "30px", float: "right" }}
      >
        Trending
      </button>
      <div style={{ width: "100%" }}>
        {" "}
        {data.map((user, index) => {
          return (
            <div key={index}>
              {" "}
              <hr />
              {user.content} <br />
              Likes: {user.likes} Views : {user.views}
            </div>
          );
        })}
      </div>
    </div>
  );
};
