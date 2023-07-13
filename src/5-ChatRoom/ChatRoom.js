// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

export const ChatRoom = () => {
  const [data, setData] = useState([]);

  const showData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchats");
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
      {data.map((message, index) => {
        const sender = index % 2 === 0 ? "Someone" : "User";
        return (
          <div key={index}>
            <strong>{sender} </strong> : {message}
          </div>
        );
      })}
    </div>
  );
};
