import { useState } from "react";

// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.

export const Tabs = () => {
  const [data, setData] = useState("PUNE");

  const setCityName = (name) => {
    setData(name);
  };
  console.log(data);
  const showCityContent = () => {
    switch (data) {
      case "PUNE":
        return <p>PUNE</p>;
      case "MUMBAI":
        return <p>MUMBAI</p>;
      case "AMRAVATI":
        return <p>AMRAVATI</p>;
      case "NAGPUR":
        return <p>NAGPUR</p>;
      default:
        return null;
    }
  };
  return (
    <div>
      <button onClick={() => setCityName("PUNE")}>PUNE</button>
      <button onClick={() => setCityName("MUMBAI")}>MUMBAI</button>
      <button onClick={() => setCityName("AMRAVATI")}>AMRAVATI</button>
      <button onClick={() => setCityName("NAGPUR")}>NAGPUR</button>
      <div>{showCityContent()}</div>
    </div>
  );
};
