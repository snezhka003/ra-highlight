import List from "./Components/List";
import { videoList } from "./data/videoList";
import './App.css';

export default function App() {
  return (
    <List list={videoList} />
  );
}