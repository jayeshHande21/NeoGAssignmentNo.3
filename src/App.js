import "./styles.css";
import { Tabs } from "./1-Tabs";
import { Grocery } from "./2-GroceryList";
import { Slider } from "./3-Card";
import { ChangeBackground } from "./4-SetBackground";
import { ChatRoom } from "./5-ChatRoom/ChatRoom";
import { Tweets } from "./6-Tweets/Tweets";
import { Movies } from "./7-Movies/Movies";

export default function App() {
  return (
    <div className="App">
      <h1>Assignment Three</h1>
      <Tabs />
      <Grocery />
      <Slider />
      <ChangeBackground />
      <ChatRoom />
      <Tweets />
      <Movies />
    </div>
  );
}
